import React from 'react';
import cl from '../CheckBox/CheckBox.module.css'

const CheckBox = ({children,...props}) => {
    return (
        <div className={cl.container_checkbox}>
         <input {...props}  className={cl.check_box} type="checkbox"  name={children} >
           
        </input>{children}
        </div>
        
        
    );
};

export default CheckBox;