import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";



function Quotes() {

  const [quote, setQuote] = useState("");
  const getQuote = () => {
    axios
      .get(
        "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"
      )
      .then((res) => {
        // console.log(res.data)
        setQuote(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <nav className="nav">
        <Link to="about">About</Link>

        <Link to="favorite">Favorite</Link>
      </nav>
      <div id="quote">
        <button id="inspButton" onClick={getQuote}>
          Get Inspired!
        </button>
        {quote ? <p>{quote.quoteText}</p> : null}
        {quote ? <p>{quote.quoteAuthor}</p> : null}
      </div>
    </div>
  );
}

export default Quotes;
