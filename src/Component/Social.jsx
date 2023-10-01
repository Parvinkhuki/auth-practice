import React, { useContext } from 'react';
import { AuthContext } from '../Authprovider';


const Social = () => {
    const { googleLogin }=useContext(AuthContext)
    console.log('')

const handleSocialLogin=(media)=>{
    media()
}





    return (
        <>
        <div className="divider">continue with</div>
        <div className="flex justify-around">
            <button
                onClick={() => handleSocialLogin(googleLogin)}
                className="btn btn-neutral btn-sm">Google</button>
            {/* <button
                onClick={() => handleSocialLogin(githubLogin)}
                className="btn btn-neutral btn-sm">Github</button> */}

        </div>
    </>
    );
};

export default Social;