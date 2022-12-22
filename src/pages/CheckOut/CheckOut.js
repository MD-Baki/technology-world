import React, { useEffect, useState } from "react";
import celebrate from "../../images/celebrate.gif";
import { useLoaderData } from "react-router-dom";
import "./CheckOut.css";
import Loading from "../../Components/Loading";

const CheckOut = () => {
    const enrollData = useLoaderData();
    const { course_name, course_photo, course_fee } = enrollData;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    if (loading) return <Loading />;
    return (
        <div className="py-12 w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
            <div className="grid lg:grid-cols-2 gap-6">
                <div
                    data-aos="zoom-out"
                    data-aos-duration="1500"
                    className="bg-[#d6e6ee] p-3 rounded-lg"
                >
                    <h2 className="text-[#2e5c83] text-center text-lg font-bold pt-2 pb-4">
                        Course Name: {course_name}
                    </h2>
                    <div className="img-container">
                        <img src={course_photo} alt="" className="rounded-lg" />
                        <div className="overlay">
                            <button className="btn btn-block bg-orange-600 hover:bg-orange-600 border-0 capitalize text-md text-white">
                                Price: {course_fee} Taka Only
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    className="border-4 border-[#d6e6ee] rounded-lg overflow-hidden"
                >
                    <h2 className="bg-[#2e5c83] text-white text-center text-lg font-bold py-4">
                        Join the course
                    </h2>
                    <div className="pt-5 px-4 text-[#2e5c83]">
                        <h4 className="font-bold pb-1">Contact Information</h4>
                        <div className="py-3">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full mb-1"
                            />
                            <input
                                type="phone"
                                placeholder="Contact Number"
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>
                    <div className="pt-5 px-4 text-[#2e5c83]">
                        <h4 className="font-bold pb-1">Payment Method</h4>
                        <div className="grid grid-cols-3 gap-4 py-3">
                            <button className="btn btn-block bg-red-500 hover:bg-red-500 border-0 text-white">
                                Bkash
                            </button>
                            <button className="btn btn-block bg-orange-600 hover:bg-orange-600 border-0 text-white">
                                Nagad
                            </button>
                            <button className="btn btn-block bg-violet-900 hover:bg-violet-900 border-0 text-white">
                                Rocket
                            </button>
                        </div>
                    </div>
                    <div className="pt-5 px-4 text-[#2e5c83]">
                        <h4 className="font-bold pb-1">Pay Details</h4>
                        <div className="py-3">
                            <input
                                type="text"
                                placeholder="How did you pay"
                                className="input input-bordered w-full mb-1"
                            />
                            <input
                                type="text"
                                placeholder="Transaction ID"
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>
                    <div className="p-4">
                        <label
                            htmlFor="my-modal-4"
                            className="modal-button btn btn-block bg-[#2e5c83] hover:bg-[#2e5c83] text-white border-0 capitalize text-lg"
                        >
                            Submit
                        </label>
                    </div>
                </div>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <img src={celebrate} alt="" />
                </label>
            </label>
        </div>
    );
};

export default CheckOut;
