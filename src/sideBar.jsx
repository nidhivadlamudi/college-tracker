import { useState } from "react";
import { CheckCircle, Circle } from "lucide-react";
import ProgressBar from "./progressbar";

const tasks = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];

export default function VerticalTaskBar() {
  const [completed, setCompleted] = useState(Array(tasks.length).fill(false));

  const toggleTask = (index) => {
    setCompleted((prev) => {
      const newCompleted = [...prev];
      newCompleted[index] = !newCompleted[index];
      return newCompleted;
    });
  };

  const progress = (completed.filter(Boolean).length / tasks.length) * 100;

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 h-screen w-20">
      {tasks.map((task, index) => (
        <div key={index} className="flex flex-col items-center">
          <div
            className="cursor-pointer"
            onClick={() => toggleTask(index)}
          >
            {completed[index] ? (
              <CheckCircle color="#008000" />
            ) : (
              <Circle className="text-black" />
            )}
          </div>
          {index < tasks.length - 1 && (
            <div className="w-1 h-10 bg-gray-300" />
          )}
        </div>
      ))}
      <ProgressBar progress={progress} />
    </div>
  );
}
