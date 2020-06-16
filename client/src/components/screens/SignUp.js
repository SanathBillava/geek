import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import M from 'materialize-css';

const SignUp = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("") 
    const [mobile, setMobile] = useState("") 
    const PostData = () =>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: "Invalid Email ", classes:"#f4511e deep-orange darken-1"})
            return
        }

        fetch("/signup", {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,
                password,
                email,
                mobile
            })
        }).then(res => res.json())
        .then(data => {
            if(data.error){
                M.toast({html: data.error, classes:"#f4511e deep-orange darken-1"})
            }
            else{
                M.toast({html: data.message, classes:"#388e3c green darken-2"})
                history.push('/signin')
            }
        }).catch(err => {
            console.log(err)
        })
    }
    return(
        <div className="mycard">
             <div className="card auth-card">
                <h2>Sign Up</h2>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="mobile" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <br></br>
            <br></br>
                <button className="btn waves-effect waves-light #2979ff blue accent-3" onClick={() => PostData()}>
                    SignUp
                </button>
                <h5>
                <Link to="/signin">Already have an account ?</Link>
                </h5>
             </div>
        </div>
    );
}

export default SignUp