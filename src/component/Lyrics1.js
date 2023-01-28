import React, { useState, useEffect } from "react";
import { getLyrics } from "genius-lyrics-api";
import { config } from "../config/config";
import ReactMarkdown from "react-markdown";
import { ClipLoader } from "react-spinners";

const Lyrics1 = () => {
    const [lyrics, setLyrics] = useState("");
    const [lyricsLoaded, setLyricsLoaded] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        const lyrics = await getLyrics(config);
        setLyrics(lyrics);
        setLyricsLoaded(true);
      };
      fetchData();
    }, []);
  
    return (
      <div>
        {lyricsLoaded ? (
          <div className="lyrics">
            <br></br>
            <h2 style={{ textAlign: "center" }}>Lyrics</h2>
            <br></br>
            <ReactMarkdown>{lyrics}</ReactMarkdown>
            <br></br>
          </div>
        ) : (
            <div style={{ textAlign: "center" }}>
            <ClipLoader size={50} color={"#000000"} loading={!lyricsLoaded} />
          </div>
        )}
      </div>
    );
  };

export default Lyrics1;
