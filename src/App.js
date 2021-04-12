import React,{Fragment, useState,useEffect} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import Clima from './componentes/Clima';
import Error from './componentes/Error';

function App() {

    const [busqueda, guardarBusqueda] = useState({
      ciudad:'',
      pais:''
  }) ;

    const{ciudad, pais} = busqueda ;

    const [consultar, guardarConsultar] =useState(false)
    const [resultado, guardarResultado] = useState({})
    const [error, guardarError] = useState(false)

    useEffect(() => {
      const  consultarAPI = async () => {

        if ( consultar){

          const appId = 'ad16c2ae5b598a7297c8ef04943268ed '
          const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

          const respuesta= await fetch(url) ;
          const resultado = await respuesta.json()

          guardarResultado(resultado)
          guardarConsultar(false)

          //Detecta si hubo resultados correctos en la consulta
          if(resultado.cod ==='404'){
            return guardarError(true)
           } 
           guardarError(false)
        }
      }
      consultarAPI()
    },[consultar])

    let componente ;
    if(error){
      componente= <Error mensaje='No hay resultado' />
    } else {

     componente = <Clima 
                    resultado={resultado}
                  />
    }

    
    

  return (
    <Fragment>

    <Header titulo ='Clima React app' />

    <div className='contenedor-form'>
      <div className='container'>
        <div className='row'>
          <div className='col m6 s12'>
              <Formulario 
                busqueda={busqueda}
                guardarBusqueda={guardarBusqueda}
                guardarConsultar={guardarConsultar}
              />
          </div>
          <div className='col m6 s12'>
              {componente}
          </div>

        </div>
      </div>
    </div>


    </Fragment>
  ) ;
}

export default App;
