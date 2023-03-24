import React from "react";


import {Routes as DomRoutes, Route} from "react-router-dom";
import { RouteDataType } from "./type";

import {ROUTES} from "../utils/routes"
import {Login, Signup, Dashboard, PageNotFound} from "../screens";

import Private from "./route-types/private";
import Public from "./route-types/public";

export const RoutesData:{ [key: string]: RouteDataType } = { 
    base:{
        path: ROUTES.LOGIN,
        component: Login,
        isPrivate: false
    },
    signup:{
        path: ROUTES.SIGNUP,
        component: Signup,
        isPrivate: false
    },
    dashboard:{
        path: ROUTES.DASHBOARD,
        component: Dashboard,
        isPrivate: true
    },
    pagenotfound:{
        path:ROUTES.PAGENOTFOUND,
        component: PageNotFound,
        isPrivate: false
    }
 }

export default function WebRoutes() {
    return(
        <DomRoutes key="web-routes">
            {
                Object.keys(RoutesData).map((route, index)=>{
                    let item:RouteDataType = RoutesData[route];
                    return(
                        <Route key={`web-route-${item.path}-${index}`} path={item.path}
                        element={ item.isPrivate?
                            <Private element={item.component}/>
                            :<Public element={item.component}/>
                        }/>
                    )
                })
            }
        </DomRoutes>
    );
}

