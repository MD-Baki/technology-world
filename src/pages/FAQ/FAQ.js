import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Loading from "../../Components/Loading";

const FAQ = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    if (loading) return <Loading />;

    return (
        <div>
            <div
                data-aos="fade-up"
                data-aos-duration="1500"
                className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto py-12 text-[#2e5c83]"
            >
                <div>
                    <h2 className="font-bold text-2xl text-center pb-5">
                        Frequently Asked Questions
                    </h2>
                    <div className="grid gap-6">
                        <div>
                            <div className=" flex items-center justify-center md:justify-start pb-4">
                                <FaAngleDoubleRight className="text-lg mr-2"></FaAngleDoubleRight>
                                <h2 className="font-bold text-lg">
                                    What benefits do you have?
                                </h2>
                            </div>
                            <p className="text-[#50606e]">
                                Our responsibility is not limited to training.
                                It is also our responsibility to facilitate your
                                career start and career journey. Moreover, our
                                various facilities make the journey of students
                                easier. We believe that this unique advantage of
                                ours makes our students unique from any other
                                competition.
                            </p>
                        </div>
                        <div>
                            <div className=" flex items-center justify-center md:justify-start pb-4">
                                <FaAngleDoubleRight className="text-lg mr-2"></FaAngleDoubleRight>
                                <h2 className="font-bold text-lg">
                                    What freelancing will be taught here?
                                </h2>
                            </div>
                            <p className="text-[#50606e]">
                                From sending buyer requests to various
                                marketplaces, you will receive client management
                                guidance at any time. Our skilled mentors are
                                always there to support you. So you will get
                                full support on how to reply to the buyer and
                                work professionally even after completing the
                                course.
                            </p>
                        </div>
                        <div>
                            <div className=" flex items-center justify-center md:justify-start pb-4">
                                <FaAngleDoubleRight className="text-lg mr-2"></FaAngleDoubleRight>
                                <h2 className="font-bold text-lg">
                                    What benefits can i got by taking the course
                                    here?
                                </h2>
                            </div>
                            <p className="text-[#50606e]">
                                The job placement department works to get the CV
                                to the right place according to the students'
                                qualifications. From here you will get various
                                seminars on grooming and career guidelines for
                                post-course work. As a result, as a student
                                here, you will get proper guidelines in CV
                                forwarding according to your job qualifications
                                from here. Your career will put you far ahead of
                                anyone else in the race.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="grid gap-6">
                        <div>
                            <h2 className="font-bold text-2xl text-center py-5">
                                These are the benefits we provide
                            </h2>
                            <div className=" flex items-center justify-center md:justify-start pb-4">
                                <FaAngleDoubleRight className="text-lg mr-2"></FaAngleDoubleRight>
                                <h2 className="font-bold text-lg">
                                    Lifetime support
                                </h2>
                            </div>
                            <p className="text-[#50606e]">
                                When a student gets admission, our relationship
                                with him becomes Lifetime, that is, we ensure
                                Lifetime Support to the trainees after the
                                course. Students can chat live with the online
                                team at any time, or come directly to the
                                institution for support.
                            </p>
                        </div>
                        <div>
                            <div className=" flex items-center justify-center md:justify-start pb-4">
                                <FaAngleDoubleRight className="text-lg mr-2"></FaAngleDoubleRight>
                                <h2 className="font-bold text-lg">
                                    24/7 online support
                                </h2>
                            </div>
                            <p className="text-[#50606e]">
                                Our organization Technology world is responsible
                                for but not limited to training. It is also our
                                responsibility to facilitate the career journey
                                of students. Basically, we provide 24/7 online
                                support considering the convenience of our
                                students and those who have started freelancing
                                or new jobs in various sectors after receiving
                                training from us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
