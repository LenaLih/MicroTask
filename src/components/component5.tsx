import { useState } from "react";

interface Component5Props {
   callBack: () => void
 }

const Component5: React.FC<Component5Props> = ({callBack}) => {
   const [isGreen, setIsGreen] = useState(false);
   
   const callBackHandler = () => {
      setIsGreen(true)
      callBack()
    }
   return (
      <div className="container">
         <button onClick={callBackHandler}>up</button>
      </div>
   );
}

export default Component5;
