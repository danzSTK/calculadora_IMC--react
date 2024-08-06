import style from './Tabela.modules.css';


const Tabela = () => {

    return(
        <section id='tabela-imc'>
            <h1 className='text-title'>Tabela IMC</h1>

            <table>
                <thead>
                    <tr>
                        <th>IMC{"(kg/m2)"}</th>
                        <th>Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>17 à 18.4</td>
                        <td>Abaixo do peso</td>
                    </tr>
                    <tr>
                        <td>18.5 à 24.9</td>
                        <td>Peso normal</td>
                    </tr>
                    <tr>
                        <td>25 à 29.9</td>
                        <td>Acima do peso</td>
                    </tr>
                    <tr>
                        <td>30 à 34.9</td>
                        <td>Obesidade graul I</td>
                    </tr>
                    <tr>
                        <td>35 à 40</td>
                        <td>Obesidade grau II</td>
                    </tr>
                    <tr>
                        <td>maior que 40</td>
                        <td>Obesidade grau III</td>
                    </tr>

                </tbody>
            </table>

        </section>
    )
}


export default Tabela;