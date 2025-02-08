import { useState } from "react";

const VerticalProgressBar = () => {
  const [checkedBubbles, setCheckedBubbles] = useState([]);
  const bubbles = ["Start Application", "Recommendation 1", "Supplemental 1", "Supplemental 2", "Submit"];

  const toggleBubble = (value) => {
    setCheckedBubbles((prev) => {
      const newChecked = prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value];
      return newChecked;
    });
  };

  const progress = (checkedBubbles.length / bubbles.length) * 100;

  return (
    <div className="fixed left-0 top-0 h-full w-4 bg-gray-200 flex flex-col items-center z-10">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 bg-blue-500 transition-all duration-200" 
        style={{ height: `${Math.max(...checkedBubbles, 0)}` }}>
      </div>
      {bubbles.map((bubble) => (
        <div
          key={bubble}
          className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2 z-20 bg-white p-1 rounded cursor-pointer"
          style={{ top: `${bubble}` }}
          onClick={() => toggleBubble(bubble)}
        >
          <input
            type="checkbox"
            checked={checkedBubbles.includes(bubble)}
            onChange={() => toggleBubble(bubble)}
            className="w-4 h-4 cursor-pointer"
          />
          <span className="text-sm cursor-pointer">{bubble}</span>
        </div>
      ))}
    </div>
  );
};

const PageContent = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Check Off Your Progress</h1>
      <div className="h-[200vh] bg-gray-100 p-4">
        <p className="text-lg">Mark progress milestones manually by checking them off!</p>
      </div>
    </div>
  );
};

export default function SideBar() {
  return (
    <div>
      <PageContent />
      <VerticalProgressBar />
    </div>
  );
}
