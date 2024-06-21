import React from "react";

function RenderRating(props) {
    const starStyle = {
        width: '30px',
        height: '30px',
        margin: '0 5px',
        cursor: 'pointer'
    };
    let imgs = []
        for (let i = 0; i < 5; i++) {
            if (i < props.stars) {
                imgs.push(<img src='./images/star.png' alt="star" key={i} style={starStyle}/>)
            }
            else {
                imgs.push(<img src='./images/empty-star.png' alt="star-empty" key={i} style={starStyle} />)
            }
        }
    return (
        <>
            {imgs}
        </>
    )
}

export default RenderRating