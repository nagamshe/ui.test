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

export default class Rightbar extends React.Component {
  render() {
    return (
<div className="p-4 right-bar-box">
<div  className="flex  p-4 items-center justify-between">
<BellIcon className="h-5 w-5 text-[#858585]" />
<select name="cars" id="cars"  className="mx-5 p-1 h-10  drop-shadow	 font-semibold rounded-md">
      <option value="volvo">Jountosan</option>
      <option value="saab">Saab</option>
      <option value="opel">Opel</option>
      <option value="audi">Audi</option>
    </select>
</div>
<span className="text-[#886df9]">Premium Access</span>
<h3 className="heading">
  Take Back Your Creative Control
</h3>
<span className="text-[#9d9d9d] flex items-center flex-warp mt-2">The Profesional Platform
<ChevronDownIcon className="h-4 w-4 ml-3 text-[#9d9d9d]"/>
</span>
<div className="border w-49per rounded-lg text-[#886df9] p-3  mt-5 flex justify-between">
  Upgrade Now
  <ArrowRightIcon className="h-5 w-5 text-[#886df9]"/>
</div>
<div className="flex-md-right-box flex-wrap items-center justify-between ">
<div className="flex justify-between w-49per mt-5 pt-5">
  <h2 className="font-semibold text-2xl">October 2023</h2>
  <div className="flex items-center">
  <ChevronLeftIcon className="h-8 w-8 border p-1 text-[#9d9d9d]"/>
  <ChevronRightIcon className="h-8 w-8 border p-1 text-[#886df9]"/>

  </div>
</div>
<div className="flex flex-wrap  w-49per mt-4 mb-5 items-center justify-between">
  <div className="p-1">
    <span className=" text-[#9d9d9d] block">
      Mon
    </span>
    <span  className=" font-semibold mt-4 block">
      11
    </span>
  </div>
  <div className="p-1">
    <span className=" text-[#9d9d9d]  block">
     Tus
    </span>
    <span  className=" font-semibold mt-4 block">
      12
    </span>
  </div>
  <div className="p-1">
    <span className=" text-[#9d9d9d]  block">
      Wed
    </span>
    <span  className=" font-semibold mt-4 block bg-[#886df9] text-[#fff] rounded-full flex justify-center items-center p-1">
     13
    </span>
  </div>
  <div className="p-1">
    <span className=" text-[#9d9d9d]  block">
      Thu
    </span>
    <span  className=" font-semibold mt-4 block">
      14
    </span>
  </div>
  <div className="p-1">
    <span className=" text-[#9d9d9d]  block">
      Fri
    </span>
    <span  className=" font-semibold mt-4 block">
      15
    </span>
  </div>
  <div className="p-1">
    <span className=" text-[#9d9d9d]  block">
      Sat
    </span>
    <span  className=" font-semibold mt-4 block">
      16
    </span>
  </div><div className="p-1">
    <span className=" text-[#9d9d9d]  block">
      Sun
    </span>
    <span  className=" font-semibold mt-4 block">
      17
                    </span>
  </div>
 
</div>
</div>
<div className="flex-md flex-wrap ">
<div className="flex  border-b-2 py-8  items-center w-100">
  <div className="">
    <div className="img-box-md">
    <img src="./avtar.jpg" alt="Logo" className="" />
    </div>
 
  </div>
  <div className="">
    <span className="font-semibold ml-3 text-lg">
      Meeting With Client
    </span>
    <div className="flex flex-wrap justify-between w-100">
      <div className="flex   items-center text-[#9d9d9d]">
        <VideoCameraIcon className="h-25px  p-1"/>
        Google Meet</div>
      <div className="text-[#9d9d9d]">12 Pm</div>
    </div>
  </div>
</div>
<div className="flex  border-b-2 py-8  items-center w-100">
  <div className="">
  <div className="img-box-md">
    <img src="./avtar.jpg" alt="Logo" className="" />
    </div>
  </div>
  <div className="">
    <span className="font-semibold ml-3 text-lg">
      Weekly Report
    </span>
    <div className="flex flex-wrap justify-between w-100">
      <div className="flex  items-center text-[#9d9d9d]">
        <VideoCameraIcon className="h-25px p-1"/>
        Google Meet</div>
      <div className="text-[#9d9d9d]">03 Pm</div>
    </div>
  </div>
</div>
<div className="flex   py-8  items-center w-100">
  <div className="">
  <div className="img-box-md">
    <img src="./avtar.jpg" alt="Logo" className="" />
    </div>
  </div>
  <div className="">
    <span className="font-semibold ml-3 text-lg">
      Daily Scrum Meeting
    </span>
    <div className="flex flex-wrap justify-between w-100">
      <div className="flex  items-center text-[#9d9d9d]">
        <VideoCameraIcon className="h-25px  p-1"/>
        Google Meet</div>
      <div className="text-[#9d9d9d]">05 Pm</div>
    </div>
  </div>
</div>
</div>
</div>
);
}
}