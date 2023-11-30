import "./TextBox.css";

export function TextBox(props){
    return(
        <div className="text-box">
            <label>{props.children}</label>
            <input/>
        </div>
    );
};