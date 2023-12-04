import { useEffect,useState } from "react";

import "./Button.css";

export function My_Button(props){

    const [postData, setPostData] = useState({}); 
    const [response, setResponse] = useState(null);
  
    const ClickButton = async () => {
      try {
        const response = await fetch('./', {
          method: 'POST',

          body: {
            "user_id": "4",
            "first_name": "Takafaca",
            "last_name": "Nopexi",
            "type": "0"
          }
        });
  
        const data = await response.json();
        setResponse(data);
      } catch (error) {
        console.error('There was an unexpected error:', error);
      }
    };

    return(
        <button className="my_button" onClick={ClickButton}>
            {props.children}
        </button>
    )
}