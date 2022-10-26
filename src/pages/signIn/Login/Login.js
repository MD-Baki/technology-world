import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaMinus, FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';


const Login = () => {

    const { providerLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <div className="lg:w-5/12 mx-auto py-12">
                <div className="flex-col shadow-2xl rounded-lg border-2 border-[#d6e6ee] text-[#2e5c83]">
                    <div className="text-center py-4">
                        <h1 className="text-5xl font-bold">Login Now</h1>
                    </div>
                    <div className="card w-full">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="Password" className="input input-bordered" required />
                            </div>
                            <div className="form-control my-3">
                                <button className="btn hover:bg-[#2e5c83] bg-[#2e5c83] border-0">Login</button>

                                <p className='font-bold text-sm text-center text-red-500 pt-3'>{error}</p>
                            </div>

                            <div className="sign-in">
                                <div className='flex justify-center items-center font-bold'>
                                    <FaMinus />
                                    <span className='px-2'>Or Sign in with</span>
                                    <FaMinus />
                                </div>
                                <div className='mt-4 grid grid-cols-2 gap-4'>
                                    <Link onClick={handleGoogleSignIn} className='btn btn-block btn-outline hover:bg-[#2e5c83] border-[#2e5c83] border-2 text-[#2e5c83] capitalize'>
                                        <FaGoogle className='mr-2' />Google
                                    </Link>
                                    <Link className='btn btn-block btn-outline hover:bg-[#2e5c83] border-[#2e5c83] border-2 text-[#2e5c83] capitalize'>
                                        <FaGithub className='mr-2' />Github
                                    </Link>
                                </div>
                            </div>
                            <p className='text-center pt-4 text-sm'>Already, have an account? <Link to='/register' className='font-bold'>Register Now</Link> </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;