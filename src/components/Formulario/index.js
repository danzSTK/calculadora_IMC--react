import { useEffect, useState } from 'react';
import Style from './formulario.modules.css';
import doctorIcone from './img/Medicine-bro.png' 

let valorCalculo;

const Formulario = ({submitForm}) => {

    const [nomeUsuario, setNomeUsuario] = useState('')
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [campoAlturaInvalido, setCampoAlturaInvalido] = useState(false)
    const [campoPesoInvalido, setCampoPesoInvalido] = useState(false)
    const [submitDesabilitado, setSubmitDesabilitado] = useState(true)
    const [renderizaFormulario, setRenderizaFormulario] = useState(true)
    const [loading, setLoading] = useState(false) 
    const validaNumber = /^[0-9.]*$/;

    function validaCampo(value, id){
        let stringVazia = false
        
        if(value === ''){
            stringVazia = true
        }

        if(id === 'altura'){
            const input = document.getElementById('altura');

            setCampoAlturaInvalido(!validaNumber.test(value));

            if(validaNumber.test(value) && !stringVazia){
                setAltura(Number(value))
                input.classList.remove('invalid');
            }else{
                input.classList.add('invalid');
                setCampoAlturaInvalido(true)
                
                setAltura(NaN)
            }
            return
        }

        if(id === 'peso'){
            const input = document.getElementById('peso');

            setCampoPesoInvalido(!validaNumber.test(value))
            
            if(validaNumber.test(value) && !stringVazia){
                setPeso(Number(value))
                input.classList.remove('invalid');
                
            }else{
                input.classList.add('invalid');
                setCampoPesoInvalido(true)
                setPeso(NaN)
            }
        }

    }

    useEffect(() => {
        if(campoAlturaInvalido || campoPesoInvalido){
            setSubmitDesabilitado(true)
        } else{
            setSubmitDesabilitado(false)
        }
    }, [campoAlturaInvalido, campoPesoInvalido])
    


    const exibeResultado = (e) =>  {
        e.preventDefault()
        setRenderizaFormulario(valorAtual => !valorAtual)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            submitForm()
        },1500);
    }

    const valorIMC = () =>{
        return peso / (altura * 2)
    }

    const stageIMC = () => {
        if(valorIMC() <= 18.4){
            return 'baixo'
        } 
        if(valorIMC() >= 18.5 && valorIMC() <= 24.9){
            return 'normal'
        } 
        if(valorIMC() >= 25){
            return 'alto'
        }
    }

    console.log(stageIMC())

    return(
        <section className='formulario' onSubmit={exibeResultado}>

            {renderizaFormulario && 
                <form className='form'>
                    <div className='form-container'>
                        <header className='form-header'>
                            <h1>Calculadora IMC</h1>
                        </header>
                        <ul className='input-list'>
                            <li>
                                <label>Nome</label>
                                <input type='text' placeholder='Digite seu nome'  required onKeyUp={({target}) => setNomeUsuario(target.value)}/>
                            </li>
                            <li>
                                <label>Altura</label>
                                <input id='altura' type='text' placeholder='Digite sua altura'  required onKeyUp={({target}) => validaCampo(target.value, 'altura')} />
                                {campoAlturaInvalido && <p className='text-invalid'>Campo Invalido: digite somente números Ex: <strong>1.90</strong></p>}
                            </li>
                            <li>
                                <label>Peso</label>
                                <input id='peso' type='text' placeholder='Digite sua altura' required min={1} max={500} onKeyUp={({target}) => validaCampo(target.value, 'peso')} />

                                {campoPesoInvalido && <p className='text-invalid'>Campo Invalido: digite somente números Ex: <strong>1.90</strong></p>}
                                
                            </li>
                            <button id='submit'disabled={submitDesabilitado} type='submit'>Calcular</button>
                        </ul>
                    </div> 
                </form>
            }

            {!renderizaFormulario && 

                <>
                    {loading && 
                        <div className='loading'></div>
                    }
                    
                    {!loading && 
                        <main className='form main'>
                            <button onClick={exibeResultado} className='btn-back' type='button'>{"<"} Back</button>
                            <article className='resultado'>
                                <picture>
                                    <img src={doctorIcone} alt="" />
                                </picture>

                                {stageIMC() == 'baixo' && 
                                <p>O seu <strong>IMC</strong> atual é de <strong>{valorIMC().toFixed(2)}</strong> e você está abaixo do seu peso ideal. </p>
                                }
                                {stageIMC() == 'normal' && 
                                    <p>O seu <strong>IMC</strong> atual é de <strong>{valorIMC().toFixed(2)}</strong> e você está indo muito bem!</p>
                                }
                                {stageIMC() == 'alto' &&
                                    <p>O seu <strong>IMC</strong> atual é de <strong>{valorIMC().toFixed(2)}</strong> e você está acima do peso e deve tomar cuidado com sua alimentação </p>
                                }

                                <br />
                                <p>Segue esses links abaixo nos quais irá lhe fornecer informações sobre seu estado atual e como melhorar 👇</p> <br />
                                <div className='container-links'>
                                    <a href='https://www.tuasaude.com/imc/#google_vignette'>O que é IMC?</a>

                                    {stageIMC() == "baixo" &&
                                        <a href='https://www.ecycle.com.br/como-engordar/'>Dicas para ganhar peso</a>
                                    }
                                    {stageIMC() == 'normal' && 
                                        <a href='https://vidasaudavel.einstein.br/alimentacao-equilibrada/'>Dicas de alimentação saudável</a>
                                    }

                                    {stageIMC() == 'alto' &&
                                        <a href='https://www.metropoles.com/saude/nutrologa-dicas-para-emagrecer-em-30-dias'>Dicas de emagrecimento</a>
                                    }
                                </div>

                                <a className='text-link' href='#tabela-imc'>Veja a tabela completa IMC</a>
                            </article>
                        </main>
                    }
                
                </>
            }
        </section>
    )
}


export default Formulario;

