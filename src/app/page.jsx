import Sidebar from "../components/sidebar/sidebar"
import Header from "../components/header/header"
import Payment from "../components/payment/payment"
import Table from "../components/table/table"

const Setting = () => {
    return (

        <div class="h-screen w-screen block md:grid grid-cols-4 lg:grid-cols-5 overflow-x-hidden">
            <div class="hidden md:block h-[100vh] col-span-1 bg-white">
                <Sidebar />
            </div>
            <main class="overflow-y-scroll bg-gray-50 col-span-3 lg:col-span-4 px-8 py-8">
                <Header />
                <Payment />
                <Table />
            </main>

        </div>
    )
}

export default Setting