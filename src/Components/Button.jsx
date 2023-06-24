import React from "react";
const Button = ({title, onclick}) => {
    return (
        <div>
            <button 
            style={{
                maxWidth: "140px",
                minWidth: "80px",
                height: "30px",
                marginRight: "5px"
            }}
            onClick={onclick}
            >
                {title}
            </button>
        </div>
    )
}
export default Button