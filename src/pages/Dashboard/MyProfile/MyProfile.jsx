import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { FaUserAlt } from 'react-icons/fa';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase/firebase.config';
import Loading from '../../shared/Loading';

const MyProfile = () => {
    const [user, loading] = useAuthState(auth);
    const { register, reset, handleSubmit } = useForm();
    const [loadingImg, setLodingImg] = useState(false);

    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://vercel-deploy-tools-server-dmeivwp9y-sohag-9065.vercel.app/user/${user.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }
    ).then(res => res.json()),);

    const imagestorageKey = '3582de6481b734f98ff58713b1465520';

    if (loading || loadingImg || isLoading) {
        return <Loading></Loading>
    }

    // console.log(user);

    // console.log(users[0]);
    const { name, email, address, city, state, zip, username, website, img, bio } = users[0];



    const onSubmit = data => {

        let inputData = {};
        for(let info in data){
            if(data[info] && info !== "image"){
                inputData = {...inputData, [info]:data[info]}
            } 
        }
        const image = data.image[0];
        let img = "";
        if (image) {
            const formData = new FormData();
            formData.append('image', image);
            const url = `https://api.imgbb.com/1/upload?key=${imagestorageKey}`;
            setLodingImg(true)
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(result => {
                    if (result.success) {
                        img = result.data.url
                        inputData = { ...inputData, img }
                        handleUserInfoUpdate(inputData)
                    }
                    console.log('imgbb: ', result);
                })
        }
        else {
            handleUserInfoUpdate(inputData)
        }

        // console.log(handleUserInfoUpdate(userInfo));

    };

    const handleUserInfoUpdate = userInfo => {
        fetch(`https://vercel-deploy-tools-server-dmeivwp9y-sohag-9065.vercel.app/user/profile/${email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(inserted => {
                setLodingImg(false)
                if (inserted?.acknowledged || inserted?.success) {
                    toast.success("Tool added successfully");
                    refetch();
                    reset();
                }
                else {
                    toast.error("Failed to add the tool");
                }
               
                // console.log('User: ', inserted);
            })
    }

    return (
        <section className="p-6  ">

            <form onSubmit={handleSubmit(onSubmit)} className="form-control">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm  ">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <div className='flex  items-center gap-6 mb-6'>
                            {
                                img ?
                                    <img src={img} alt="" className='rounded-full h-20 w-20' />
                                    :
                                    <FaUserAlt className='w-16 h-16 text-center' />
                            }
                            <div className='text-start'>
                                <p>{name}</p>
                            </div>
                        </div>
                        {email && <p className="text-xs">Email: {email}</p>}
                        {address && <p className="text-xs">Address: {address}</p>}
                        {city && <p className="text-xs">City: {city}</p>}
                        {state && <p className="text-xs">State: {state}</p>}
                        {zip && <p className="text-xs">Zip: {zip}</p>}
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm">Full Name</label>
                            {
                                name ?
                                    <input name="firstname" type="text" value={name} className="w-full border-2 p-2 rounded-md " disabled />
                                    :
                                    <input name="firstname" type="text" className="w-full border-2 p-2 rounded-md " disabled />
                            }
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Email</label>
                            <input name="email" type="text" value={email} className="w-full border-2 p-2 rounded-md " disabled />
                        </div>


                        <div className="col-span-full">

                            <label htmlFor="address" className="text-sm">Address</label>
                            <input
                                type="text"
                                className="w-full border-2 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                                placeholder='address'
                                {...register("address")}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="city" className="text-sm">City</label>
                            <input
                                type="text"
                                className="w-full border-2 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                                placeholder='city'
                                {...register("city")}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm">State / Province</label>
                            <input
                                type="text"
                                className="w-full border-2 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                                placeholder='state'
                                {...register("state")}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="zip" className="text-sm">ZIP / Postal</label>
                            <input
                                type="text"
                                className="w-full border-2 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                                placeholder='zip'
                                {...register("zip")}
                            />
                        </div>
                    </div>
                </fieldset>
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm ">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Profile</p>
                        {username && <p className="text-xs">User_Name: {username}</p>}
                        {website && <p className="text-xs">Website: {website}</p>}
                        {bio && <p className="text-xs">Bio: {bio}</p>}
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="username" className="text-sm">Username</label>
                            <input
                                type="text"
                                className="w-full border-2 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                                placeholder='username'
                                {...register("username")}
                            />

                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="website" className="text-sm">Website</label>
                            <input
                                type="text"
                                className="w-full border-2 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400"
                                placeholder='https://'
                                {...register("website")}
                            />

                        </div>
                        <div className="col-span-full">
                            <label htmlFor="bio" className="text-sm">Bio</label>
                            <textarea
                                name="bio"
                                placeholder=""
                                className="w-full border-2 p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400  "
                                {...register("bio")}
                            ></textarea>
                        </div>
                        <div className="col-span-full">
                            <label className="label">
                                <span className="label-text"> Photo</span>
                            </label>
                            <input
                                type="file"
                                className="input input-bordered mb-1  py-2"
                                {...register("image")}
                            />
                        </div>
                    </div>
                </fieldset>
                <div className='text-center mb-40'>
                    <input type="submit" value="Update Profile" className='btn ' />
                </div>
            </form>





        </section>
    );
};

export default MyProfile;