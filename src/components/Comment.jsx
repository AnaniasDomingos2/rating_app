import React, { useContext } from "react";
import CommentContext from './CommentContext';
import RenderRating from "./RenderRating";

function Comment() {
    const { commentList } = useContext(CommentContext);

    return (
        <div>
            <h3>Comments</h3>
            {commentList.length === 0 ? (
                <p>No comments yet</p>
            ) : (
                <>
                    {commentList.map(comment => (
                        <div key={comment.id} className="comment-container">
                            <div className="userComment-data">
                                <img src={comment.userPhoto} alt="" className="userComment-picture"/>
                                <p className="userComment-name">{comment.userName}</p>
                                <div className="user-rating">
                                    <RenderRating stars={comment.rating} />
                                </div>
                            </div>
                            <p className="comment-content">"{comment.userComment}"</p>
                        </div>
                    ))}
                </>

            )}
        </div>
    );
}

export default Comment;
