import Button from '../Button/Button';
import Lista from '../Lista/Lista';
import TextCamp from '../TextCamp/TextCamp';
import './Form.css';


const Form = () => {

    const times = [
        'Programadores',
        'Designers',
        'Suporte',
        'Gerência',
        'Financeiro'
    ] 
        

    return (
        <section className='Form'>
            <form>
                <h2>Preencha os dados para adicionar o funcionário na escala de trabalho!</h2>
                <TextCamp label="Nome" placeholder="Digite seu Nome" />
                <TextCamp label="Cargo" placeholder="Digite seu Cargo" />
                <TextCamp label="Imagem" placeholder="Digite o endereço da imagem" />
                <Lista label='Time' itens={times}/>
                <Button texto="Adicionar Funcionário"/>
            </form>
        </section>

    )

}

export default Form