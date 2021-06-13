import React from 'react';
import './singlepost.css';

function SinglePost() {
    return (
        <div className="singlepost">
            <div className="singlePostWrapper">
             <img 
              className="singlePostImg"
               src="https://images.pexels.com/photos/225284/pexels-photo-225284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=500" 
                alt="" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet. 
                    <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon fas fa-trash"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Safak</b> </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem, ipsum dolor sit amet  consectetur adipisicing elit. Quas deleniti ea vitae numquam quaerat deserunt, reiciendis error at impedit quia natus ratione dicta, non id fugit rem, pariatur sed eveniet.
                    Nisi ad at modi voluptatem! Minima laboriosam exercitationem minus deserunt eveniet voluptatem dolores ullam, mollitia dolor rerum dolore perferendis! Ipsum sint ipsa velit. Ratione ab itaque velit quia, accusamus vero.
                    Reprehenderit iste quisquam saepe dignissimos itaque similique, beatae veniam, tempora placeat, inventore libero consequatur repudiandae enim cupiditate adipisci molestias vitae autem ratione accusamus atque. Voluptas reprehenderit voluptate sequi veritatis consequatur!
                    Assumenda, iusto at similique dignissimos tempora eaque voluptatibus reiciendis. Optio vero similique iure soluta quibusdam minima deserunt dignissimos, facilis voluptates ut veniam aliquid delectus quo ab at. Tenetur, cupiditate consectetur.
                    Maiores dolore sequi amet possimus cumque similique sit quae, provident quia necessitatibus, itaque voluptatem excepturi ipsam. Voluptas, voluptates nesciunt nemo reprehenderit a porro officia debitis animi veritatis quaerat, doloremque minima!
                </p>
            </div>
        </div>
    )
}

export default SinglePost
