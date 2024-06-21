import React, { createContext, useState } from 'react';

// Crie o contexto
const CommentContext = createContext();

// Provedor do contexto
export function CommentProvider({ children }) {
    const newComment = {
        id: 1000,
        userName: 'matsamatsama',
        userComment: 'Wow, amazing!!',
        userPhoto: './images/user-1.png',
        rating: 4,
    };
    const [commentList, setCommentList] = useState([newComment]);
    
    return (
        <CommentContext.Provider value={{ commentList, setCommentList }}>
            {children}
        </CommentContext.Provider>
    );
}

export default CommentContext;
