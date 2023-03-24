import React from "react";
import { ErrorBoundary } from "../../../components/templates";
import LoginComponent from "./login";

const Login: React.FC<{}>=({})=>{
    return(
        <ErrorBoundary>
            <LoginComponent/>
        </ErrorBoundary>
    );

}

export default Login;
