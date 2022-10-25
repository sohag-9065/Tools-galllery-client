import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Card, Hero } from 'react-daisyui';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.config';
import SocialLogin from './SocialLogin';
import Loading from '../shared/Loading';
import useToken from '../../hooks/useToken';
import useProfileUpdate from '../../hooks/useProfileUpdate';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const { register, formState: { errors }, reset, handleSubmit } = useForm();

    const [userInfo, setUserInfo] = useState({});
 
    const navigate = useNavigate();
    const location = useLocation();

    let signInErrorMesseage;

    const [token] = useToken(user);
    // const [userInfoUpdate] =  useProfileUpdate(userInfo);


    let from = location.state?.from?.pathname || "/";

    console.log(from);

    
   

    useEffect(() => {
        console.log(token);
        if (token) {
            console.log(token);
            navigate(from, { replace: true });
        }

    }, [token, from, navigate]);


    if (loading) {
        return <Loading></Loading>
    }

    if (error) {
        signInErrorMesseage = <p>Error: {error.message}</p>;
    }

    const onSubmit = async data => {
        const { email, password, name } = data;
        console.log(data);
        setUserInfo({email: email, name: name});

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        reset();
    };



    return (
        <Hero className='min-h-[70vh]'>
            
            <Hero.Content className="flex-col lg:flex-row-reverse">

                <Card className="flex-shrink-0 w-full min-w-[400px] shadow-2xl bg-base-100">
                    <Card.Body>
                        <form onSubmit={handleSubmit(onSubmit)} className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                className="input input-bordered mb-1 w-full"
                                placeholder='Full Name'
                                {...register("name",
                                    {
                                        required: "Full Name is required",
                                    }
                                )}
                            />
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
                            <input type="submit" className='btn mt-6' value="Sign Up" />
                        </form>
                        <p className='text-xs'>Already have an account? <Link to="/login" className=' text-secondary cursor-pointer'>Please Login</Link></p>
                        <SocialLogin></SocialLogin>
                    </Card.Body>
                </Card>
            </Hero.Content>
        </Hero>
    );
};

export default SignUp;