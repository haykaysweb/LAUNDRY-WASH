import React from "react";

export default function Effort() {
  return (
    <>
      <div className="bg-(--navBg) text-white">
        <div
          className="flex flex-col-reverse py-10 md:py-0 md:flex-row md:items-center 
        gap-5"
        >
          <div className="md:w-[50%]">
            <img src="/RectangleOne.png" alt="" className=""/>
          </div>
          <div className="p-2 md:p-0">
            <h1 className="text-2xl md:text-5xl">Laundry Made <br className="hidden md:flex"/> Effortless</h1>
            <p className="text-sm py-4">Fresh, clean, perfectly folded—right <br className="hidden md:flex"/> when you need it.</p>
            <button className="bg-(--signupBtnBg)  w-full text-sm md:text-xl cursor-pointer px-10 py-4 rounded-full">
              Book laundry
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
