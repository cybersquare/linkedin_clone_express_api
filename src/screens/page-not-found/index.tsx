import React from "react";
import { ErrorBoundary } from "../../components/templates";
import PageNotFoundComponent from "./page-not-found";

const PageNotFound: React.FC<{}>=({})=>{
    return(
        <ErrorBoundary>
            <PageNotFoundComponent/>
        </ErrorBoundary>
    );

}

export default PageNotFound;