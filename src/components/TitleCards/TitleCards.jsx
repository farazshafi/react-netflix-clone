import { Link } from "react-router-dom";
import "./TitleCards.css";
import { useRef, useEffect, useState } from "react";
const TitleCards = ({ title,category }) => {
  const cardsRef = useRef();
  const [data,setData] = useState([])

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmFjY2E3ZjFiMDg0Mjc0MWI5ODk2ZDA1OTllNzljMiIsIm5iZiI6MTcyNzE0Mjc5Ni4xMTM1NTUsInN1YiI6IjYzZDhlMDg0YzE1YjU1MDBmMGI4ODEzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8luY7l32wuSRNbdB_0yi-oDZpte0H3udn6oKJPvmtmw",
    },
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  });
  return (
    <div className="titleCards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {data.map((item, i) => {
          return (
            <Link to={`/player/${item.id}`} className="card" key={i}>
              <img src={`https://image.tmdb.org/t/p/w500`+item.backdrop_path} alt="" />
              <p>{item.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
