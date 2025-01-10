import './TextCamp.css'

const TextCamp = (propriedades) => {
    return (
        <div className="TextCamp">
            <label>{propriedades.label}</label>
            <input placeholder={propriedades.placeholder}></input>
        </div>

    )

}

export default TextCamp;