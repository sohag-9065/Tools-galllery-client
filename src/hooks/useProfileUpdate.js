import  { useEffect } from 'react';

const useProfileUpdate = (userInfo) => {

    useEffect(()=>{
        const name = userInfo?.name;
        const email = userInfo?.email;
        const currentUser = {email: email, name: name};
        // console.log(currentUser);
        if(email){
            
            fetch(`http://localhost:5000/user/profile/${email}`,{
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
            
                console.log('Data iinside useToken', data);
            })
        }
    },[userInfo]);

    return [userInfo];
};

export default useProfileUpdate;