import ClipLoader from "react-spinners/ClipLoader";
import React from "react";

interface ButtonProps{
    backgroundColor: string;
    textColor:string;
    size?:"small"|"medium"|"large";
    label:string;
    type?:"submit"|"reset"|"button"|undefined;
    onClick?:()=>void;
    className?:string;
    isLoading?:boolean;
    isDisabled?:boolean;
}

const Button:React.FC<ButtonProps> = ({
    size="medium", backgroundColor="#0000ff", textColor="#ffffff",
    label="Click here", type="button", className, isLoading, isDisabled, onClick
})=>{
    return(
        <button type={type} className={className} onClick={onClick}
        style={{backgroundColor:backgroundColor, color:textColor}}
        >
           <div>
            {isLoading?<ClipLoader size={23}/>:null}<span>{label}</span>
           </div>
        </button>
    );

}

export default Button