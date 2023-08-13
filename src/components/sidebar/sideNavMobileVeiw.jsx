"use client"

import mobilemenu from "../../assets/mobilemenu.svg"
import { useState } from "react";
import logo from "../../assets/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./sidebar";
import home from "../../assets/home.svg";
import dashboard from "../../assets/dashboard.svg";
import projects from "../../assets/projects.svg";
import tasks from "../../assets/tasks.svg";
import reporting from "../../assets/reporting.svg";
import users from "../../assets/users.svg";
import supports from "../../assets/supports.svg";
import settings from "../../assets/settings.svg";
import SidebarList from "./sidebarList";
import videoimage from "../../assets/video-image.svg";
import avatar from "../../assets/Avatar.svg";
import logout from "../../assets/log-out.svg";


const SideNavMobileVeiw = () => {
    const sidebarMenus = [
        {
            name: "Home",
            image: home
        }, {
            name: "Dashboard",
            image: dashboard,
            notification: "10"
        }, {
            name: "Projects",
            image: projects
        }, {
            name: "Tasks",
            image: tasks
        }, {
            name: "Reporting",
            image: reporting
        }, {
            name: "Users",
            image: users
        },
    ]

    const sidebarMenu2 = [
        {
            name: "Support",
            image: supports
        }, {
            name: "Settings",
            image: settings
        },
    ]
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div class="md:hidden sticky top-0 z-40 py-1 px-6">
            <div class="w-full h-16 bg-white py-4 px-4 flex justify-between">
                <Link href="/">
                    <Image
                        src={logo}
                        alt="alot Logo"
                    />
                </Link>
                {open ? (
                    <div class="cursor-pointer" onClick={handleClick} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none">
                            <path d="M12 4L4 12" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M4 4L12 12" stroke="#667085" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                ) : (
                    <div class="cursor-pointer" onClick={handleClick}>
                        <Image src={mobilemenu} alt="mobile-menu" />
                    </div>
                )}

            </div>

            {
                open ? (
                    <div class="w-[272px] absolute bg-white">
                        <nav>
                            <ul class="mb-3">
                                {sidebarMenus.map((item, index) => (
                                    <li key={index} class="py-2 px-3 cursor-pointer hover:bg-gray-50 rounded-md mb-2">
                                        <SidebarList {...item} />
                                    </li>
                                ))}
                            </ul>

                            <ul>
                                {sidebarMenu2.map((item, index) => (
                                    <li key={index} class="py-2 px-3 cursor-pointer hover:bg-gray-50 rounded-md mb-2">
                                        <SidebarList {...item} />
                                    </li>
                                ))}
                            </ul>
                        </nav>   <div class="bg-gray-50 rounded-lg py-5 px-4">
                            <h4 class="text-gray-900 text-sm font-medium mb-2">New features available!</h4>
                            <p class="text-gray-500 font-normal text-sm mb-3">Check out the new dashboard view. Pages now load faster. </p>
                            <Image src={videoimage} alt="videoimage" class="rounded-md mb-4" />
                            <div class="flex items-center">
                                <p class="mr-3 text-gray-500 font-normal text-sm ">Dismiss</p>
                                <Link href={"/"} class="text-sm font-medium text-[#6941C6]">What’s new?</Link>
                            </div>

                        </div>
                        <div class="my-6 h-[1px] w-full bg-gray-200"></div>
                        <div class="flex justify-between">
                            <Image src={avatar} alt="avatar" />
                            <div>
                                <h4 class="text-gray-900 text-sm font-medium">Olivia Rhye</h4>
                                <Link href="mailto:olivia@untitledui.com" class="text-gray-500 font-normal text-sm">olivia@untitledui.com</Link>
                            </div>
                            <Image src={logout} alt="log-out" />
                        </div>
                    </div>) : (null)
            }
        </div>
    )
}

export default SideNavMobileVeiw

