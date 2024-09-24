import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom"
const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmFjY2E3ZjFiMDg0Mjc0MWI5ODk2ZDA1OTllNzljMiIsIm5iZiI6MTcyNzE0Mjc5Ni4xMTM1NTUsInN1YiI6IjYzZDhlMDg0YzE1YjU1MDBmMGI4ODEzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8luY7l32wuSRNbdB_0yi-oDZpte0H3udn6oKJPvmtmw",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response.results[0]))
      .catch((err) => console.error(err));
  });
  return (
    <div className="player">
      <img onClick={()=>navigate("/")} src={back_arrow_icon} alt="Back" />
      <iframe
        width="90%"
        height="90%"
        title="trailer"
        src={`https://www.youtube.com/embed/${data.key}`}
        frameBorder="0"
        allowFullScreen
      />
      <div className="player-info">
        <p>{data.published_at.slice(0,10)}</p>
        <p>{data.name}</p>
        <p>{data.type}</p>
      </div>
    </div>
  );
};

export default Player;
