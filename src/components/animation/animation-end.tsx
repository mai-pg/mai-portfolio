import React, { useState } from "react";

function AnimationEnd() {
  const [animationFinished, setAnimationFinished] = useState(false);

  const handleAnimationEnd = () => {
    setAnimationFinished(true);
  };

  return (
    <div>
      <div className="animatation-end" onAnimationEnd={handleAnimationEnd}>
        animation
      </div>
      {animationFinished && <div> textarea </div>}
    </div>
  );
}

export default AnimationEnd;
