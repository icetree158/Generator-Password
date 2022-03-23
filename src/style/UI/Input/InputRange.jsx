import React, { useState } from 'react';
import cl from '../Input/InputRange.module.css'
const InputRange = ({children,getLen, ...props}) => {
    const [val,setVal]=useState(0);
    const updataValue=(e)=>{
        setVal(e.target.value)
        getLen(e.target.value)      
    }
        
    return (
        <div className={cl.container_range}>
            <span className={cl.length_password}>Длинна</span>
        <input className={cl.input_range} type="range" {...props} value={val}  onChange={updataValue}>
            {children} 
            
        </input>
        <span className={cl.val_length} >{val}</span>
        </div>
    );
};

export default InputRange;