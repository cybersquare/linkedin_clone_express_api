
import React from "react";

interface InputProps{
    backgroundColor?: string;
    textColor?:string;
    size?:"small"|"medium"|"large";
    placeholder:string;
    icon?:any;
    className?:string;
    isDisabled?:boolean;
    value?:string;
    labelColor?:string;
    labelText?:string;
    isLabel:boolean;

}

const Input:React.FC<InputProps> = ({
    size="medium", backgroundColor="#0000ff", textColor="#ffffff",
    labelText="Your label",  className,  isDisabled, isLabel, value, placeholder
})=>{
    return(
        <div className={className}>
            <div>{isLabel?<p>{labelText}</p>:<p></p>}</div>
            <div>
                <input type="text" value={value} disabled={!isDisabled}
                placeholder={placeholder}/>
            </div>
        </div>
    );

}

export default Input