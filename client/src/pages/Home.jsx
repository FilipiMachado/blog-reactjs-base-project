import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "His mother had always taught him",
      desc: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      img: "https://picsum.photos/600",
    },
    {
      id: 2,
      title: "His mother had always taught him",
      desc: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      img: "https://picsum.photos/600",
    },
    {
      id: 3,
      title: "His mother had always taught him",
      desc: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      img: "https://picsum.photos/600",
    },
    {
      id: 4,
      title: "His mother had always taught him",
      desc: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      img: "https://picsum.photos/600",
    },
    {
      id: 5,
      title: "His mother had always taught him",
      desc: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      img: "https://picsum.photos/600",
    },
    {
      id: 6,
      title: "His mother had always taught him",
      desc: "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      img: "https://picsum.photos/600",
    },
  ];

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img-container">
              <img src={post.img} alt="post-image" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Leia Mais</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
