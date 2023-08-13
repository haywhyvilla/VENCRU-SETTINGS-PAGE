

const Header = () => {
    const menu = [
        { name: "Details" },
        { name: "Profile" },
        { name: "Password" },
        { name: "Team" },
        { name: "Plan" },
        { name: "Billing" },
        { name: "Notifications" },
        { name: "Integrations" },
        { name: "API" },
    ]
    return (
        <section class="mb-8">
            <h1 class="text-gray-900 text-3xl font-medium mb-2">Settings</h1>
            <p class="text-gray-500 text-base font-normal mb-6">Manage your team and preferences here.</p>
            <div>
                <ul class="flex md:overflow-x-hidden overflow-x-scroll">
                    {
                        menu.map((item, index) => (
                            <li key={index} class="bg-white hover:bg-gray-50">
                                <button class={`px-4 py-[10px] border-y-[1px] border-gray-300 text-gray-700 text-sm font-medium ${index === 0 || menu.length - 1 ? "border-l-[1px]" : "border-l-0"} ${index === 0 ? "rounded-l-lg" : "rounded-none"} ${index === menu.length - 1 ? "rounded-r-lg border-r-[1px]" : "rounded-none"}`}>{item.name}</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    )
}


export default Header