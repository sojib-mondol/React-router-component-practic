import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {

    const posts = useLoaderData();
    

    return (
        <div>
            <h3>A lot of fb posts are here: </h3>    
            <div className='posts'>
               {
                 posts.map(post => <Post
                    key={post.id}
                    post={post}
                ></Post>) 
               }   
            </div>        
        </div>

    );
};

export default Posts;