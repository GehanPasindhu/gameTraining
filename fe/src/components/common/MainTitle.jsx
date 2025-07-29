import React from "react";

function MainTitle({ title }) {
  return (
    <div className="flex items-center gap-4">
      <div className="permanent-marker-regular text-2xl md:text-4xl lg:text-7xl whitespace-nowrap">
        {title}
      </div>
      <div className="h-1 w-full rounded-r-2xl ml-2 lg:ml-10 bg-amber-50 mt-2 lg:mt-5" />
    </div>
  );
}

export default MainTitle;
