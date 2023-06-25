import React from "react";
const Slider = ({onclick,}) => {
    return (
        <>
        <label className="switch">
            <input type="checkbox" onClick={onclick} />
            <span className="slider round"></span>
        </label>
        </>
    )
}
export default Slider;