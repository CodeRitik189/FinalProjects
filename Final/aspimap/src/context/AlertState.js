import React ,{useState} from "react";
import alertContext from "./alertContext";

const AlertState = (props)=>{

    const [alert, setAlert] = useState(null)
    const showAlert = (colour, text) =>{
        setAlert({colour:colour, text:text})
        setTimeout(() => {
            setAlert(null)
        }, 1500);
    }

    return (
        <alertContext.Provider value={{alert, showAlert}} >
          {props.children}
        </alertContext.Provider>
      );
}

export default AlertState;