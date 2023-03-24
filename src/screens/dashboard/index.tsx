import React from "react";
import { ErrorBoundary } from "../../components/templates";
import DashboardComponent from "./dashboard";

const Dashboard: React.FC<{}>=({})=>{
    return(
        <ErrorBoundary>
            <DashboardComponent/>
        </ErrorBoundary>
    );

}

export default Dashboard;