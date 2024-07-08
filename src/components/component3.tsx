import { useState } from "react";
import Component4 from "./component4";


interface Component3Props {
   callBack: () => void
 }

const Component3: React.FC<Component3Props> = ({callBack}) => {
   const [isGreen, setIsGreen] = useState(false);
  
   const callBackHandler = () => {
      setIsGreen(true)
      callBack()
    }

   return (
      <div className="container">
         <div className={`circle ${isGreen ? "green" : "red"}`}></div>
      <Component4 callBack={callBackHandler}/>
      </div>
   );
}

export default Component3;
