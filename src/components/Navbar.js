import React from "react";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="p-5 flex flex-row">
        <a className="basis-1/2" href="/">
          <p className="w-12 font-semibold text-lg md:text-2xl lg:text-4xl">OLIN</p>
        </a>
        <div className="basis-1/2" href="/help">
          <div className="flex justify-end">
            <img src="/help.png" alt="help" className="mx-1" />
            <span className="hidden sm:block">Pusat Bantuan</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
