import { MouseEventHandler, useRef, useState } from "react";

interface Component5Props {
   callBack: (title: string) => void;
      
 }

const Component5: React.FC<Component5Props> = ({callBack}) => {
   const [isGreen, setIsGreen] = useState(false);
   const newTitleRef = useRef<HTMLInputElement>(null);

   const callBackHandler: MouseEventHandler<HTMLButtonElement> = () => {
      setIsGreen(true);
      if( newTitleRef.current && newTitleRef.current.value.trim() !== '') {
         callBack(newTitleRef.current.value) 
         newTitleRef.current.value = ''
       } else {
           callBack('ERROR')
         }
      
      };

   return (
      <div className="container">
         <input ref={newTitleRef} />
         <button onClick={callBackHandler}>up</button>
      
      </div>
   );
   }

export default Component5;
