import { useState } from "react";
import Component2 from "./component2";

interface Component1Props {
   callBack: () => void
}

const Component1: React.FC<Component1Props> = ({callBack}) => {
  const [isGreen, setIsGreen] = useState(false);

 const callBackHandler = () => {
   setIsGreen(true)
   callBack()
 }

  return (
    <div className="container">
      <div className={`circle ${isGreen ? "green" : "red"}`}></div>
      <Component2   callBack={callBackHandler}/>
    </div>
  );
};

export default Component1;
