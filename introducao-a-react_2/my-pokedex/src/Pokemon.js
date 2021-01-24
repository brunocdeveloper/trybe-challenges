import React from 'react';

class Pokemon extends React.Component {
    render () {
        const { name, type, averageWeight, image } = this.props.pokemon;
        return (
            <div className="pokemon">
                <li>{name}</li>
                <li>{type}</li>
                <li>{averageWeight.value} {averageWeight.measurementUnit}</li>
                <img src={image} alt={`${name} image`}/>
            </div>
        )
    }
}

export default Pokemon;