import React, { useState } from 'react'
import { postData } from '../../services'
import { endPoints } from '../../services/api'

const Post = () => {
    const [inputvalue, setinputvalue] = useState({
        companyName: "",
        contactName: "",
        address: { city: "", region: "" }
    })
    return (
        <div>
            <>
                {/* component */}
                <div className="flex items-center justify-center p-12">
                    {/* Author: FormBold Team */}
                    {/* Learn More: https://formbold.com */}
                    <div className="mx-auto w-full max-w-[550px]">
                        <form action="https://formbold.com/s/FORM_ID" method="POST" onSubmit={(e) => {
                            e.preventDefault()
                            postData(endPoints.suppliers, inputvalue)
                        }}>
                            <div className="mb-5">
                                <label

                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Company name
                                </label>
                                <input
                                    value={inputvalue.companyName}
                                    onChange={(e) => {
                                        setinputvalue({ ...inputvalue, companyName: e.target.value })
                                    }}
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="subject"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Contact name
                                </label>
                                <input
                                    value={inputvalue.contactName}
                                    onChange={(e) => {
                                        setinputvalue({ ...inputvalue, contactName: e.target.value })
                                    }}

                                    type="text"
                                    name="subject"
                                    id="subject"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="name"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    City
                                </label>
                                <input
                                    value={inputvalue.address.city}
                                    onChange={(e) => {
                                        setinputvalue({ ...inputvalue, address: { city: e.target.value } })
                                    }}
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="name"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Region
                                </label>
                                <input
                                    value={inputvalue.address.region}
                                    onChange={(e) => {
                                        setinputvalue({ ...inputvalue, address: { region: e.target.value } })
                                    }}
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>

                            <div>
                                <button onClick={() => {
                                }} type='submit' className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none">
                                Post
                            </button>
                    </div>
                </form>
            </div>
        </div>
            </>

        </div >
    )
}

export default Post;