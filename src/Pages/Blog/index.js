import React from 'react';
import BlogPost from '../../Components/BlogPost';

import RESISTANCE from '../../Components/assets/projects/Resistance.png';

const Blog = () => {
    return (
        <>
    <div className="page" id='Blog'>
    <h1 className="title">What I've been up to recently! :)</h1>
    <div className="blog-container">
        <BlogPost
            title="How to make a website"
            image={RESISTANCE}
            date="2020-01-01"
            desc1="test"
            desc2=""
            desc3="" />
    </div>

    </div>
        </>
    );
};

export default Blog;