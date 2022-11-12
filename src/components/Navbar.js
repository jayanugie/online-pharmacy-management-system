import React from "react";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="p-5 flex flex-row">
        <div className="basis-1/2">
          <img src="logo192.png" alt="logo" className="w-12" />
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
