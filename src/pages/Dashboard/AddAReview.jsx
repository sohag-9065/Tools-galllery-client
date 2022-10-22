import React, { useState } from 'react';
import { Rating, Textarea } from 'react-daisyui';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase/firebase.config';
import Loading from '../shared/Loading';

const AddAReview = () => {
    const [user, loading] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [loadingImg, setLodingImg] = useState(false);
    const [rating, setRating] = useState(5);
    // console.log(rating);


    if (loading || loadingImg) {
        return <Loading></Loading>
    }

    const onSubmit = event => {
        const review = {
            user_name: user?.displayName,
            email: user.email,
            photoURL: user?.photoURL,
            user_review: event.review,
            user_rating: rating,
        }
        console.log(review);
        reset();
        // // sent to database of new tool information 
        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(inserted => {
                setLodingImg(false)
                if (inserted.insertedId) {
                    toast.success("Review added successfully");

                }
                else {
                    toast.error("Failed to add the Review");
                }
                console.log('Rerview', inserted);
            })

    };
    const handleRating = e => {
        setRating(e);
    }


    return (
        <div className='my-12 lg:mb-20 mx-8'>
            <h1 className='text-xl lg:text-2xl text-center mb-4'>Add Review</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="form-control max-w-lg mx-auto shadow-2xl p-3 lg:p-6">

                <label className="label">
                    <span className="label-text">Review</span>
                </label>
                <Textarea
                    className="input input-bordered h-40"
                    placeholder='Write Review'
                    {...register("review",
                        {
                            required: "Review is required",
                        }
                    )}

                />
                {errors.review?.type === 'required' && <p role="alert">{errors.review?.message}</p>}
                <label className="label mt-4">
                    <span className="label-text">Rating</span>
                </label>

                <Rating onChange={handleRating} >
                    <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400 " checked />
                    <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <Rating.Item name="rating-2" className="mask mask-star-2 bg-orange-400" />
                </Rating>


                <input type="submit" className='btn btn-info mt-6' value="Add Review" />
            </form>
        </div>
    );
};

export default AddAReview;