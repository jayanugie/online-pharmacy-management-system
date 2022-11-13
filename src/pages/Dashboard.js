import React from "react";

const Dashboard = () => {
  return (
    <div className="font-semibold bg-dashboard">
      <div className="flex flex-row">
        {/* navbar aside */}
        <div className="border basis-1/5 p-5 h-auto hidden lg:block m-1 shadow-md rounded-sm bg-white">
          <a href="/">
            <p className="w-12 font-bold text-lg md:text-2xl lg:text-4xl mb-40">
              OLIN
            </p>
          </a>
          <div className="space-y-4">
            <a
              className="flex bg-gray-200 text-blue-500 p-2 border-l-4 rounded-r-sm border-blue-500 font-bold"
              href="/dashboard"
            >
              <img src="/home.png" alt="home" className="w-8 h-8" />
              <p className="pt-1 pl-6 ">Homepage</p>
            </a>
            <a
              className="flex hover:bg-gray-200 hover:text-blue-500 p-2 hover:border-l-4 rounded-r-sm border-blue-500 hover:font-bold"
              href="/sales"
            >
              <img src="/sales.png" alt="sales" className="w-8 h-8" />
              <p className="pt-1 pl-6">Sales</p>
            </a>
            <a
              className="flex hover:bg-gray-200 hover:text-blue-500 p-2 hover:border-l-4 rounded-r-sm border-blue-500 hover:font-bold"
              href="/inventory"
            >
              <img src="/inventory.png" alt="inventory" className="w-8 h-8" />
              <p className="pt-1 pl-6">Inventory</p>
            </a>
            <a
              className="flex hover:bg-gray-200 hover:text-blue-500 p-2 hover:border-l-4 rounded-r-sm border-blue-500 hover:font-bold"
              href="/purchase"
            >
              <img src="/purchase.png" alt="purchase" className="w-8 h-8" />
              <p className="pt-1 pl-6">Purchase</p>
            </a>
            <a
              className="flex hover:bg-gray-200 hover:text-blue-500 p-2 hover:border-l-4 rounded-r-sm border-blue-500 hover:font-bold"
              href="/user-management"
            >
              <img src="/user.png" alt="management" className="w-8 h-8" />
              <p className="pt-1 pl-6">User Management</p>
            </a>
          </div>
        </div>

        <div className="md:basis-4/5 m-0 md:m-1 rounded-lg container mx-auto">
          {/* top navbar */}
          <div className="border shadow-md flex justify-end space-x-3 p-3 rounded-sm bg-white">
            <img
              src="/help.png"
              alt="question"
              className="lg:w-7 lg:h-7 h-5 w-5 mt-2.5"
            />
            <img
              src="/message.png"
              alt="message"
              className="lg:w-7 lg:h-7 h-5 w-5 mt-2.5"
            />
            <img
              src="/user.png"
              alt="profile"
              className="lg:w-7 lg:h-7 h-5 w-5 mt-2.5"
            />
            <div className="text-sm md:text-medium">
              <p>Roman Dimitri</p>
              <p>Owner</p>
            </div>
          </div>

          {/* wrap content */}
          <div className="md:m-5 m-3">
            {/* order statistic */}
            <p className="text-lg my-2">Order Statistic</p>
            <div className="flex md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-2 w-full">
              <div className="border shadow-md p-3 flex flex-row space-x-3 rounded-lg bg-white">
                <div className="pl-2">
                  <p className="text-xs">Total Selling</p>
                  <p className="text-lg pt-4">890</p>
                </div>
                <div className="text-center text-blue-700 p-2">
                  <p>^</p>
                  <p>20.5%</p>
                </div>
              </div>
              <div className="border shadow-md p-3 flex flex-row space-x-3 rounded-lg bg-white">
                <div className="md:px-4 pl-2">
                  <p className="text-xs">Expired Inventory</p>
                  <p className="text-lg pt-4">890</p>
                </div>
              </div>
              <div className="border shadow-md p-3 flex flex-row space-x-3 rounded-lg bg-white">
                <div className="md:px-4 pl-2">
                  <p className="text-xs">Out of stock Inventory</p>
                  <p className="text-lg pt-4">12</p>
                </div>
              </div>
            </div>

            {/* wrap sales & purchase, total transaksi, sales, purchase */}
            <div className="flex md:flex-row flex-col mt-5">
              {/* sales & purchase */}
              <div className="lg:basis-4/6 md:basis-4/6 bg-white">
                <div className="border shadow-md rounded-lg p-5">
                  <div className="relative">
                    <img
                      src="/more.png"
                      alt="threedots"
                      className="absolute right-0 top-0 h-5 w-5"
                    />
                  </div>
                  <p className="text-lg">Sales & Purchase</p>
                  <p className="p-1 text-black mt-5 text-sm md:text-base text-center">
                    <span className="text-green-300 font-bold">^</span> 23.5%
                  </p>
                  <div className="h-60flex items-end">
                    <div className="w-full">
                      <div className="flex flex-row md:mx-5 lg:space-x-6 md:space-x-3 space-x-1 items-end text-xs md:text-base ">
                        <div className="basis-1/12">
                          <div className="border rounded-md bg-blue-500 h-24"></div>
                          <p>Jan</p>
                        </div>
                        <div className="basis-1/12">
                          <div className="border rounded-md bg-blue-500 h-20"></div>
                          <p>Feb</p>
                        </div>
                        <div className="basis-1/12">
                          <div className="border rounded-md bg-blue-500 h-16"></div>
                          <p>Mar</p>
                        </div>
                        <div className="basis-1/12">
                          <div className="border rounded-md bg-blue-500 h-14"></div>
                          <p>Apr</p>
                        </div>
                        <div className="basis-1/12">
                          <div className="border rounded-md bg-blue-500 h-32"></div>
                          <p>May</p>
                        </div>
                        <div className="basis-1/12">
                          <div className="border rounded-md bg-blue-500 h-28"></div>
                          <p>Jun</p>
                        </div>
                        <div className="basis-1/12">
                          <div className="border rounded-md bg-blue-500 h-32"></div>
                          <p>Jul</p>
                        </div>
                        <div className="basis-1/12">
                          <div className="border rounded-md bg-blue-500 h-36"></div>
                          <p>Aug</p>
                        </div>
                        <div className="basis-1/12">
                          <div className="border rounded-md bg-blue-500 h-32"></div>
                          <p>Sep</p>
                        </div>
                        <div className="basis-1/12">
                          <div className="border rounded-md bg-blue-500 h-36"></div>
                          <p>Okt</p>
                        </div>
                        <div className="basis-1/12">
                          <div className="border rounded-md bg-blue-500 h-36"></div>
                          <p>Nov</p>
                        </div>
                        <div className="basis-1/12">
                          <div className="border rounded-md bg-orange-500 h-44"></div>
                          <p>Des</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-row md:space-x-5 space-x-1">
                    <div className="basis-1/4 text-center p-5">
                      <p>Target</p>
                      <p className=" text-green-500">^ 231</p>
                    </div>
                    <div className="basis-1/4 text-center p-5">
                      <p>Last week</p>
                      <p className="text-red-500">v 224</p>
                    </div>
                    <div className="basis-1/4 text-center p-5">
                      <p>Last Month</p>
                      <p className="text-green-500">^ 2132</p>
                    </div>
                    <div className="basis-1/4 text-center p-5">
                      <p>This year</p>
                      <p className="text-red-500">v 8123</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* total transaksi, salaes, purchase */}
              <div className="lg:basis-2/6 md:basis-2/6 space-y-5 mt-5 md:mt-0 flex flex-col">
                <div className="md:mx-5 basis-1/3 rounded-lg shadow-md flex justify-end p-5 bg-white">
                  <div className="flex flex-col text-end">
                    <p>Total Transaksi</p>
                    <p className="text-xl pt-5 font-bold">Rp. 80.000.000</p>
                  </div>
                </div>
                <div className="md:mx-5 basis-1/3 rounded-lg shadow-md flex justify-end p-5 bg-white">
                  <div className="flex flex-col text-end">
                    <p>Sales</p>
                    <p className="text-xl pt-5 font-bold">289</p>
                  </div>
                </div>
                <div className="md:mx-5 basis-1/3 rounded-lg shadow-md flex justify-end p-5 bg-white">
                  <div className="flex flex-col text-end">
                    <p>Purchase</p>
                    <p className="text-xl pt-5 font-bold">289</p>
                  </div>
                </div>
              </div>
            </div>
            {/* wrap inventory and persentasi */}
            <div className="md:flex">
              {/* inventory */}
              <div className="border mt-5 p-5 md:w-96 rounded-lg shadow-md bg-white">
                <p className="text-lg">Inventory</p>
                <div className="relative">
                  <img
                    src="/more.png"
                    alt="threedots"
                    className="absolute right-0 bottom-2 w-5 h-5"
                  />
                </div>
                <div className="p-2.5">
                  <div className="flex flex-row">
                    <div className="basis-4/5 space-y-2">
                      <p className="font-light">New Order</p>
                      <p className="font-light">Prepare Order</p>
                      <p className="font-light">Waiting Pickup</p>
                      <p className="font-light">Sent</p>
                      <p className="font-light">Cancel</p>
                      <p className="font-light">Done</p>
                    </div>
                    <div className="space-y-2">
                      <p className="bg-sky-300 p-1 px-2 text-xs rounded-md">
                        3
                      </p>
                      <p className="bg-sky-300 p-1 px-2 text-xs rounded-md">
                        5
                      </p>
                      <p className="bg-sky-300 p-1 px-2 text-xs rounded-md">
                        12
                      </p>
                      <p className="bg-sky-300 p-1 px-2 text-xs rounded-md">
                        9
                      </p>
                      <p className="bg-sky-300 p-1 px-2 text-xs rounded-md">
                        7
                      </p>
                      <p className="bg-sky-300 p-1 px-2 text-xs rounded-md">
                        5
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* persentase */}
              <div className="border mt-5 md:ml-5 p-5 md:w-96 rounded-lg shadow-md bg-white">
                <p>Persentase Penjualan Obat</p>
                {/* diagram */}
                <div className="flex justify-center my-5">
                  <div className="x-box w-20 h-20 rounded-full"></div>
                </div>
                {/* keterangan */}
                <div className="flex flex-row space-x-5">
                  <div className="basis-1/2 space-y-1">
                    <div className="flex space-x-2">
                      <div className="h-3 w-4 rounded-sm bg-blue-500 m-1"></div>
                      <p className="text-xs">Offline (40%)</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="h-3 w-4 rounded-sm bg-black m-1"></div>
                      <p className="text-xs">AloDoc (10%)</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="h-3 w-4 rounded-sm bg-red-600 m-1"></div>
                      <p className="text-xs">Halodoc (20%)</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="h-3 w-4 rounded-sm bg-gray-500 m-1"></div>
                      <p className="text-xs">SehatQ (10%)</p>
                    </div>
                  </div>
                  <div className="basis-1/2 space-y-1">
                    <div className="flex space-x-2">
                      <div className="h-3 w-4 rounded-sm bg-green-400 m-1"></div>
                      <p className="text-xs">GrabHealth (4%)</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="h-3 w-4 rounded-sm bg-lime-600 m-1"></div>
                      <p className="text-xs">Tokopedia (6%)</p>
                    </div>
                    <div className="flex space-x-2">
                      <div className="h-3 w-4 rounded-sm bg-orange-500 m-1"></div>
                      <p className="text-xs">Shopee (10%)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
