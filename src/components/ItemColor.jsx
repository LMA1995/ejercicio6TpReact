import React from 'react';
import './EstiloCards.css';

const ItemColor = ({color, borrarColor}) => {
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <div className='card shadow card-formato '>
            <div className='card-header text-center'>{color}</div>
            <div className='card-body d-flex justify-content-center align-items-center'></div>
            <div className='card-footer text-center'>
                <button className='btn btn-danger' onClick={()=>borrarColor(color)}>Borrar</button>
            </div>
            
        </div>
        </div>
        
    );
};

export default ItemColor;