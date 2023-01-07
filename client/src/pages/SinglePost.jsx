import React from "react";
import { Link } from "react-router-dom";

import Menu from "../components/Menu";

import EditIcon from "../imgs/edit-icon.png";
import DeleteIcon from "../imgs/delete-icon.png";

const SinglePost = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/14816042/pexels-photo-14816042.jpeg"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div className="info">
            <span>Johanna</span>
            <p>Postado à 2 dias atrás</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={EditIcon} alt="edit-icon" />
            </Link>
            <img src={DeleteIcon} alt="delete-icon" />
          </div>
        </div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          quos ducimus vero quaerat, voluptatum odit dolorem alias ipsum
          molestiae, dignissimos amet aut accusamus ullam deleniti. Quia magni
          at illo sed.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default SinglePost;
