import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function Home() {
  const [title, setTitle] = useState("");
  const [Data, setData] = useState([]);
  const [Moredata, setMoredata] = useState("");
  const [rating, setrating] = useState("0/10");
  const [actors, setactors] = useState("");
  const [genre, setgenre] = useState("");
  const [lang, setlang] = useState("");

  useEffect(() => {
    // Check if title is empty or not found, and set it to undefined in that case
    let searchTitle = title.trim(); // Remove leading/trailing spaces

    if (searchTitle === "" || Data === null) {
      searchTitle = undefined;
    }

    const apiUrl = `https://www.omdbapi.com/?apikey=d45cea8e&s=${searchTitle}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setData(response.data.Search);
       
      })
      .catch((error) => {
      
      });
  }, [title]);

  useEffect(() => {
    const apiUrl = `http://www.omdbapi.com/?t=${title}&apikey=d45cea8e`;

    axios
      .get(apiUrl)
      .then((response) => {
        setMoredata(response.data);
        setactors(response.data.Actors);
        setgenre(response.data.Genre);
        setgenre(response.data.Genre);
        setlang(response.data.Language);

        setrating(response.data.Ratings[0].Value);
      })
      .catch((error) => {
    
      });
  }, [title]);

  return (
    <>
      <h1 className="searchbar">
        <input
          type="text"
          placeholder="searchbar"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </h1>
      <div className="desbox">
        <h1 className="maintitle">{title == "" ? "Movie" : title}</h1>
        <div className="des">
          <h1>Characters:{actors}</h1>
          <h1>Genre:{genre}</h1>
          <h1>
            Rating:
            {rating}
          </h1>
          <h1>
            Language:{lang}
            {rating}
          </h1>
        </div>
      </div>
      <div className="parentcont">
        {Data &&
          Data.map((movie, index) => (
            <div className="maincont" key={index}>
              <div className="title"><h1 key={index}>Movie:{movie.Title}</h1></div>
              <img
                className="imgcont"
                src={
                  movie.Poster !== "N/A"
                    ? movie.Poster
                    : "https://www.csaff.org/wp-content/uploads/csaff-no-poster.jpg"
                }
              />
            </div>
          ))}
      </div>
    </>
  );
}

export default Home;
