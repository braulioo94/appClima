import React from 'react'


const Clima = ({resultado}) => {

    //extraer los valores que estan el components internet -Clima- Main y Name
    const {name , main} = resultado ;

    if(!name){
        return null ;
    }

    //Restar los grados kelvin
        const kelvin =273.15 ;

    return ( 
        <div className ='card-panel white col s12'>
            <div className='black-text'>
                <h2>El clima en {name} es  : </h2>
                <p className ='temperatura'>
                    {(main.temp - kelvin).toFixed(0)} <span> &#x2103;</span>
                </p>
                
                <p > Temperatura Máxima :
                    {(main.temp_max - kelvin).toFixed(0)} <span> &#x2103;</span>
                </p>
                
                <p > Temperatura Minima :
                    {(main.temp_min - kelvin).toFixed(0)} <span> &#x2103;</span>
                </p>

            </div>
        </div>
     );
}
 
export default Clima;