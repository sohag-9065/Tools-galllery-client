import React, { useEffect, useState } from 'react';
import {   Navigate,  useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase/firebase.config';
import { Card, Hero } from 'react-daisyui';
import SocialLogin from './SocialLogin';
import Loading from '../shared/Loading';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const [pathSignUp, setPAthSignUp] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);

    let signInErrorMesseage;

    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        signInErrorMesseage = <p>Error: {error.message}</p>;
    }

    const onSubmit = data => {
        const { email, password } = data;
        signInWithEmailAndPassword(email, password);
        // console.log(data);
        reset();
    };

    if(pathSignUp){
        location.pathname= from;
        // console.log(from);
        return <Navigate to="/sign-up" state={{ from : location }} replace></Navigate>
    }


    return (

        <Hero className='min-h-[70vh]'>
            <Hero.Content className="flex-col lg:flex-row-reverse">

                <Card className="flex-shrink-0 w-full min-w-[400px] shadow-2xl bg-base-100">
                    <Card.Body>
                        <form onSubmit={handleSubmit(onSubmit)} className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered mb-1 w-full"
                                placeholder='Email'
                                {...register("email",
                                    {
                                        required: "Email Address is required",
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: "Provide a valid email"
                                        }
                                    }
                                )}
                                aria-invalid={
                                    errors.email ? "true" : "false"
                                }
                            />
                            {errors.email?.type === 'required' && <p role="alert">{errors.email?.message}</p>}
                            {errors.email?.type === 'pattern' && <p role="alert">{errors.email?.message}</p>}

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                type="password"
                                autoComplete='username'
                                className="input input-bordered mb-1"
                                placeholder='Password'
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Must be 6 charecters or longer",
                                    }
                                }
                                )}
                            />

                            {errors.password?.type === 'required' && <p role="alert">{errors.password?.message}</p>}
                            {errors.password?.type === 'minLength' && <p role="alert">{errors.password?.message}</p>}


                            {signInErrorMesseage}
                            <input type="submit" className='btn mt-6' value="Login" />
                        </form>
                        
                        {/* <Navigate to="/sign-up" state={{ from : from }} replace> Create new account</Navigate> */}
                        <p className='text-xs'>New to Warehouse? <button onClick={()=>setPAthSignUp(true)} className=' text-secondary cursor-pointer'>Create new account</button></p>
                        <SocialLogin></SocialLogin>
                        
                    </Card.Body>
                </Card>
            </Hero.Content>
        </Hero>
    );
};

export default Login;