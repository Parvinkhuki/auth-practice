import React, { createContext } from 'react';
import { auth } from './firebaseconfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
export const AuthContext =createContext(null)
const Authprovider = ({children}) => {

const googleProvider =new GoogleAuthProvider()
const googleLogin = () => {
   
    return signInWithPopup(auth, googleProvider)
}
const authentication={
    googleLogin
}
console.log(auth.currentUser)
    return (
        <AuthContext.Provider value={authentication}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;