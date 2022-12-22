import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaMinus, FaGoogle, FaGithub } from "react-icons/fa";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import Loading from "../../../Components/Loading";

const Register = () => {
    const [accepted, setAccepted] = useState(false);
    const [loading, setLoading] = useState(true);

    const { createUser, providerLogin, updateUserProfile } =
        useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                handleProfile(name, photoURL);
            })
            .catch((error) => console.error(error));
    };

    const handleProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        };
        updateUserProfile(profile)
            .then(() => {})
            .catch((error) => console.error(error));
    };

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.error(error));
    };

    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.error(error));
    };

    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    }, []);

    if (loading) return <Loading />;

    return (
        <div>
            <div className="lg:w-5/12 mx-auto py-12">
                <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="1500"
                    className="flex-col shadow-2xl rounded-lg border-2 border-[#d6e6ee] text-[#2e5c83]"
                >
                    <div className="text-center py-4">
                        <h1 className="text-5xl font-bold">Register Now</h1>
                    </div>
                    <div className="card w-full">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input
                                    name="photoURL"
                                    type="text"
                                    placeholder="Photo URL"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Your Email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="flex items-center">
                                <input
                                    onClick={handleAccepted}
                                    name="btn"
                                    id="callMe"
                                    type="checkbox"
                                />
                                <label htmlFor="callMe" className="label">
                                    <span className="label-text">
                                        Accept{" "}
                                        <Link
                                            to="/terms"
                                            className="text-amber-500 font-bold"
                                        >
                                            Terms and condition
                                        </Link>
                                    </span>
                                </label>
                            </div>
                            <div className="form-control my-3">
                                <button
                                    className="btn btn-primary"
                                    disabled={!accepted}
                                >
                                    Register
                                </button>
                            </div>

                            <div className="sign-in">
                                <div className="flex justify-center items-center font-bold">
                                    <FaMinus />
                                    <span className="px-2">
                                        Or Sign in with
                                    </span>
                                    <FaMinus />
                                </div>
                                <div className="mt-4 grid grid-cols-2 gap-4">
                                    <Link
                                        onClick={handleGoogleSignIn}
                                        className="btn btn-block btn-outline hover:bg-[#2e5c83] border-[#2e5c83] border-2 text-[#2e5c83] capitalize"
                                    >
                                        <FaGoogle className="mr-2" />
                                        Google
                                    </Link>
                                    <Link
                                        onClick={handleGithubSignIn}
                                        className="btn btn-block btn-outline hover:bg-[#2e5c83] border-[#2e5c83] border-2 text-[#2e5c83] capitalize"
                                    >
                                        <FaGithub className="mr-2" />
                                        Github
                                    </Link>
                                </div>
                            </div>
                            <p className="text-center pt-4 text-sm">
                                Already, have an account?{" "}
                                <Link to="/login" className="font-bold">
                                    Login Now
                                </Link>{" "}
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
