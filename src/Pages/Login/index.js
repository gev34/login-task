import { useState,useRef } from "react"
import Button from "../../components/Button"
import loginData from "../../loginData";

const Login = () => {

    const [emailPass , setEmailPass] = useState({});
    const myRef = useRef('');

    const isValidUser = () => {
        loginData.map((user) => {
            if(user.email === emailPass.email && user.password === emailPass.password) {
                console.log(true)
            }
        })
    }

    return (
        <>
            <form>
                <input type = "email" ref={myRef} name = "email" placeholder="Email" onChange={(e) => {
                    setEmailPass({...emailPass ,
                    [e.target.name] : e.target.value})
                }}/>
                <input type = "password" name = "password" placeholder="Password" onChange={(e) => {
                    setEmailPass({...emailPass ,
                    [e.target.name] : e.target.value})
                }}/>
                
                <Button 
                    text = "Log In"
                    disabled = {Object.keys(emailPass).length > 1 ? false : true}
                    onClick = {(e) => {
                        e.preventDefault();
                        isValidUser();
                    }}
                    color = ""
                    backgroundColor = ""
                />
                <Button 
                    text = " Focus"
                    disabled = {false}
                    onClick = {(e) => {
                        e.preventDefault();
                        myRef.current.focus();
                    }}
                    color = "black"
                    backgroundColor = "red"
                />
            </form>
        </>
    )
}
export default Login