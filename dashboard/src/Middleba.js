
import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ShoppingBagIcon,
  InboxIcon,
  PowerIcon,
  MagnifyingGlassMinusIcon,
  BellIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  ArrowSmallDownIcon,
  ChevronDoubleDownIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/solid";

export default class Middleba extends React.Component {
  render() {
    return (
    <div className="main-content-box scroll-bar">
          <div>
            <div className="flex flex-row p-4 items-center justify-between">
              <div className="flex flex-row  items-center ">
              <img src="./avtar.jpg" alt="Logo" className="h-24" />
              <div>
                <h1 className="heading">Good Evening Team!</h1>
                <p>Lorem Ipsum has been the dummy text ever since</p>
              </div>
              </div>
              
              <div className="h-12 w-12 bg-[#e5e5e5] flex items-center justify-center rounded-full">
              < MagnifyingGlassMinusIcon className="h-5 w-5 text-[#858585]" />
             
              </div>
            </div>
            <div class="flex flex-row bg-theme rounded-lg items- flex-wrap		">
              <div className="flex flex-row p-4 items-center	">
                <img
                  src="./avtar.jpg"
                  alt="Logo"
                  className="h-14 rounded-full mr-3"
                />
                <div>
                  <h1 className="font-semibold text-white font-extralight">
                    Monthly Review
                  </h1>
                  <p className="text-white font-semibold text-lg	">
                    
                    $3.500
                    <span className="text-[#000] p-1 text-xs	 bg-[#fff] rounded-full ml-3">
                      +2.4%
                    </span>
                  </p>
                  <p className="text-white font-extralight	">
                    
                    ong established fa
                    <span className="font-semibold	">45.4%</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-row p-4 items-center	">
                <img
                  src="./avtar.jpg"
                  alt="Logo"
                  className="h-14 rounded-full mr-3"
                />
                <div>
                  <h1 className="font-semibold text-white font-extralight">
                    Monthly Review
                  </h1>
                  <p className="text-white font-semibold text-lg	">
                    
                    $6750
                    <span className="text-[#000] p-1 text-xs	 bg-[#fff] rounded-full ml-3">
                      +2.4%
                    </span>
                  </p>
                  <p className="text-white font-extralight	">
                    
                    nknown printer took
                    <span className="font-semibold	">45.4%</span>
                  </p>
                </div>
              </div>
              <div className="flex flex-row p-4 items-center	">
                <img
                  src="./avtar.jpg"
                  alt="Logo"
                  className="h-14 rounded-full mr-3"
                />
                <div>
                  <h1 className="font-semibold text-white font-extralight">
                    Monthly Review
                  </h1>
                  <p className="text-white font-semibold text-lg	">
                    
                    $10.900
                    <span className="text-[#000] p-1 text-xs	 bg-[#fff] rounded-full ml-3">
                      +2.4%
                    </span>
                  </p>
                  <p className="text-white font-extralight	">
                    
                    Hampden-Sydney College
                    <span className="font-semibold	">45.4%</span>
                  </p>
                </div>
              </div>
            </div>

            <div class="flex flex-row  drop-shadow-md m-1 rounded-md items- flex-wrap mt-12 p-5		">
              <div className="flex flex-row p-4 items-center	">
                <div>
                  <h1 className="font-semibold text-2xl ">
                    Total Sales & Cost
                  </h1>
                  <p className=" font-semibold text-lg	 text-[#9d9d9d]		">
                    
                    Last 60 Days
                  </p>
                  <h2 className="theme-heading font-bold mt-5 pt-5 flex items-center">
                    
                    $956.82K
                    <span className="text-[#2ecb49]  w-11	 p-1 text-xs	 bg-[#c6ffc3] rounded-full ml-3">
                      +2.4%
                    </span>
                  </h2>
                  <h2 className=" font-semibold  text-[#2ecb49] pt-2">
                    
                    $+8.20k
                    <span className=" text-[#9d9d9d] ml-2">
                      VS prew 60 days
                    </span>
                  </h2>
                </div>
              </div>
              <div className="flex flex-row p-4 	">
                <span className="font-semibold">Analytics
                <label className="text-[#2ecb49]  w-11	 p-1 text-xs	 bg-[#c6ffc3] rounded-full ml-3">+34%</label>
                </span>

              </div>
            </div>
            <div className="overflow-x-scroll scroll-bar">
            <div className="flex items-center justify-between mt-8">
              <h2 className="heading flex flex-row p-4 items-center">
                Transsation History
              </h2>
              <select
                name="cars"
                id="cars"
                className="mx-5 p-1 h-10  rounded-md"
              >
                <option value="volvo">Monthly</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="flex  mt-1">
              <select
                name="cars"
                id="cars"
                className="mx-5 px-2 py-2 bg-[#ebebeb] rounded-md"
              >
                <option value="volvo">Recepient</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <select
                name="cars"
                id="cars"
                className="mx-5 px-2 py-2 bg-[#ebebeb] rounded-md"
              >
                <option value="volvo">Amount</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
              <select
                name="cars"
                id="cars"
                className="mx-5 py-2 px-2 bg-[#ebebeb] rounded-md"
              >
                <option value="volvo">Status</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            </div>
            <div className="shadow-scroll-x">
              <div class="flex flex-col">
                <div class="sm:-mx-6 lg:-mx-8">
                  <div class="inline-block shadow-scroll-x py-2 w-full sm:px-6 lg:px-8">
                    <div className="shadow-scroll-x w-full">
                      <table class=" text-left text-sm w-full table-auto font-light">
                        <thead class="border-b font-medium  dark:border-neutral-500">
                          <tr>
                            <th scope="col" class="px-6 py-4 text-[#9d9d9d]">
                              Customer
                            </th>
                            <th scope="col" class="px-6 py-4 text-[#9d9d9d]">
                              Status
                            </th>
                            <th scope="col" class="px-6 py-4 text-[#9d9d9d]">
                              Date
                            </th>
                            <th scope="col" class="px-6 py-4 text-[#9d9d9d]">
                              Invoice
                            </th>
                            <th scope="col" class="px-6 py-4 text-[#9d9d9d]">
                              People
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="border-b dark:border-neutral-500">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              <div className="flex">
                                <div className="img-box-md">
                                  <img
                                    src="./avtar.jpg"
                                    alt="Logo"
                                    className=" mr-3"
                                  />
                                </div>
                                <div>
                                  <h6 className="font-semibold text-[#000]">
                                    Flyod Johntosan
                                  </h6>
                                  <span className="text-[#9d9d9d]">
                                    Jone@gmail.com
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              <div className="rounded-full flex w-fit	 px-2 justify-center items-center border-2	p-1 border-[#e5e5e5]  text-center">
                                <span className="h-2 w-2 block mx-2 rounded-full bg-[#2EBC49] text-[#2EBC49]"></span>
                                Success
                              </div>
                            </td>
                            <td class="whitespace-nowrap font-semibold px-6 py-4">
                              Nov 02.2021
                            </td>
                            <td class="whitespace-nowrap font-semibold px-6 py-4">
                              $100.00
                            </td>
                            <td class="whitespace-nowrap font-semibold px-6 py-4">
                              <div className="flex w-fit img-box-sm">
                                <img
                                  src="./avtar.jpg"
                                  alt="Logo"
                                  className=""
                                />
                                <img
                                  src="./avtar.jpg"
                                  alt="Logo"
                                  className="   "
                                />
                                <img
                                  src="./avtar.jpg"
                                  alt="Logo"
                                  className=" "
                                />
                              </div>
                            </td>
                          </tr>
                          <tr class="border-b dark:border-neutral-500">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              <div className="flex">
                                <div className="img-box-md">
                                  <img
                                    src="./avtar.jpg"
                                    alt="Logo"
                                    className=" mr-3"
                                  />
                                </div>
                                <div>
                                  <h6 className="font-semibold text-[#000]">
                                    Flyod Johntosan
                                  </h6>
                                  <span className="text-[#9d9d9d]">
                                    Jone@gmail.com
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td class="whitespace-nowrap px-6 py-4">
                              <div className="rounded-full flex w-fit	 px-2 justify-center items-center border-2	p-1 border-[#e5e5e5]  text-center">
                                <span className="h-2 w-2 block mx-2 rounded-full bg-[#d9b01c] text-[#d9b01c]"></span>
                                Success
                              </div>
                            </td>
                            <td class="whitespace-nowrap font-semibold px-6 py-4">
                              Nov 02.2021
                            </td>
                            <td class="whitespace-nowrap font-semibold px-6 py-4">
                              $100.00
                            </td>
                            <td class="whitespace-nowrap font-semibold px-6 py-4">
                              <div className="flex w-fit img-box-sm">
                                <img
                                  src="./avtar.jpg"
                                  alt="Logo"
                                  className=""
                                />
                                <img
                                  src="./avtar.jpg"
                                  alt="Logo"
                                  className=""
                                />
                                <img
                                  src="./avtar.jpg"
                                  alt="Logo"
                                  className=""
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
   );
}
}
