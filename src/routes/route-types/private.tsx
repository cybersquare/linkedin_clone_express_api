import React, {ComponentType} from 'react';
import { useNavigate } from 'react-router';
import { ROUTES } from '../../utils';
import {getAccessToken} from "../../utils/helper";

interface Props{
    element: ComponentType;
    isBackgroundRemove?:boolean;
}

const Private:React.FC<Props> = ({element: Element, isBackgroundRemove=false})=>{
    const token = getAccessToken();
    const navigate = useNavigate();
    
    React.useEffect(() => {
        //navigate to login if token is not available
        if(!token||token===""|| token===undefined){
            console.log("Re routing")
            console.log(ROUTES.LOGIN)
            navigate(ROUTES.LOGIN);
        }
      }, []);



    

    if(isBackgroundRemove){
        return <Element/>
    }
    else{
        return <Element/>
    }
}

export default Private;