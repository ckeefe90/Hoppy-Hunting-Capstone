import React from 'react';
import PropTypes from 'prop-types';
import './Rating.css';

export default function Rating(props) {
    const stars = [0, 0, 0, 0, 0].map((_, i) =>
        (i < props.value)
            //filled in star
            ? <span key={i} onClick={() => props.onChange((i + 1).toString())} className='star'>&#9733; </span>
            //empty star
            : <span key={i} onClick={() => props.onChange((i + 1).toString())} className='star'>&#9734; </span>
    );
    return (
        <span className="starRating">
            {stars}
        </span>
    );
}

Rating.propTypes = {
    value: PropTypes.oneOf(['1', '2', '3', '4', '5']),
    onChange: PropTypes.func
}

Rating.defaultProps = { value: null }