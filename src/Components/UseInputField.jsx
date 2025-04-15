import React, { useState } from 'react';

const UseInputField = (defaultValue) => {
    const [fieldValue,setFieldValue]=useState(defaultValue)
    const handleChange=e=>{
        setFieldValue(e.target.value)
    }
    return [fieldValue,handleChange]
        
};

export default UseInputField;