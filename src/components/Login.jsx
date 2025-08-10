import React, { useState} from "react";

import {
    RiPlayCircleLine,
    RiArrowRightLine,
    RiArrowLeftLine,
    RiBookOpenLine,
    RiUser3Line,
    RiMessage2Line,
    RiCheckLine,
    RiArrowDownSLine,
    RiTvFill,
    RiDownload2Fill,
    RiInfinityLine,
    RiMedal2Fill,
    RiVideoFill,
    RiBook3Fill,
    RiCustomerService2Fill,
    RiHeartLine
} from "react-icons/ri";

const Login = () => {
    return(
    <div className='h-[100vh]' style={{ fontFamily: "jost, sans-serif" }}>
        <div className="flex items-center justify-center bg-purple-200 w-full h-screen p-5 md:p-10">
            <img src="" className="w-[750px] hidden xl:block" alt="auth-img" />
            <form action="" className="flex flex-col items-center justify-center gap-5 max-w-[500px] w-full bg-white rounded-[15px] md:rounded-lg py-10 px-10 shadow-lg">
                <header className="flex flex-col gap-5 w-full">
                    <div className="flex sm:flex-row flex-col items-center gap-3 w-full">
                        <button type="button" className="flex items-center justify-center gap-2 bg-purple-500 hover:bg-gradient-to-r from-purple-600 to-purple-500 text-white transition duration ease-in-out w-full p-3 rounded-[10px] text-sm outline-none cursor-pointer">
                            Sign in with Google
                        </button>
                        <button type="button" className="flex items-center justify-center gap-2 bg-purple-500 hover:bg-gradient-to-r from-purple-600 to-purple-500 text-white transition duration ease-in-out w-full p-3 rounded-[10px] text-sm outline-none cursor-pointer">
                            Sign in with Facebook
                        </button>
                    </div>
                    <div className="flex items-center justify-center py-4 w-full relative mt-1">
                        <p className="w-full border-t border-gray-400"></p>
                        <p className="text-sm px-2 absolue bg-white whitespace-nowrap"></p>
                        <p className="w-full border-t border-gray-400"></p>
                    </div>
                </header>
                <input type="text" className="bg-transparent w-full px-4 py-2.5 rounded-lg text-sm border border-gray-400 outline-none focus:ring-2 focus:ring-purple-500" placeholder="Username or Email" required value name="email" />
                <input type="password" className="bg-transparent w-full px-4 py-2.5 rounded-lg text-sm border border-gray-400 outline-none focus:ring-2 focus:ring-purple-500" placeholder="password" required name="password" />
                <div className="flex items-center justify-between w-full text-sm">
                    <label className="flex items-center gap-1 cursor-pointer">
                        <input type="checkbox" name="rememberMe" />
                        <span>Remember me</span>
                    </label>
                    <Link to="#" classNamefont-semibold text-purple-500 hover:underline></Link>
                </div>
                <button type="submit" className="p-3 rounded-lg text-white bg-purple-500 hover:bg-gradient-to-r from-purple-600 to-purple-500 transition duration ease-in-out w-full outline-none cursor-pointer">
                    Sign In
                </button>
                <p className="text-sm">
                    <Link className="font-semibold text-purple-500 hover:underline">Create an Account</Link>
                </p>
            </form>
        </div>
    </div>
    )
}

export default Login;