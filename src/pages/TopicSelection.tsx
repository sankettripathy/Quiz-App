import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Monitor, 
  Trophy, 
  DollarSign, 
  Atom, 
  Stars, 
  Clock3, 
  BookOpen,
  LogOut,
  User,
  Loader2
} from "lucide-react";

interface Topic {
  id: string;
  name: string;
  icon: React.ElementType;
  gradient: string;
  description: string;
}

const topics: Topic[] = [
  {
    id: "it",
    name: "Information Technology",
    icon: Monitor,
    gradient: "bg-gradient-it",
    description: "Programming, networks, and tech concepts"
  },
  {
    id: "sports",
    name: "Sports",
    icon: Trophy,
    gradient: "bg-gradient-sports", 
    description: "Games, athletes, and sporting events"
  },
  {
    id: "finance",
    name: "Finance",
    icon: DollarSign,
    gradient: "bg-gradient-finance",
    description: "Markets, economics, and investment"
  },
  {
    id: "physics",
    name: "Physics",
    icon: Atom,
    gradient: "bg-gradient-physics",
    description: "Laws of nature and scientific principles"
  },
  {
    id: "history",
    name: "History",
    icon: Clock3,
    gradient: "bg-gradient-history",
    description: "Past events and civilizations"
  },
  {
    id: "literature",
    name: "Literature",
    icon: BookOpen,
    gradient: "bg-gradient-literature",
    description: "Books, authors, and literary works"
  }
];

const TopicSelection = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTopicId, setSelectedTopicId] = useState<string | null>(null);

  const handleTopicSelect = (topicId: string) => {
    setIsLoading(true);
    setSelectedTopicId(topicId);
    
    // Add a slight delay for better UX
    setTimeout(() => {
      navigate(`/quiz/${topicId}`);
    }, 1500);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Header */}
      <header className="bg-background shadow-card border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">QuizMaster</h1>
              <p className="text-sm text-muted-foreground">Choose your topic</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <User className="w-4 h-4" />
              <span>Demo User</span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLogout}
              className="text-muted-foreground hover:text-foreground"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Select Your Quiz Topic
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from 6 exciting categories, each with 5 challenging questions to test your knowledge
          </p>
        </div>

        {/* Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => {
            const IconComponent = topic.icon;
            return (
              <Card
                key={topic.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-elegant hover:scale-105 border-0 overflow-hidden"
                onClick={() => handleTopicSelect(topic.id)}
              >
                <CardContent className="p-0">
                  <div className={`${topic.gradient} p-6 text-white relative overflow-hidden`}>
                    <div className="relative z-10">
                      <IconComponent className="w-12 h-12 mb-4 opacity-90" />
                      <h3 className="text-xl font-bold mb-2">{topic.name}</h3>
                      <p className="text-white/80 text-sm">{topic.description}</p>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-4 -translate-x-4"></div>
                  </div>
                  
                  <div className="p-6 bg-white dark:bg-gray-800">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>5 Questions</span>
                      <span>~3 minutes</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-primary hover:opacity-90 text-white font-medium transition-all duration-300 group-hover:shadow-glow"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTopicSelect(topic.id);
                      }}
                      disabled={isLoading}
                    >
                      {isLoading && selectedTopicId === topic.id ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Loading...
                        </>
                      ) : (
                        'Start Quiz'
                      )}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-card">
            <div className="text-2xl font-bold text-primary mb-2">30</div>
            <div className="text-sm text-muted-foreground">Total Questions</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-card">
            <div className="text-2xl font-bold text-success mb-2">6</div>
            <div className="text-sm text-muted-foreground">Quiz Topics</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-card">
            <div className="text-2xl font-bold text-warning mb-2">~20</div>
            <div className="text-sm text-muted-foreground">Minutes Total</div>
          </div>
        </div>
      </main>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-2xl text-center max-w-md mx-4">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Loader2 className="w-8 h-8 text-white animate-spin" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Preparing Your Quiz
            </h3>
            <p className="text-muted-foreground mb-4">
              Loading {topics.find(t => t.id === selectedTopicId)?.name} questions...
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


export default TopicSelection;

