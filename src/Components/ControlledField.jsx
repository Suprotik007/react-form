import React, { useState } from 'react';

const ControlledField = () => {

    const [pass,setPass]=useState('')
    const [error,setError]=useState()
    const[email,setEmail]=useState('')
    const onChangePass=(e)=>{
        console.log(e.target.value);
        setPass(e.target.value);
        // if (pass.length<6) {
        //     setError("Must be 6 characters")
        // }
        // else{setError('')}
        
        

    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        console.log(e.target.email.value);
        console.log(e.target.password.value)
        if (pass.length<6) {
            setError("Must be 6 characters")
        }
        else{setError('')}
        
    }
    const handleEmail=(e)=>{
setEmail(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                
                <input type="email" name='email' onChange={handleEmail } placeholder='Email'/><br />
                <input type="password" name='password'onChange={onChangePass} defaultValue={pass} placeholder='Password' required/><br />

                <input type="submit" value='submit' />
            </form>
            <h4 style={{color:'red'}}>{error}</h4>
        </div>
    );
};

export default ControlledField;