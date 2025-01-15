import Banner from './componentes/Banner/Banner';
import Form from './componentes/Form/Form';
import { useState } from 'react';
import Time from './componentes/Time/Time';


function App() {

  const times = [
    {
      nome: 'Chefe',
      corPrimaria: '#55C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Gerência',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8EF',
    },
    {
      nome: 'Programadores',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Suporte',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Financeiro',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const FuncionarioAdicinado = (colaborador) => {

    setColaboradores([...colaboradores, colaborador])
  }




  return (
    <div className="Banner">
      <Banner />
      <Form times={times.map(time => time.nome)} FuncionarioCadastrado = {colaborador => FuncionarioAdicinado(colaborador)}/>


     {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria} 
      colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
     />)}

    </div>
  );
}

export default App;