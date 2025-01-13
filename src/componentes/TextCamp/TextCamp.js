
import './TextCamp.css'

const TextCamp = (propriedades) => {

    
    const Digitar = (evento) => {
        propriedades.Alterado(evento.target.value)

    }

    return (
        <div className="TextCamp">
            <label>{propriedades.label}</label>
            <input value={propriedades.valor} onChange = {Digitar} required={propriedades.obg} placeholder = {propriedades.placeholder}></input>
        </div>

    )

}

export default TextCamp