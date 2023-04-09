import React from "react";
import Button from "../../atoms/button";

interface ButtonMoleculeProps{
    isVisible?:boolean  
}

const ButtonMolecule:React.FC<ButtonMoleculeProps> = ({isVisible=true})=>{
    return(
        <div hidden={!isVisible}>
            <Button backgroundColor="#0000ff" textColor="#ffffff" label="Button 1"/>
            <Button backgroundColor="#0000ff" textColor="#ffffff" label="Button 2"/>
        </div>
    );
}

export default ButtonMolecule