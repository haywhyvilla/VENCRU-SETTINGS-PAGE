import Image from "next/image"

const SidebarList = ({ name, image, notification }) => {
    return (
        <div class="flex items-center justify-between">
            <div class="flex items-center justify-between">
                <Image src={image} alt="icon" />
                <h4 class="ml-3 text-gray-700 font-medium text-base">{name}</h4>
            </div>
            {notification ? (<h5 class="px-3 py-1 bg-gray-100 rounded-2xl text-gray-700">{notification}</h5>) : (null)
            }
        </div>
    )
}

export default SidebarList