import React from "react";
import Navbar from "../components/Navbar";
import "../index.css";

const CompanyRegister = () => {
  return (
    <div className="bg-register">
      <Navbar />

      <div className="flex flex-row">
        <div className="basis-1/2 justify-center hidden lg:flex">
          <div className="flex-col">
            <div className="flex bg-sky-500 rounded-lg">
              <img src="/plus.png" className="w-8 h-8 m-2" alt="register" />
              <p className="m-3 font-semibold">Pendaftaran Sarana</p>
            </div>
            <div className="flex">
              <img src="/check.png" className="w-8 h-8 m-2" alt="register" />
              <p className="m-3 text-sm">Register</p>
            </div>
          </div>
        </div>

        <div className="lg:basis-1/2">
          <div className="p-5 lg:p-10 w-4/5 shadow-xl bg-slate-100 rounded-lg container mx-auto lg:h-4/6 lg:overflow-y-scroll">
            <div className="space-y-4">
              <h1 className="font-bold text-lg lg:text-3xl">
                Input Data Perusahaan
              </h1>
              <input
                placeholder="Bidang Usaha *"
                className="p-2 pl-5 rounded-lg w-full border-gray-500 focus:outline-sky-500"
              />
              <input
                placeholder="Nama Perusahaan *"
                className="p-2 pl-5 rounded-lg w-full border-gray-500  focus:outline-sky-500"
              />
              <input
                placeholder="NPWP Perusahaan *"
                className="p-2 pl-5 rounded-lg w-full border-gray-500  focus:outline-sky-500"
              />
              <input
                placeholder="Alamat Sesuai NPWP *"
                className="p-2 pl-5 rounded-lg w-full border-gray-500  focus:outline-sky-500"
              />
              <input
                placeholder="Provinsi *"
                className="p-2 pl-5 rounded-lg w-full border-gray-500 focus:outline-sky-500"
              />
              <input
                placeholder="Kota / Kabupaten *"
                className="p-2 pl-5 rounded-lg w-full border-gray-500 focus:outline-sky-500"
              />
              <input
                placeholder="Kecamatan *"
                className="p-2 pl-5 rounded-lg w-full border-gray-500 focus:outline-sky-500"
              />
              <input
                placeholder="Kode Pos *"
                className="p-2 pl-5 rounded-lg w-full border-gray-500 focus:outline-sky-500"
              />
              <h1 className="font-bold text-base lg:text-lg">
                Upload Kelengkapan Data
              </h1>
              <div>
                <div className="flex p-2 bg-sky-500 rounded-t-lg">
                  <img src="/paper.png" alt="paper" className="h-6" />
                  <p className="p-1 text-xs lg:text-sm text-white">NIB *</p>
                </div>
                <div className="p-5 bg-white rounded-b-lg hover:cursor-pointer">
                  <div className="flex justify-center p-2">
                    <img
                      src="/upload.png"
                      alt="upload"
                      className="h-10 lg:h-14"
                    />
                  </div>
                  <p className="text-center lg:text-sm text-xs">
                    Unggah NIB Valid
                  </p>
                </div>
                <div className="my-10">
                  <a href="/register/account">
                    <button className="w-full rounded-lg bg-orange-400 hover:bg-orange-300 text-white p-2">
                      Selanjutnya
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

export default CompanyRegister;
