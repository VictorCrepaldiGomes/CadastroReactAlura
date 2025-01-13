import './Lista.css';

const Lista = (props) => {
    console.log(props.itens)

    return (
        <div className='lista'>
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
               
            </select>
        </div>
    )


}

export default Lista