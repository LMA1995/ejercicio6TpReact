import React from 'react';
import ItemColor from './ItemColor';

const ListaColores = ({listaColores , borrarColor}) => {
    return (
        <div className='row container-fluid'>
            {
                listaColores.map((color ,indice)=><ItemColor key={indice} color={color} borrarColor={borrarColor}/>)
            }
            
        </div>
    );
};

export default ListaColores;