import TextCamp from '../TextCamp/TextCamp';
import './Form.css';


const Form = () => {
    return (
        <section className='Form'>
            <form>
                <h2>Preencha os dados para criar o card do Funcionário DespaFront!</h2>
            <TextCamp label="Nome" placeholder="Digite seu Nome"/>
            <TextCamp label="Cargo"placeholder="Digite seu Cargo"/>
            <TextCamp label="Imagem"placeholder="Digite o endereço da imagem"/>
            </form>
        </section>
        
    )

}

export default Form