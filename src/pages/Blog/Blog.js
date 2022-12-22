import React, { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Loading from "../../Components/Loading";

const Blog = () => {
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
                className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto py-12"
            >
                <h2 className="uppercase text-center font-bold text-[#2e5c83] text-2xl mb-4">
                    Blog
                </h2>
                <div className="grid gap-8">
                    <div className="bg-[#d6e6ee] shadow-xl rounded-lg overflow-hidden">
                        <div className="flex items-center bg-[#2e5c83] text-white py-2 pl-3">
                            <FaAngleDoubleRight className="mr-2" />
                            <h4 className="font-bold">what is cors?</h4>
                        </div>
                        <p className="px-3 py-2 text-[#475b6d]">
                            CORS stands for Cross-Origin Resource Sharing. It
                            allows us to relax the security applied to an API.
                            This is done by bypassing the
                            Access-Control-Allow-Origin headers, which specify
                            which origins can access the API.
                        </p>
                    </div>
                    <div className="bg-[#d6e6ee] shadow-xl rounded-lg overflow-hidden">
                        <div className="flex items-center bg-[#2e5c83] text-white py-2 pl-3">
                            <FaAngleDoubleRight className="mr-2" />
                            <h4 className="font-bold">
                                Why are you using firebase? What other options
                                do you have to implement authentication?
                            </h4>
                        </div>
                        <p className="px-3 py-2 text-[#475b6d]">
                            Indeed, Firebase is a less technical and time-saving
                            alternative to writing full-fledged backend code for
                            dynamic apps. You might also want to consider
                            leveraging this tool if you eventually wish to host
                            and manage your app in the cloud. Being serverless,
                            Firebase removes the need to worry about the
                            technicalities of cloud server configuration.
                            <br />
                            Back4app is an open-source, relational, low-code
                            backend platform. It provides a fully managed
                            backend featuring automated provisioning and scaling
                            of applications, backup and recovery, 24/7
                            monitoring and alerting, web-based management tools,
                            technical support, and much more.
                        </p>
                    </div>
                    <div className="bg-[#d6e6ee] shadow-xl rounded-lg overflow-hidden">
                        <div className="flex items-center bg-[#2e5c83] text-white py-2 pl-3">
                            <FaAngleDoubleRight className="mr-2" />
                            <h4 className="font-bold">
                                How does the private route work?
                            </h4>
                        </div>
                        <p className="px-3 py-2 text-[#475b6d]">
                            The private route component is similar to the public
                            route, the only change is that redirect URL and
                            authenticate condition. If the user is not
                            authenticated he will be redirected to the login
                            page and the user can only access the authenticated
                            routes If he is authenticated (Logged in).
                        </p>
                    </div>
                    <div className="bg-[#d6e6ee] shadow-xl rounded-lg overflow-hidden">
                        <div className="flex items-center bg-[#2e5c83] text-white py-2 pl-3">
                            <FaAngleDoubleRight className="mr-2" />
                            <h4 className="font-bold">
                                What is Node? How does Node work?
                            </h4>
                        </div>
                        <p className="px-3 py-2 text-[#475b6d]">
                            Node.js is an open-source backend javascript runtime
                            environment. It is a used as backend service where
                            javascript works on the server-side of the
                            application. This way javascript is used on both
                            frontend and backend. Node.js runs on chrome v8
                            engine which converts javascript code into machine
                            code, it is highly scalable, lightweight, fast, and
                            data-intensive.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
