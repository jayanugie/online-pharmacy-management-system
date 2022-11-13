import React from "react";
import Navbar from "../components/Navbar";
import { Label, TextInput, Checkbox } from "flowbite-react";
import { HiMail, HiLockClosed } from "react-icons/hi";

const Login = () => {
  return (
    <div className="bg-login">
      <Navbar />

      {/* welcome */}
      <div className="lg:flex lg:flex-row">
        <div className="basis-1/2 flex justify-center py-12 font-medium">
          <p className="text-2xl lg:text-4xl">
            Selamat Datang di Solusi <br />
            Perangkat Lunak Farmasi <br />
            <span className=" text-base lg:text-lg">
              Sistem Manajemen Apotek Online
            </span>
          </p>
        </div>

        {/* right content */}
        <div className="basis-1/2 flex justify-center">
          <img src="/person.png" alt="person" className="lg:h-64 h-48" />
        </div>
      </div>

      {/* login */}
      <p className="text-center font-bold lg:text-lg my-5 container mx-auto px-16">
        Silakan masuk ke dalam akun Anda dan kelola apotek Anda.
      </p>
      <div className="container mx-auto w-80">
        <div>
          <Label htmlFor="email" value="EMAIL" />
          <TextInput
            id="email"
            type="email"
            placeholder="name@email.com"
            required={true}
            icon={HiMail}
          />
        </div>
        <div className="mt-2">
          <Label htmlFor="email" value="PASSWORD" />
          <TextInput
            id="password"
            type="password"
            placeholder="************"
            required={true}
            icon={HiLockClosed}
          />
        </div>
        <div className="flex flex-row items-center mt-4">
          <div className="basis-1/2">
            <Checkbox id="remember" />
            <Label htmlFor="remember"> Ingat saya</Label>
          </div>
          <a
            href="/forget-password"
            className="text-xs lg:text-sm basis-1/2 flex justify-end font-semibold text-red-700"
          >
            Lupa password?
          </a>
        </div>
        <button className="mt-4 p-2 rounded-lg bg-sky-600 text-white w-full hover:bg-sky-500">
          Masuk
        </button>
        <p className="text-xs lg:text-sm text-center mt-4 pb-10 ">
          Belum Registrasi? Silakan klik{" "}
          <a className="font-semibold text-orange-600" href="/register/company">
            Daftar
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
