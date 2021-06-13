import React from 'react';
import './post.css';

function Post() {
    return (
        <div className="post">
            <img
              className="postImg" 
                src="https://images.pexels.com/photos/6926470/pexels-photo-6926470.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
             <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat et, in cupiditate modi maxime atque nostrum, facere expedita rem pariatur enim? Eveniet, aliquam impedit officia dolorum eius ea cumque suscipit!
             Nobis fugiat, natus eos ab tenetur sunt veritatis, ratione adipisci cupiditate eligendi iusto corrupti sint delectus saepe molestias at, sapiente eum perferendis ipsam a ut itaque. Reprehenderit laboriosam hic ipsa?
             Id excepturi sint magnam pariatur in eligendi porro perspiciatis repellat voluptates aut impedit possimus, amet quas ratione quaerat? Eveniet eaque debitis placeat consequatur odit, quidem perferendis deleniti accusantium optio voluptates.
             Nesciunt dolorum, hic in ipsam maiores quia esse beatae itaque numquam accusamus placeat veritatis tempore, earum ducimus magni porro. Consequatur vero pariatur corrupti voluptas deserunt error quidem molestiae non nostrum?
             Excepturi impedit, soluta rerum molestias minima iure assumenda quos suscipit libero mollitia molestiae aut, sapiente, temporibus repellendus quam iusto tempora quidem adipisci fuga cumque! Modi cumque placeat molestias saepe doloribus!
             </p>
        </div>
    )
}

export default Post
