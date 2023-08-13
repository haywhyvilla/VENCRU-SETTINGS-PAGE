"use client"

import mail from "../../assets/mail.svg";
import Image from "next/image";
import visa from "../../assets/visa.svg";
import mastercard from "../../assets/Mastercard.svg";
import plus from "../../assets/plus.svg";
import { useState, useEffect } from "react";

const Payment = () => {
    const [selectedOption, setSelectedOption] = useState('');


    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    useEffect(() => {
        setSelectedOption('option2'); // Set the default checked option when component mounts
    }, []);


    const cards = [
        { id: 1, image: visa, cardNumber: 'Visa ending in 1234', date: "Expiry 06/2024", set: "Set as default", checked: true },
        { id: 2, image: mastercard, cardNumber: 'Mastercard ending in 1234', date: "Expiry 06/2024", set: "Set as default", checked: false },

    ];


    const [card, setCards] = useState(cards);


    const handleCheckboxChange = (cardId) => {
        const updatedCards = card.map((cardy) =>
            cardy.id === cardId ? { ...cardy, checked: true } : { ...cardy, checked: false }
        );
        setCards(updatedCards);
    };
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
                        <input type="radio" class="mt-1" value="option1"
                            checked={selectedOption === 'option1'}
                            onChange={handleOptionChange}
                            name="radioOptions" />
                        <label class="ml-2">
                            <h4 class="text-gray-700 text-sm font-medium">Send to my account email</h4>
                            <p class="text-gray-500 text-sm font-normal">olivia@untitledui.com</p>
                        </label>
                    </div>
                    <div class="flex items-start mb-3">
                        <input type="radio" value="option2"
                            checked={selectedOption === 'option2'}
                            onChange={handleOptionChange}
                            name="radioOptions" />
                        <label class="ml-2">
                            <h4 class="text-gray-700 text-sm font-medium">Send to an alternative email</h4>
                        </label>
                    </div>
                    <div class="relative">
                        <Image src={mail} alt="mail icon" class="absolute top-3 left-2" />
                        <input class="lg:w-[200%] py-2 pl-8 border-[1px] border-gray-300 rounded-lg outline-none placeholder:text-[#101828]" placeholder="billing@untitledui.com" />
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
                        card.map((cardy) => (
                            <div key={cardy.id} class={`p-4 mb-3 border-[1px] ${cardy.checked ? "border-[#D6BBFB] bg-[#F9F5FF]" : "#EAECF0 bg-white"} rounded-lg flex items-start justify-between`}>
                                <Image src={cardy.image} alt="card" class="mr-3" />
                                <div class="lg:mr-[30rem] mr-8"><h4 class={`${cardy.checked ? "text-[#53389E]" : "text-gray-700"} text-sm font-medium`}>{cardy.cardNumber}</h4>
                                    <p class={`${cardy.checked ? "text-[#7F56D9]" : "text-gray-500"} text-sm font-normal`}>{cardy.date}</p>
                                    <div class="mb-2 flex">
                                        <p class={`${cardy.checked ? "text-[#9E77ED]" : "text-gray-500"} text-sm font-medium mr-3`}>{cardy.set}</p>
                                        <span class="text-[#6941C6] font-medium text-sm">Edit</span>
                                    </div>
                                </div>
                                <input type="checkbox" checked={cardy.checked}
                                    onChange={() => handleCheckboxChange(cardy.id)} class="rounded-full" />
                            </div>
                        ))
                    }
                    <div class="flex cursor-pointer">
                        <Image src={plus} alt="plus" class="mr-2" />
                        <p class="text-gray-500 text-sm font-medium">Add new payment method</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Payment