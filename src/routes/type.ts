import React from "react";

export interface RouteDataType{
    path:string;
    component:React.ComponentType;
    isPrivate:boolean;
    isBackgroundRemove?:boolean;
}