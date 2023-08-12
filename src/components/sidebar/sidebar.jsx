import logo from "../../assets/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import search from "../../assets/search.svg";
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




const Sidebar = () => {
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



    return (
        <section class="py-8 px-6">
            <Link href="/">
                <Image
                    src={logo}
                    alt="alot Logo"
                    class="mb-6"
                />
            </Link>
            <div class="relative mb-6">
                <Image src={search} alt="search icon" class="absolute top-3 left-2" />
                <input class="w-full py-2 pl-8 border-[1px] border-gray-300 rounded-lg outline-none" placeholder="Search" />
            </div>
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
            </nav>
            <div class="bg-gray-50 rounded-lg py-5 px-4">
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

        </section>
    )
}

export default Sidebar