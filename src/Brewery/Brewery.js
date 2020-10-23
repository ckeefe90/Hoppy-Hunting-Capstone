import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../Rating/Rating';
import { useContext } from 'react';
import BreweryContext from '../BreweryContext/BreweryContext';
import { useState } from 'react';

export default function Brewery(props) {
    const { updateBrewery } = useContext(BreweryContext)
    const [comments, setComments] = useState(props.comments)
    const [rating, setRating] = useState(props.rating)
    return (
        <div>
            <h4>{props.name}</h4>
            <p>{props.address}</p>
            <h6>comments</h6>
            <p><textarea defaultValue={comments} onChange={e => setComments(e.target.value)} /></p>
            <p>Rate the brewery: <Rating value={rating} onChange={setRating} /></p>
            <button type='button' onClick={() => updateBrewery(props.id, { comments, rating })}>Save Changes</button>
            <button type='button' onClick={() => props.delete(props.id)}>Delete Brewery</button>
        </div>
    )
}

Brewery.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    comments: PropTypes.string,
    rating: PropTypes.oneOf(['1', '2', '3', '4', '5']),
    delete: PropTypes.func.isRequired
}