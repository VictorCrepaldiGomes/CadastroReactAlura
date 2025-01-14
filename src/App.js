import Banner from './componentes/Banner/Banner';
import Form from './componentes/Form/Form';
import { useState } from 'react';
import Time from './componentes/Time/Time';


function App() {

  const [colaboradores, setColaboradores] = useState([])

  const FuncionarioAdicinado = (colaborador) => {
    colaboradores.push(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }




  return (
    <div className="Banner">
      <Banner />
      <Form FuncionarioCadastrado = {colaborador => FuncionarioAdicinado(colaborador)} />
        <Time nome='Chefes'/>
        <Time nome='Gerência'/>
        <Time nome='Programadores'/>
        <Time nome='Suporte'/>
        <Time nome='Financeiro'/>

    </div>
  );
}

export default App;