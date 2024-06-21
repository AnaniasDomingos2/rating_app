import React from 'react';
import { CommentProvider } from './components/CommentContext';
import Post from './components/Post';
import './App.css'

function App() {
    return (
        <CommentProvider>
            <Post />
        </CommentProvider>
    );
}

export default App;
