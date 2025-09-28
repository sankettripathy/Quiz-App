
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import ProgressBar from "@/components/ProgressBar";
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  BookOpen,
  Home,
  Loader2
} from "lucide-react";

interface Question {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

const Quiz = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const topicNames: Record<string, string> = {
    it: "Information Technology",
    sports: "Sports",
    finance: "Finance", 
    physics: "Physics",
    astronomy: "Astronomy",
    history: "History",
    literature: "Literature"
  };

  const fetchQuestions = async (topic: string) => {
    try {
      const res = await axios.get(`https://quiz-app-1-71p2.onrender.com/api/questions/${topic}`);
      
      if (Array.isArray(res.data)) {
        return res.data as Question[];
      }
      if (res.data.question && Array.isArray(res.data.question)) {
        return res.data.question as Question[];
      }
      return [];
    } catch (err) {
      console.error("Failed to fetch quiz from backend:", err);
      return [];
    }
  };

  useEffect(() => {
    if (!topicId || !topicNames[topicId]) {
      toast({
        title: "Topic Not Found",
        description: "The selected topic doesn't exist.",
        variant: "destructive",
      });
      navigate("/topics");
      return;
    }

    const loadQuiz = async () => {
      setIsLoading(true);
      const fetchedQuestions = await fetchQuestions(topicNames[topicId!]);
      if (fetchedQuestions.length === 0) {
        toast({
          title: "Error",
          description: "Failed to fetch quiz questions. Please try again.",
          variant: "destructive",
        });
        navigate("/topics");
        return;
      }
      setQuestions(fetchedQuestions);
      setSelectedAnswers(new Array(fetchedQuestions.length).fill(null));
      setIsLoading(false);
    };

    loadQuiz();

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [topicId, navigate, toast]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const calculateScore = () => {
    return questions.reduce((score, q, idx) => score + (selectedAnswers[idx] === q.answerIndex ? 1 : 0), 0);
  };

  const handleSubmit = () => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    setTimeout(() => {
    navigate("/results", { 
      state: { 
        score, 
        totalQuestions: questions.length,
        percentage,
        topic: topicNames[topicId!],
        topicId,
        questions,
        selectedAnswers
      }
    });
  }, 1500);
  };

  if (isLoading || questions.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Skeleton className="h-10 w-64" />
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const answeredQuestions = selectedAnswers.filter(a => a !== null).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background shadow-card border-b">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Button variant="ghost" size="sm" onClick={() => navigate("/topics")}>
            <Home className="w-4 h-4 mr-2" /> Back to Topics
          </Button>
          <div>
            <h1 className="font-semibold text-foreground">{topicNames[topicId!]}</h1>
            <p className="text-sm text-muted-foreground">
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className={timeLeft <= 60 ? "text-destructive" : "text-muted-foreground"}>
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
        <ProgressBar currentQuestion={answeredQuestions} totalQuestions={questions.length} />
      </header>

      {/* Quiz Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Card className="shadow-elegant border-0 overflow-hidden">
          <CardContent className="p-8">
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  {currentQuestionIndex + 1}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-foreground leading-relaxed">
                    {currentQuestion.question}
                  </h2>
                </div>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === index;
                  const optionLabel = String.fromCharCode(65 + index);
                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                        isSelected
                          ? "border-primary bg-primary/5 shadow-md"
                          : "border-border hover:border-primary/50 hover:bg-muted/50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                            isSelected
                              ? "border-primary bg-primary text-white"
                              : "border-muted-foreground text-muted-foreground"
                          }`}
                        >
                          {optionLabel}
                        </div>
                        <span
                          className={
                            isSelected
                              ? "text-foreground font-medium"
                              : "text-foreground"
                          }
                        >
                          {option}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-border">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                variant="outline"
              >
                <ChevronLeft className="w-4 h-4" /> Previous
              </Button>

              {isLastQuestion ? (
                <Button
                  onClick={handleSubmit}
                  disabled={
                    isSubmitting || selectedAnswers[currentQuestionIndex] === null
                  }
                  className="bg-gradient-success hover:opacity-90 text-white font-medium flex items-center gap-2"
                >
                  {isSubmitting ? "Submitting..." : "Submit Quiz"}{" "}
                  <BookOpen className="w-4 h-4" />
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={selectedAnswers[currentQuestionIndex] === null}
                  className="bg-gradient-primary hover:opacity-90 text-white flex items-center gap-2"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </main>

      {isSubmitting && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-2xl text-center max-w-md mx-4">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Analyzing Your Answers
            </h3>
            <p className="text-muted-foreground mb-4">
              Loading Results...
            </p>
            <div className="flex items-center justify-center gap-1">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Quiz;



