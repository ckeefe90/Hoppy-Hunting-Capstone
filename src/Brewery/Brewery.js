import React from 'react';
import PropTypes from 'prop-types';

export default function Brewery(props) {
    return (
        <div>
            <h4>{props.name}</h4>
            <p>{props.address}</p>
            <h6>comments</h6>
            <p>{props.comments}</p>
            <p>rating: {props.rating}</p>
            <button type='button' onClick={() => props.delete(props.id)}>Delete Brewery</button>
        </div>
    )
}

Brewery.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    comments: PropTypes.string,
    rating: PropTypes.oneOf([1, 2, 3, 4, 5]),
    delete: PropTypes.func.isRequired
}