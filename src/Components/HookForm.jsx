import React from 'react';
import UseInputField from './UseInputField';

const HookForm = () => {
    const[name,nameOnchange]=UseInputField('')
    const[email,emailOnchange]=UseInputField('')

    const handleSubmit=e=>{
        e.preventDefault()
        console.log(name,email);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

            <input defaultValue={name} onChange={nameOnchange} type="email" name='email' placeholder='Email'/><br />
                <input defaultValue={email} onChange={emailOnchange} type="password" name='password'placeholder='Password' required/><br />

                <input type="submit" value='submit' />
            </form>
        </div>
    );
};

export default HookForm;