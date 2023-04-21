import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from "../.../../../../assets/products/earbuds-prod-1.webp";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Search = ({ setShowSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    searchResultFunc(query);
  }, [query]);

  const onTextChange = (e) => {
    setQuery(e.target.value);
  };

  const searchResultFunc = (query) => {
    if (!query.length) {
      setData(null);
      return;
    }
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: process.env.REACT_APP_SERVER_URL+`api/search_results?text=${query}`,
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="search-modal">
      <div className="form-field">
        <input
          type="text"
          autoFocus
          placeholder="Search for Products"
          className="text"
          value={query}
          onChange={onTextChange}
        />
        <MdClose onClick={() => setShowSearch(false)} />
      </div>

      <div className="search-result-content">
        <div className="search-results">
          {data?.map((item) => {
            return (
              <div
                key={item.Id}
                className="search-result-item"
                onClick={() => {
                  navigate("/products/" + item.Id);
                  setShowSearch(false);
                }}
              >
                <div className="img-container">
                  <img src={prod} alt="" />
                </div>
                <div className="prod-details">
                  <span className="name">{item?.Title}</span>
                  <span className="desc">{item?.Description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Search;
