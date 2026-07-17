import React from "react";

const SectionDivider = () => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap text-center font-gothic text-black/40 text-xl py-2 bg-noise select-none pointer-events-none tracking-[0.2em]">
      {"~ ".repeat(150)}
    </div>
  );
};

export default SectionDivider;
