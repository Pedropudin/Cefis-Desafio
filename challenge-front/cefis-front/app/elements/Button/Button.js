import "./Button.css"

export function My_Button(props){
    return(
        <button className="my_button">
            {props.children}
        </button>
    )
}

//Não sei porque tem que colocar o children ali mas é sobre isso