import axios from 'axios'
import {toast} from 'react-toastify';

const authAction = {

    signupUser: (newUser) => {
        return async (dispatch, getState) =>{
            try {
                const user = await axios.post("http://localhost:4000/api/auth/signup",
                {...newUser
                })

               if(user.data.success && !user.data.error){
                toast.success("Hello " + user.data.response.newUser.name, {
                    position: toast.POSITION.TOP_CENTER,
                   icon: "👌"
                }) 
                localStorage.setItem("token", user.data.response.token)
                console.log(user)
                dispatch({type: "NEW_USER", payload:user.data.response.newUser})
                }else{
                    toast.error(user.data.response)
                }
            }catch(error){
                console.error(error)
            }
        }
    },
    signIn: (email,password) => {
        return async(dispatch,getState) => {
            try{
                console.log(email + password)
                const user = await axios.post("http://localhost:4000/api/auth/signin", {email,password})
                console.log(user)
                if(user.data.success && !user.data.error){
                    localStorage.setItem("token", user.data.response.token)
                    toast.success("Welcome " + user.data.response.name, {
                        position: toast.POSITION.TOP_CENTER,
                       icon: "👌"
                    })
                    dispatch({type:"USER", payload:user.data.response})
                    console.log(user)
                }else{
                    toast.error(user.data.error)
                }
            }catch(error){
                console.error(error)
            }
        }
    },
    signToken:()=>{
        return async(dispatch, getState)=>{
            try{
                const token = localStorage.getItem("token")
                const user = await axios.get("http://localhost:4000/api/auth", {
                headers:{
                    Authorization: `Bearer ${token}`}
            })
            
            dispatch({type:"TOKEN", payload: user.data})

        }catch (error){
           console.log(error)
        }
     }
    },

    signOut: () => {
        localStorage.removeItem("token")
        return (dispatch, getState)=>{
            dispatch({type: "SIGN_OUT",payload: null})
        }
    }
}

export default authAction