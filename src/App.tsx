import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import TopicSelection from "./pages/TopicSelection";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import { ThemeProvider } from "./components/ThemeProvider"; // 👈 new

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/topics" element={<TopicSelection />} />
            <Route path="/quiz/:topicId" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            {/* Legacy route for the original index */}
            <Route path="/welcome" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);



export default App;
