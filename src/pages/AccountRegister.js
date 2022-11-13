import React from "react";
import Navbar from "../components/Navbar";

const AccountRegister = () => {
  return (
    <div className="bg-next-register">
      <Navbar />

      <div className="flex flex-row">
        <div className="basis-1/2 justify-center hidden lg:flex">
          <div className="flex-col space-y-2">
            <div className="flex bg-sky-500 rounded-lg">
              <img src="/plus.png" className="w-8 h-8 m-2" alt="register" />
              <p className="m-3 font-semibold">Pendaftaran Sarana</p>
            </div>
            <div className="flex bg-sky-500 rounded-lg">
              <img src="/check.png" className="w-8 h-8 m-2" alt="register" />
              <p className="m-3 font-semibold">Register</p>
            </div>
          </div>
        </div>

        <div className="lg:basis-1/2">
          <div className="p-5 lg:p-10 w-4/5 shadow-xl bg-slate-100 rounded-lg container mx-auto">
            <div className="space-y-4">
              <h1 className="font-bold text-lg lg:text-3xl">
                Register Akun OLIN
              </h1>
              <input
                placeholder="Email *"
                className="p-2 pl-5 rounded-lg w-full border-gray-500 focus:outline-sky-500"
              />
              <input
                placeholder="Kata Sandi *"
                className="p-2 pl-5 rounded-lg w-full border-gray-500  focus:outline-sky-500"
              />
              <input
                placeholder="Konfirmasi Kata Sandi *"
                className="p-2 pl-5 rounded-lg w-full border-gray-500  focus:outline-sky-500"
              />
              <div className="flex flex-row">
                <input type="checkbox" className="mx-2 w-5 h-5" />
                <p className="text-xs">
                  Dengan membuat akun, Anda menyetujui{" "}
                  <a href="/privacy" className="text-orange-500">
                    Ketentuan <br />
                    Penggunaan dan Pemberitahuan Privasi{" "}
                  </a>
                  aplikasi OLIN
                </p>
              </div>
              <div className="flex flex-row">
                <div className="basis-1/2 mx-2">
                  <a href="/register/company">
                    <button className="w-full rounded-lg bg-white hover:bg-gray-300 text-gray-500 p-2">
                      Kembali
                    </button>
                  </a>
                </div>
                <div className="basis-1/2 mx-2">
                  <a href="/dashboard">
                    <button className="w-full rounded-lg bg-orange-400 hover:bg-orange-300 text-white p-2">
                      Register
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountRegister;
