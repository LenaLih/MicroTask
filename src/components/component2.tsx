import { title } from "process";
import { useState } from "react";
import Component3 from "./component3";



interface Component2Props {
   callBack: (title: string) => void
 }

 const Component2: React.FC<Component2Props> = ({callBack}) => {
   const [isGreen, setIsGreen] = useState(false);

   const callBackHandler = (title: string) => {
      setIsGreen(true);
      callBack(title);
      console.log('Component2:', title);
    }

   return (
      <div className="container">
         <div className={`circle ${isGreen ? "green" : "red"}`}></div>
         <Component3  callBack={callBackHandler}/>
      </div>
   );
}

export default Component2;
