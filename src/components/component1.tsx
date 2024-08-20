
import { useState } from "react";
import Component2 from "./component2";

interface Component1Props {
   callBack: (title: string) => void
}

const Component1: React.FC<Component1Props> = ({callBack}) => {
  const [isGreen, setIsGreen] = useState(false);

 const callBackHandler = (title: string) => {
   setIsGreen(true);
   callBack(title);
   console.log('Component1:', title);
 }

  return (
    <div className="container">
      <div className={`circle ${isGreen ? "green"  : "red"}`}>
      
      </div>
      
      <Component2   callBack={callBackHandler}/>
    </div>
  );
};

export default Component1;
