import React, { useState } from 'react';
import { Textarea } from 'react-daisyui';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.config';
import Loading from '../shared/Loading';

const AddAProduct = () => {
    const [user , loading] = useAuthState(auth);   

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [loadingImg, setLodingImg] = useState(false);

    const imagestorageKey = '3582de6481b734f98ff58713b1465520';

    if (loading || loadingImg) {
        return <Loading></Loading>
    }


    const onSubmit = async data => {
        const image = data.image[0];
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
                    const img = result.data.url
                    const tool = {
                        supplier_name: user.name,
                        email: user.email,
                        tool_name: data.tool_name,
                        description: data.description,
                        price: data.price,
                        available_quantity: data.available_quantity,
                        minimum_quantity: data.minimum_quantity,
                        img: img
                    }
                    // sent to database of new tool information 
                    fetch('http://localhost:5000/tools', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(tool)
                    })
                        .then(res => res.json())
                        .then(inserted => {
                            setLodingImg(false)
                            if (inserted.insertedId) {
                                toast.success("Tool added successfully");
                                reset();
                            }
                            else {
                                toast.error("Failed to add the tool");
                            }
                            console.log('Tool', inserted);
                        })
                }
                console.log('imgbb: ', result);
            })
        console.log("Data:", data);
    };
    return (
        <div className='mb-12 lg:mb-20 mx-8'>
            <h1 className='text-xl lg:text-2xl text-center mb-4'>Add New Tool</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form-control max-w-lg mx-auto shadow-2xl p-3 lg:p-6">
                <label className="label">
                    <span className="label-text">Tool Name</span>
                </label>
                <input
                    type="text"
                    className="input input-bordered  "
                    placeholder='Tool Name'
                    {...register("tool_name",
                        {
                            required: "Product Name is required",
                        }
                    )}
                />
                {errors.tool_name?.type === 'required' && <p role="alert">{errors.tool_name?.message}</p>}
                <label className="label">
                    <span className="label-text">Description</span>
                </label>
                <Textarea
                    className="input input-bordered  "
                    placeholder='Description'
                    {...register("description",
                        {
                            required: "Description is required",
                        }
                    )}
                />
                {errors.description?.type === 'required' && <p role="alert">{errors.description?.message}</p>}
                <label className="label">
                    <span className="label-text">Price</span>
                </label>
                <input
                    type="number"
                    className="input input-bordered  "
                    placeholder='Price'
                    {...register("price",
                        {
                            required: "Price is required",
                        }
                    )}
                />
                {errors.price?.type === 'required' && <p role="alert">{errors.price?.message}</p>}
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
                <input
                    type="number"
                    className="input input-bordered  "
                    placeholder='Quantity'
                    {...register("available_quantity",
                        {
                            required: "Quantity is required",
                        }
                    )}
                />
                {errors.available_quantity?.type === 'required' && <p role="alert">{errors.available_quantity?.message}</p>}
                <label className="label">
                    <span className="label-text">Minimum Order Quantity</span>
                </label>
                <input
                    type="number"
                    className="input input-bordered  "
                    placeholder='Minimum Order Quantity'
                    {...register("minimum_quantity",
                        {
                            required: ">Minimum order quantity is required",
                        }
                    )}
                />
                {errors.minimum_quantity?.type === 'required' && <p role="alert">{errors.minimum_quantity?.message}</p>}
                
                <label className="label">
                    <span className="label-text">Product Photo</span>
                </label>
                <input
                    type="file"
                    className="input input-bordered mb-1  py-2"
                    {...register("image",
                        {
                            required: "Image is required",
                        }
                    )}
                />
                {errors.image?.type === 'required' && <p role="alert">{errors.image?.message}</p>}

                <input type="submit" className='btn btn-info mt-6' value="Add Product" />
            </form>
        </div>
    );
};

export default AddAProduct;