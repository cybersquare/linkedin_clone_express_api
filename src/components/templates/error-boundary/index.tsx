import {Component, ErrorInfo, ReactNode} from 'react';

interface Props{
    children?:ReactNode,
}

interface State{
    hasError:boolean,
}


class ErrorBoundary extends Component<Props, State>{
    public state:State={hasError:false}
    public static getDerivedStateFromError(_: Error): State {
        return{hasError:true}
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error)
        console.log(errorInfo)
    }

    public render(){
        if (this.state.hasError) {
            return (
              <h1 className="text-white text-center p-5 pt-32 ">
                Sorry... There is an Error
              </h1>
            );
          }
      
          return this.props.children;
    }
}

export default ErrorBoundary;