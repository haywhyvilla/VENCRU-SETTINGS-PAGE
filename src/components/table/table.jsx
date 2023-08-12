import Image from "next/image"
import download from "../../assets/download.svg"
import one from "../../assets/one.svg"
import two from "../../assets/two.svg"
import three from "../../assets/three.svg"
import four from "../../assets/four.svg"
import five from "../../assets/five.svg"
import six from "../../assets/six.svg"
import seven from "../../assets/seven.svg"
import arrow from "../../assets/arrow-down.svg"
import cell from "../../assets/Tablecell.svg"
import check from "../../assets/check-green.svg"


const Table = () => {

    const tableData = [
        {
            id: 0,
            Invoice: "Basic Plan – Dec 2022",
            Amount: "USD $10.00",
            date: "Dec 1, 2022",
            Images: [one, two, three, four, five, six]
        },
        {
            id: 1,
            Invoice: "Basic Plan – Nov 2022",
            Amount: "USD $10.00",
            date: "Nov 1, 2022",
            Images: [one, two, three, four, five, seven]
        },
        {
            id: 2,
            Invoice: "Basic Plan – Oct 2022",
            Amount: "USD $10.00",
            date: "Oct 1, 2022",
            Images: [one, two, three, four, five]
        },
        {
            id: 3,
            Invoice: "Basic Plan – Sep 2022",
            Amount: "USD $10.00",
            date: "Sep 1, 2022",
            Images: [one, two, three]
        },
        {
            id: 4,
            Invoice: "Basic Plan – Aug 2022",
            Amount: "USD $10.00",
            date: "Aug 1, 2022",
            Images: [one, two, three, four]
        },
        {
            id: 5,
            Invoice: "Basic Plan – Jul 2022",
            Amount: "USD $10.00",
            date: "Jul 1, 2022",
            Images: [one, two, three, four]
        },
        {
            id: 6,
            Invoice: "Basic Plan – Jun 2022",
            Amount: "USD $10.00",
            date: "Jun 1, 2022",
            Images: [one, two, three, four]
        }
    ]
    return (
        <section>
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-gray-900 text-lg font-medium">Billing history</h2>
                <button class="flex rounded-lg py-2 px-4 bg-white border-[1px] border-gray-300">
                    <Image src={download} alt="download" class="mr-2" />
                    <p class="text-gray-700 text-sm font-medium">Download all</p>
                </button>
            </div>
            <table class="border-[1px] border-gray-200 rounded-xl w-full bg-white">
                <thead class="p-6 bg-gray-50 border-y-[1px] border-gray-200">
                    <tr>
                        <th class="flex justify-start items-center text-gray-500 text-xs font-medium mt-3">
                            <input type="checkbox" class="ml-6" />
                            <p class="ml-3">Invoice</p>
                            <Image src={arrow} class="ml-3" />
                        </th>
                        <th class="text-gray-500 text-xs font-medium">Amount</th>
                        <th class="text-gray-500 text-xs font-medium">Date</th>
                        <th class="text-gray-500 text-xs font-medium">Status</th>
                        <th class="text-gray-500 text-xs font-medium">Users on plan</th>
                        <th>
                            <Image src={cell} alt="tablecell" />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item) => (
                            <tr key={item.id} class="border-y-[1px] border-gray-200">
                                <td class="py-4 px-6 text-gray-900 flex"><input type="checkbox" class="mr-3" /><p class="text-gray-900 font-medium text-sm">{item.Invoice}</p></td>
                                <td class="py-4 px-6 text-gray-500 font-normal text-sm">{item.Amount}</td>
                                <td class="py-4 px-6 text-gray-500 font-normal text-sm">{item.date}</td>
                                <td class="py-4 px-6 text-gray-900">
                                    <button class="py-[2px] px-2 bg-[#ECFDF3] rounded-2xl flex">
                                        <Image src={check} alt="check" />
                                        <span class="text-[#027A48] font-medium text-xs ml-1">Paid</span>
                                    </button>
                                </td>
                                <td class="flex py-4 px-6">{item.Images.map((image) => (

                                    <Image src={image} class="-ml-[10px]" />

                                ))}</td>
                                <td>
                                    <Image src={download} alt="download" />
                                </td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </section>
    )
}

export default Table