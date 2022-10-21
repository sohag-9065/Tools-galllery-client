import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase/firebase.config';
import Loading from '../shared/Loading';

const SocialLogin = () => {

    const [
        signInWithGoogle,
        user,
        loading,
        error
    ] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let signInErrorMesseage;

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);

    if(loading){
        return <Loading></Loading>
    }

    if (error) {
        signInErrorMesseage = <p>Error: {error.message}</p> ;
    }

    return (
        <div>
            <div className="flex flex-col w-full border-opacity-50">
                <div className="divider">OR</div>
            </div>
            { signInErrorMesseage }
            <button
                onClick={() => signInWithGoogle()}
                className="btn btn-outline w-full">
                CONTINUE WITH GOOGLE
            </button>
        </div>
    );
};

export default SocialLogin;