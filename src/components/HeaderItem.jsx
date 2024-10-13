/* eslint-disable no-unused-vars */
import React from "react";

function HeaderItem({ name, Icon }) {
  return (
    <div className="text-white  flex items-center gap-3 text-[15px] font-semibold cursor-pointer relative">
      <div className="ml-1  flex items-center gap-3 mt-2">
        <Icon />
        <h2 className="relative after:content-[''] after:block after:absolute after:left-0 after:bottom-[-3px] after:h-[2px] after:w-full after:scale-x-0 after:origin-left after:bg-white after:transition-transform after:duration-300 group-hover:after:scale-x-100 ">
          {name}
        </h2>
      </div>
    </div>
  );
}

export default HeaderItem;
