import React, { useState, useRef, useContext } from "react";
import CreateRating from "./CreateRating";
import CommentContext from './CommentContext';
import Swal from 'sweetalert2';


function CreateComment() {
    const { commentList, setCommentList } = useContext(CommentContext);
    const [clickedStar, setClickedStar] = useState(0);
    const [userName, setUserName] = useState('');
    const [userComment, setUserComment] = useState('');
    const [userGender, setUserGender] = useState('');
    const [src, setSrc] = useState('')
    
    const idComment = useRef(0);

    function createComment() {
        const eventoClique = new Event('click');
        if (userGender === 'female') {
            setSrc('./images/user-3.png')
        } else{
            setSrc('./images/user-2.png')
        }

        const newComment = {
            id: idComment.current,
            userName: userName,
            userComment: userComment,
            userPhoto: src,
            rating: clickedStar,
        };
        setCommentList(old => [...old, newComment]);
        document.getElementById('btn-close').dispatchEvent(eventoClique);
        idComment.current++;
        setUserName('');
        setUserComment('');
        setUserGender('');
        setClickedStar(0);
        Swal.fire({
            icon: 'success',
            title: 'Comment created!',
            showConfirmButton: false,
            timer: 2000
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createComment();
    };

    return (
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create a comment</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form name="form-comment" id="form-comment" onSubmit={handleSubmit}>
                            <div className="row g-2 mb-3">
                                <div className="col-md">
                                    <div className="form-floating">
                                        <input required value={userName} onChange={(e) => setUserName(e.target.value)} type="text" className="form-control" id="comment-userName" placeholder="John Doe" />
                                        <label htmlFor="comment-userName">Name</label>
                                    </div>
                                </div>
                                <div className="col-md">
                                    <div className="form-floating">
                                        <select required value={userGender} onChange={(e) => setUserGender(e.target.value)} className="form-select" id="floatingSelectGrid">
                                            <option value="">Select a gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                        <label htmlFor="floatingSelectGrid">Gender</label>
                                    </div>
                                </div>
                            </div>
                            <CreateRating clickedStar={clickedStar} setClickedStar={setClickedStar} />
                            <div className="form-floating mb-3">
                                <textarea required value={userComment} onChange={(e) => setUserComment(e.target.value)} className="form-control" placeholder="Leave a comment here" id="content-comment" style={{ height: '100px' }} maxLength={250}></textarea>
                                <label htmlFor="content-comment">Write a comment...</label>
                            </div>
                            <button type="submit" className="btn btn-primary" id="put-comment">Submit</button>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button id="btn-close" type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateComment;
