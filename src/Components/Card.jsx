import React from 'react'

const Card = ({ name, car }) => {
    return (
        <div className='car-render'>
            <p>Hola <span className='user-name'>{name}</span>, tu auto favorito es <span className='user-car'>{car}</span></p>
        </div>
    )
}

export default Card