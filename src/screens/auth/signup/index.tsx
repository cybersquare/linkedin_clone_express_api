import React from "react";
import { ErrorBoundary } from "../../../components/templates";
import SignupCompnent from "./signup";

const Signup: React.FC<{}>=({})=>{
    return(
        <ErrorBoundary>
            <SignupCompnent/>
        </ErrorBoundary>
    );

}

export default Signup;