import React, { useRef } from 'react';

const Uncontrolled = () => {
    const emailRef=useRef('')
    const passRef=useRef('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        // console.log(emailRef.current.value);
        const email=emailRef.current.value
        const password=passRef.current.value
        console.log(email,password);
        
        
    }
    return (
        <div>
            <form onClick={handleSubmit}>
                
                <input ref={emailRef} type="email" name='email' placeholder='Email'/><br />
                <input ref={passRef} type="password" name='password'placeholder='Password' required/><br />

                <input type="submit" value='submit' />
            </form>
        </div>
    );
};

export default Uncontrolled;