

import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Trophy, 
  RotateCcw, 
  Home, 
  CheckCircle, 
  XCircle, 
  Target,
  Award,
  TrendingUp
} from "lucide-react";

interface LocationState {
  score: number;
  totalQuestions: number;
  percentage: number;
  topic: string;
  topicId: string;
  questions: any[];
  selectedAnswers: (number | null)[];
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;

  useEffect(() => {
    if (!state) {
      navigate("/topics");
    }
  }, [state, navigate]);

  if (!state) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Loading Results...</h1>
        </div>
      </div>
    );
  }

  const { score, totalQuestions, percentage, topic, topicId, questions, selectedAnswers } = state;

  const getFeedbackMessage = (percentage: number) => {
    if (percentage >= 90) return "Outstanding! You're a true expert in this field! 🌟";
    if (percentage >= 80) return "Excellent work! You have a strong grasp of the subject! 🎯";
    if (percentage >= 70) return "Good job! You're well on your way to mastery! 👏";
    if (percentage >= 60) return "Not bad! Keep studying to improve further! 📚";
    if (percentage >= 50) return "You're getting there! Review the topics and try again! 💪";
    return "Don't give up! Practice makes perfect! Keep learning! 🚀";
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-success";
    if (percentage >= 60) return "text-warning";
    return "text-destructive";
  };

  const getScoreIcon = (percentage: number) => {
    if (percentage >= 80) return <Trophy className="w-6 h-6 text-success" />;
    if (percentage >= 60) return <Award className="w-6 h-6 text-warning" />;
    return <Target className="w-6 h-6 text-destructive" />;
  };

  const handleRetakeQuiz = () => {
    navigate(`/quiz/${topicId}`);
  };

  const handleBackToTopics = () => {
    navigate("/topics");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background shadow-card border-b">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Quiz Results</h1>
                <p className="text-sm text-muted-foreground">{topic}</p>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              onClick={handleBackToTopics}
              className="text-muted-foreground hover:text-foreground"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Topics
            </Button>
          </div>
        </div>
      </header>

      {/* Main Results Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Score Summary */}
        <Card className="shadow-elegant border-0 overflow-hidden mb-8">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-full mb-4">
                {getScoreIcon(percentage)}
              </div>
              
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Your Score
              </h2>
              
              <div className={`text-6xl font-bold mb-4 ${getScoreColor(percentage)}`}>
                {percentage}%
              </div>
              
              <div className="text-lg text-muted-foreground mb-4">
                {score} out of {totalQuestions} questions correct
              </div>
              
              <Badge 
                className={`text-sm px-4 py-2 ${
                  percentage >= 80 
                    ? 'bg-success text-white' 
                    : percentage >= 60 
                      ? 'bg-warning text-black' 
                      : 'bg-destructive text-white'
                }`}
              >
                {percentage >= 80 ? 'Excellent' : percentage >= 60 ? 'Good' : 'Needs Improvement'}
              </Badge>
            </div>

            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <p className="text-lg text-foreground font-medium">
                {getFeedbackMessage(percentage)}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white dark:bg-gray-800 shadow-card border-0">
            <CardContent className="p-6 text-center">
              <CheckCircle className="w-8 h-8 text-success mx-auto mb-3" />
              <div className="text-2xl font-bold text-success mb-1">{score}</div>
              <div className="text-sm text-muted-foreground">Correct Answers</div>
            </CardContent>
          </Card>
          
          <Card className=" bg-white dark:bg-gray-800 shadow-card border-0">
            <CardContent className="p-6 text-center">
              <XCircle className="w-8 h-8 text-destructive mx-auto mb-3" />
              <div className="text-2xl font-bold text-destructive mb-1">{totalQuestions - score}</div>
              <div className="text-sm text-muted-foreground">Incorrect Answers</div>
            </CardContent>
          </Card>
          
          <Card className="bg-white dark:bg-gray-800 shadow-card border-0">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-primary mb-1">{Math.round((score / totalQuestions) * 100)}%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Review */}
        <Card className="shadow-elegant border-0 overflow-hidden mb-8">
          <CardHeader className="bg-muted/30">
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Question Review
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {questions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.answerIndex;

              return (
                <div key={index} className="p-6 border-b border-border last:border-b-0">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        isCorrect ? "bg-success text-white" : "bg-destructive text-white"
                      }`}
                    >
                      {isCorrect ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <XCircle className="w-4 h-4" />
                      )}
                    </div>

                    <div className="flex-1">
                      <h4 className="font-medium text-foreground mb-3">
                        {index + 1}. {question.question}
                      </h4>

                      <div className="space-y-2 mb-3">
                        {question.options.map((option: string, optionIndex: number) => {
                          const isUserAnswer = userAnswer === optionIndex;
                          const isCorrectAnswer = question.answerIndex === optionIndex;

                          return (
                            <div
                              key={optionIndex}
                              className={`p-3 rounded border ${
                                isCorrectAnswer
                                  ? "border-success bg-success/10 text-success"
                                  : isUserAnswer && !isCorrectAnswer
                                  ? "border-destructive bg-destructive/10 text-destructive"
                                  : "border-border bg-background text-muted-foreground"
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span className="font-medium">
                                  {String.fromCharCode(65 + optionIndex)}.
                                </span>
                                <span>{option}</span>
                                {isCorrectAnswer && (
                                  <Badge className="bg-success text-white text-xs">
                                    Correct
                                  </Badge>
                                )}
                                {isUserAnswer && !isCorrectAnswer && (
                                  <Badge className="bg-destructive text-white text-xs">
                                    Your Answer
                                  </Badge>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {question.explanation && (
                        <div className="bg-muted/30 rounded p-3">
                          <p className="text-sm text-muted-foreground">
                            <strong>Explanation:</strong> {question.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleRetakeQuiz}
            className="bg-gradient-primary hover:opacity-90 text-white font-medium flex items-center gap-2 px-6"
          >
            <RotateCcw className="w-4 h-4" />
            Retake This Quiz
          </Button>
          
          <Button 
            onClick={handleBackToTopics}
            variant="outline"
            className="flex items-center gap-2 px-6"
          >
            <Home className="w-4 h-4" />
            Choose Another Topic
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Results;

