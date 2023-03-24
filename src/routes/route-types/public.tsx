import React, {ComponentType} from 'react';

interface Props{
    element: ComponentType;
    isBackgroundRemove?:boolean;
}

const Public:React.FC<Props> = ({element: Element, isBackgroundRemove=false})=>{
    

    
    if(isBackgroundRemove){
        return <Element/>
    }
    else{
        return <Element/>
    }
}

export default Public;