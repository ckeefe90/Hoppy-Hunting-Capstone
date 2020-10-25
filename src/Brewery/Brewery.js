import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../Rating/Rating';
import { useContext } from 'react';
import BreweryContext from '../BreweryContext/BreweryContext';
import { useState } from 'react';
import './Brewery.css';

export default function Brewery(props) {
    const { updateBrewery } = useContext(BreweryContext)
    const [comments, setComments] = useState(props.comments)
    const [rating, setRating] = useState(props.rating)
    return (
        <div className='brewery'>
            <h3>{props.name}</h3>
            <p>{props.address}</p>
            <div className='comments'>
                <label htmlFor='comments'>Comments:</label>
                <textarea name='comments' defaultValue={comments} onChange={e => setComments(e.target.value)} />
            </div>
            <div className='rating'>
                <label>Rating:</label>
                <Rating value={rating} onChange={setRating} />
            </div>
            <div className='actions'>
                <button
                    type='button'
                    onClick={() => updateBrewery(props.id, { comments, rating })}
                    disabled={props.comments === comments && props.rating === rating}
                >Save Changes</button>
                <button type='button' onClick={() => props.delete(props.id)}>Delete Brewery</button>
            </div>
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