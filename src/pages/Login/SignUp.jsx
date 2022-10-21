import React, { useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Card, Hero } from 'react-daisyui';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.config';

const SignUp = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    
    const navigate = useNavigate();

    let signInErrorMesseage;

    useEffect(() => {
        if (user) {
            navigate('/home')
        }
    }, [user, navigate]);


   

    if (error) {
        signInErrorMesseage = <p>Error: {error.message}</p>;
    }

    const onSubmit = async data => {
        const { email, password, name } = data;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        reset();
        // console.log(" update done", data);
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
                        
                    </Card.Body>
                </Card>
            </Hero.Content>
        </Hero>
    );
};

export default SignUp;