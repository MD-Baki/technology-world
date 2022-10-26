import React from 'react';
import { Link } from 'react-router-dom';
import { FaMinus, FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <div>
            <div className="lg:w-5/12 mx-auto py-12">
                <div className="flex-col shadow-2xl rounded-lg border-2 border-[#d6e6ee] text-[#2e5c83]">
                    <div className="text-center py-4">
                        <h1 className="text-5xl font-bold">Login Now</h1>
                    </div>
                    <div className="card w-full">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="Password" className="input input-bordered" required />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control my-3">
                                <button className="btn py-3 bg-[#2e5c83] hover:bg-[#2e5c83] border-0">Login</button>
                            </div>
                            <div className="sign-in">
                                <div className='flex justify-center items-center font-bold'>
                                    <FaMinus />
                                    <span className='px-2'>Or Sign in with</span>
                                    <FaMinus />
                                </div>
                                <div className='mt-4 grid grid-cols-2 gap-4'>
                                    <Link className='btn btn-block btn-outline hover:bg-[#2e5c83] border-[#2e5c83] border-2 text-[#2e5c83] capitalize'>
                                        <FaGoogle className='mr-2' />Google
                                    </Link>
                                    <Link className='btn btn-block btn-outline hover:bg-[#2e5c83] border-[#2e5c83] border-2 text-[#2e5c83] capitalize'>
                                        <FaGithub className='mr-2' />Github
                                    </Link>
                                </div>
                            </div>
                            <p className='text-center pt-4 text-sm'>Don't have an account? <Link to='/register' className='font-bold'>Register Now</Link> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;