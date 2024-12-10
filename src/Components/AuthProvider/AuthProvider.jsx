import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../../firebage/firebage.congfig';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();


 export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user , setuser]= useState();
    const [loading , setLoading]=useState(true)
    const userRegister = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userSignIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signOutUser = ()=>{
        return signOut(auth)
    }
     const googleLogin = ()=>{
        setLoading(true)
         return signInWithPopup(auth, provider);
     }
    const authinfo = {
        user,
        loading,
        userRegister,
        userSignIn,
        signOutUser,
        googleLogin
    }


    useEffect(()=>{
      const UnSubesCribe=  onAuthStateChanged(auth, correntUser=>{
            setuser(correntUser)
            setLoading(false)
        })
        return ()=>{
            UnSubesCribe()
        }
    },[])

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;