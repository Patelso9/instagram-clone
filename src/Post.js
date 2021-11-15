// import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';



function Post({ username, caption, imageUrl }) {
    return (
        <div className="post">
       
        {/* Header: avatar + username*/}
        <div className="post_header">
            <Avatar 
                className="post_avatar"
                alt="patelso9"
                src="/static/images/avatar/1.jpg"
            />
            <h3>{username}</h3>
        
        </div>
        
        {/* Image */}
            <img 
                className="post_image"
                src={imageUrl}
            />


        {/* Username + Caption */}
            <h4 className="post_text"> <strong>{username}</strong> {caption} </h4>

        </div>
    )
}

export default Post
