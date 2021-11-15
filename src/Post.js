// import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';



function Post() {
    return (
        <div className="post">
       
        {/* Header: avatar + username*/}
        <div className="post_header">
            <Avatar 
                className="post_avatar"
                alt="patelso9"
                src="/static/images/avatar/1.jpg"
            />
            <h3>Username</h3>
        
        </div>
        
        {/* Image */}
            <img 
                className="post_image"
                src="https://png.pngtree.com/element_our/md/20180524/md_5b072d393d61e.jpg"
            />


        {/* Username + Caption */}
            <h4 className="post_text"> <strong>patelso9</strong> Hello world</h4>

        </div>
    )
}

export default Post
