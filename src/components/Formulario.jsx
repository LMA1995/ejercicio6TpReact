import React, { useEffect, useState } from 'react';
import './EstiloFormulario.css';
import ListaColores from './ListaColores';



const Formulario = () => {
  const coloresLocalStorage= JSON.parse(localStorage.getItem('listaColoresKey'))|| []
  const [listaColores, setListaColor]=useState(coloresLocalStorage)
  const [itemColor, setItemColor]= useState('')
  useEffect (()=>
  {
    localStorage.setItem('listaColoresKey', JSON.stringify(listaColores))
  },[listaColores])
  
  const handleSubmit =(e)=>
  {
    e.preventDefault();
    setListaColor([...listaColores , itemColor])

    setItemColor('')
  }
  const eliminarColor = (nombreColor)=>
  {
    const coloresEncontrados= listaColores.filter((color)=>
    {
      
      return color !== nombreColor; 
    })
    setListaColor(coloresEncontrados)
  }

    return (
       <section>
        
      <form className='mt-5' onSubmit={handleSubmit}>
        <div className="mb-3 d-flex align-items-center gap-3 container">
            <span className=" cuadrado">

            </span>
          <input
            type="text"
            className="form-control w-50"
            id="inputTarea"
            placeholder="Ingresa un color"
            onChange={(e)=>setItemColor(e.target.value)}
            value={itemColor}
           
          />
          <button className="btn btn-primary">Enviar</button>
        </div>
      </form>
      <ListaColores listaColores={listaColores} borrarColor={eliminarColor}></ListaColores>
      
    </section>
    );
};

export default Formulario;