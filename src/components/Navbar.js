import React from "react";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="p-5 flex flex-row">
        <div className="basis-1/2">
          <p className="w-12 font-semibold text-lg md:text-2xl lg:text-4xl">OLIN</p>
        </div>
        <div className="basis-1/2" href="/help">
          <div className="flex justify-end">
            <img src="help.png" alt="help" className="mx-1" />
            <span className="hidden sm:block">Pusat Bantuan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
