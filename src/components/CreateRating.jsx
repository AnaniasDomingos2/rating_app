import React from 'react';
import './rating.css';

function CreateRating({ clickedStar, setClickedStar }) {
    const starStyle = {
        width: '30px',
        height: '30px',
        margin: '0 5px',
        cursor: 'pointer'
    };

    const handleClick = (index) => {
        setClickedStar(index + 1);
    };

    return (
        <div className='dynamic-rating mb-3'>
            <h5>Rating:</h5>
            <div className="stars-container">
                {[...Array(5)].map((_, index) => (
                    <img
                        key={index}
                        src={index < clickedStar ? './images/star.png' : './images/empty-star.png'}
                        alt={index < clickedStar ? 'Filled star' : 'Empty star'}
                        className='star'
                        style={starStyle}
                        onClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default CreateRating;
