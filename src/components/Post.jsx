import React from "react";
import Comment from "./Comment";
import CreateComment from "./CreateComment";

function Post() {
    return (
        <article className="post">
            <div className="user-data">
                <img src="./images/user-1.png" alt="User picture" className="user-pic" />
                <div className="user-info">
                    <h2 className="username">John Doe</h2>
                    <p className="post-date">Posted on 12/02/2022</p>
                </div>
                <span className="option">
                    <i class="fa-solid fa-ellipsis-vertical fa-xl"></i>
                </span>
            </div>
            <div className="post-description">
                <p>Hey guys! i want to share with you my new project</p>
            </div>
            <div className="post-content">
                <img src="./images/post2.png" alt="User 1 Post" />
            </div>
            <div className="post-actions">
                <hr />
                <div className="post-actions">
                    <a href="#"><i className="fa-regular fa-heart fa-xl"></i></a>
                    <a href="#" id="create-comment" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i className="fa-regular fa-comment fa-xl"></i></a>
                    <a href="#"><i className="fa-solid fa-retweet fa-xl"></i></a>
                    <a href="#"><i className="fa-regular fa-bookmark fa-xl"></i></a>

                    {/**MODAL */}
                    <CreateComment />
                </div>
                <hr />
            </div>
            <div className="post-comments">
                <Comment />
            </div>
        </article>
    )
}

export default Post;
