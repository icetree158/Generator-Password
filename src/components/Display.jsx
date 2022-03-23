import React from 'react';
import cl from '../style/ComponentStyle/display.module.css'
const Display = ({children,...props}) => {
    return (
        <div className={cl.display_board}>
            <span>
{children}
        </span>
            
        </div>
    );
};

export default Display;