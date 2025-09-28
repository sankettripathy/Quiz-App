// import { Progress } from "@/components/ui/progress";

// interface ProgressBarProps {
//   currentQuestion: number;
//   totalQuestions: number;
// }

// const ProgressBar = ({ currentQuestion, totalQuestions }: ProgressBarProps) => {
//   const progressPercentage = ((currentQuestion) / totalQuestions) * 100;

//   return (
//     <div className="w-full space-y-2">
//       <div className="flex justify-between text-sm text-muted-foreground">
//         <span>Progress</span>
//         <span>{currentQuestion}/{totalQuestions} answered</span>
//       </div>
//       <Progress 
//         value={progressPercentage} 
//         className="h-3 bg-muted"
//       />
//       <div className="text-xs text-center text-muted-foreground">
//         {Math.round(progressPercentage)}% Complete
//       </div>
//     </div>
//   );
// };

// export default ProgressBar;

import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  currentQuestion: number;
  totalQuestions: number;
}

const ProgressBar = ({ currentQuestion, totalQuestions }: ProgressBarProps) => {
  const progressPercentage = ((currentQuestion) / totalQuestions) * 100;

  return (
    <div className="w-full space-y-2 flex flex-col items-center">
      <div className="flex justify-between text-sm text-muted-foreground w-3/4">
        <span>Progress</span>
        <span>{currentQuestion}/{totalQuestions} answered</span>
      </div>
      <Progress 
        value={progressPercentage} 
        className="h-3 w-3/4 bg-muted rounded-lg"
      />
      <div className="text-xs text-center text-muted-foreground w-3/4">
        {Math.round(progressPercentage)}% Complete
      </div>
    </div>
  );
};

export default ProgressBar;
