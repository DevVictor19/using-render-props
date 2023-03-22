import { useState, MouseEvent, ReactNode } from "react";

interface MousePosition {
  x: number;
  y: number;
}

interface MouseTrackerProps {
  render: (mousePosition: MousePosition) => ReactNode;
}

function MouseTracker({ render }: MouseTrackerProps) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#20232a",
        overflow: "hidden",
      }}
      onMouseMove={handleMouseMove}
    >
      {render(mousePosition)}
    </div>
  );
}

export default MouseTracker;
