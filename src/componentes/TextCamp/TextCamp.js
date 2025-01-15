import './TextCamp.css'

const TextCamp = (props) => {

    
    const Digitar = (evento) => {
        props.Alterado(evento.target.value)

    }

    return (
        <div className="TextCamp">
            <label>{props.label}</label>
            <input value={props.valor} onChange = {Digitar} required={props.obg} placeholder = {props.placeholder}></input>
        </div>

    )

}

export default TextCamp