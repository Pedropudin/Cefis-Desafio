export default function TextBox() {

    function sendData() {

        let texto = document.getElementById("texto");
        let selec = document.getElementById("seleciona");

        let data = {
            "first_name": texto.value,
            "type": selec.value
        };

        data = JSON.stringify(data);
        console.log(data)
    };

    return(
        <div>
            <input type="text" id="texto"/>
            <select id="seleciona">
                <option value={1}>Eu sou 1</option>
                <option value={2}>Eu sou 2</option>
                <option value={3}>Eu sou 3</option>
            </select>
            <button onClick={sendData}>Clica</button>
        </div>
    );
};