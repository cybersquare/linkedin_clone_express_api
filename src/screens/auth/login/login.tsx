import React from "react";
import Button from "../../../components/atoms/button";
import ButtonMolecule from "../../../components/molecules/ButtonMolecule";


const LoginComponent:React.FC<{}>=({})=>{
    return(
        <div>Login component
            <Button backgroundColor="#0000ff" textColor="#ffffff" label="Hello"/>
            <ButtonMolecule isVisible={true}/>
            <ButtonMolecule isVisible={false}/>
        </div>
    );
}



export default LoginComponent



