import mail from "../../assets/mail.svg";
import Image from "next/image";
import visa from "../../assets/visa.svg";
import mastercard from "../../assets/Mastercard.svg";
import plus from "../../assets/plus.svg";

const Payment = () => {


    const cards = [
        { id: 1, image: visa, cardNumber: 'Visa ending in 1234', date: "Expiry 06/2024", set: "Set as default" },
        { id: 2, image: mastercard, cardNumber: 'Mastercard ending in 1234', date: "Expiry 06/2024", set: "Set as default" },

    ];
    return (
        <section>
            <h2 class="text-gray-900 text-lg font-medium">Payment method</h2>
            <p class="text-gray-500 font-normal text-sm">Update your billing details and address.</p>
            <div class="my-6 h-[1px] w-full bg-gray-200"></div>
            <div class="md:flex block">
                <div class="mr-8 md:mb-0 mb-5">
                    <h4 class="text-gray-700 text-sm font-medium">Contact email</h4>
                    <p class="text-gray-500 text-sm font-normal">Where should invoices be sent?</p>
                </div>
                <div>
                    <div class="flex items-start mb-4">
                        <input type="radio" class="mt-1" />
                        <label class="ml-2">
                            <h4 class="text-gray-700 text-sm font-medium">Send to my account email</h4>
                            <p class="text-gray-500 text-sm font-normal">olivia@untitledui.com</p>
                        </label>
                    </div>
                    <div class="flex items-start mb-3">
                        <input type="radio" />
                        <label class="ml-2">
                            <h4 class="text-gray-700 text-sm font-medium">Send to an alternative email</h4>
                        </label>
                    </div>
                    <div class="relative">
                        <Image src={mail} alt="mail icon" class="absolute top-3 left-2" />
                        <input class="lg:w-[200%] py-2 pl-8 border-[1px] border-gray-300 rounded-lg outline-none" placeholder="billing@untitledui.com" />
                    </div>
                </div>

            </div>
            <div class="my-6 h-[1px] w-full bg-gray-200"></div>
            <div class="md:flex block">
                <div class="mr-8 md:mb-0 mb-5">
                    <h4 class="text-gray-700 text-sm font-medium">Card details</h4>
                    <p class="text-gray-500 text-sm font-normal">Select default payment method.</p>
                </div>
                <div class="md:mb-4 mb-8">
                    {
                        cards.map((card) => (
                            <div class="p-4 mb-3 border-[1px] border-[#D6BBFB] rounded-lg flex items-start justify-between">
                                <Image src={card.image} alt="card" class="mr-3" />
                                <div class="lg:mr-[30rem] mr-8"><h4 class="text-gray-700 text-sm font-medium">{card.cardNumber}</h4>
                                    <p class="text-gray-500 text-sm font-normal">{card.date}</p>
                                    <div class="mb-2 flex">
                                        <p class="text-gray-500 text-sm font-medium mr-3">{card.set}</p>
                                        <span class="text-[#6941C6] font-medium text-sm">Edit</span>
                                    </div>
                                </div>
                                <input type="checkbox" />
                            </div>
                        ))
                    }
                    <div class="flex">
                        <Image src={plus} alt="plus" class="mr-2" />
                        <p class="text-gray-500 text-sm font-medium">Add new payment method</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Payment