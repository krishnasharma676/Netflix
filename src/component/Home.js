import "./Home.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiPlay } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";

const apikey = "cf66cbe1f2df46bf6cb433c5d84ec04e";
const url = "https://api.themoviedb.org/3";
const imgurl = "https://image.tmdb.org/t/p/original";
const upcoming = "upcoming";
const popularmovie = "popular";
const topratedmovie = "top_rated";
const nowplayingmovie = "now_playing";
const Card = ({ img }) => {
  return <img className="card" src={img} alt="cover" />;
};

const Row = ({
  title,
  arr = [
    {
      img: "https://image.tmdb.org/t/p/original/AqnvU0lPV3LW1XcjmjkQk3w1PxL.jpg",
    },
  ],
}) => {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        {arr.map((item, index) => (
          <Card key={index} img={`${imgurl}/${item.poster_path}`} />
        ))}
      </div>
    </div>
  );
};

const Home = () => {
  const [upcomingmovie, setupcomingmovie] = useState([]);
  const [nowplaying, setnowplaying] = useState([]);
  const [popular, setpopular] = useState([]);
  const [toprated, settoprated] = useState([]);
  useEffect(() => {
    const fetchupcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apikey}`);
      setupcomingmovie(results);
    };
    const nowplaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowplayingmovie}?api_key=${apikey}`);
      setnowplaying(results);
    };
    const popular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popularmovie}?api_key=${apikey}`);
      setpopular(results);
    };
    const toprated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topratedmovie}?api_key=${apikey}`);
      settoprated(results);
    };
    fetchupcoming();
    nowplaying();
    popular();
    toprated();
  }, []);
  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: popular[0]
            ? `url(${`${imgurl}/${popular[0].poster_path}`})`
            : "rgba",
        }}
      >
        {popular[0] && <h1>{popular[0].original_title}</h1>}
        {popular[0] && <p>{popular[0].overview}</p>}
        <div className="btndiv">
          <button>
            play <BiPlay />
          </button>{" "}
          <button>my list</button>
        </div>
      </div>
      <Row title={"upcoming movies"} arr={upcomingmovie} />
      <Row title={"now playing"} arr={nowplaying} />
      <Row title={"popular"} arr={popular} />
      <Row title={"top rated"} arr={toprated} />
    </section>
  );
};

export default Home;
