import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)
// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)

const googleProvider = new GoogleAuthProvider()

const googleLogin = () =>{
    return signInWithPopup(auth, googleProvider)
}

    const auth = getAuth(app)
    
    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const forgetPassword = (email) =>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }

    const verificationEmail = () =>{
        setLoading(true)
        return sendEmailVerification(auth.currentUser)
    }

    const handleUpdateProfile = (name, photo) =>{
        setLoading(true)
        return updateProfile(auth .currentUser, {
            displayName: name, 
            photoURL: photo,
          } )
    }

    useState( () =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            // console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubscribe()
        }
    } ,[])

    useEffect( ()=>{
        if(user){
            setLoading(false)
        }
       
    }, [user])


    const authInfo = {user, loading, createUser, signInUser, logOut, googleLogin, handleUpdateProfile, forgetPassword, verificationEmail}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;