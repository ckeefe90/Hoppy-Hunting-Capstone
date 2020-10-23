import React from 'react';
import PropTypes from 'prop-types';

export default function Rating(props) {
    const stars = [0, 0, 0, 0, 0].map((_, i) =>
        (i < props.value)
            //filled in star
            ? <span key={i} onClick={() => props.onChange((i + 1).toString())}>&#9733; </span>
            //empty star
            : <span key={i} onClick={() => props.onChange((i + 1).toString())}>&#9734; </span>
    );
    return (
        <div className="rating">
            {stars}
        </div>
    );
}

Rating.propTypes = {
    value: PropTypes.oneOf(['1', '2', '3', '4', '5']),
    onChange: PropTypes.func
}

Rating.defaultProps = { value: null }