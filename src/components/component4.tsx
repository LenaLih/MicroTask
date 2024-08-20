import { useState } from "react";
import Component5 from "./component5";


interface Component4Props {
  callBack: (title: string) => void
}

const Component4: React.FC<Component4Props> = ({callBack}) => {
  const [isGreen, setIsGreen] = useState(false);

  const callBackHandler = (title: string) => {
    setIsGreen(true);
    callBack(title);
    
  }
 

  return (
    <div className="container">
      <div className={`circle ${isGreen ? "green" : "red"}`}></div>
      <Component5 callBack={callBackHandler}/>
      
    </div>
  );
}

export default Component4;
