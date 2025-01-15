import './Lista.css';

const Lista = (props) => {

    return (
        <div className='lista'>
            <label>{props.label}</label>
            <select required={props.required} value={props.value} onChange={eventos => props.Alterado(eventos.target.value)}>
                <option value=""></option> 
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
               
            </select>
        </div>
    )


}

export default Lista