import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebaseconfig';
import { GoogleAuthProvider, createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
export const AuthContext =createContext(null)




const Authprovider = ({children}) => {
    const[user,setUser]=useState(null)

const googleProvider =new GoogleAuthProvider()
const googleLogin = () => {
   
    return signInWithPopup(auth, googleProvider)
}
const signUp=(email, password)=>{
    return createUserWithEmailAndPassword(auth ,email, password)
}
const signIn =(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
useEffect(()=>{onAuthStateChanged(auth, (user) => {
  
    setUser(user)
});
}
,[])

const signOut=  () => {
    return signOut(auth)
}






const authentications={
    googleLogin,signUp,signIn,user,signOut
}

    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;