import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import { SearchContext } from "../../context/SearchContext";
import { WishlistContext } from "../../context/WishlistContext";
const ServicesCards = () => {
  const { handleSearch } = useContext(SearchContext);
  const { handleWishlist } = useContext(WishlistContext);
  const [sortproperty, setSortproperty] = useState(null);
  const { search } = useContext(SearchContext);
  const [data, setData] = useState([]);
  async function GetFetch() {
    try {
      fetch("http://localhost:3100/services")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetFetch();
  }, []);
  async function deleteItem(id) {
    await fetch("http://localhost:3100/services/" + id, { method: "DELETE" });
    await GetFetch();
  }
  return (
    <>
      <div>
        <input type="text" onChange={(e) => handleSearch(e)} />
        <button
          onClick={() => setSortproperty({ property: "title", asc: true })}
        >
          A-Z
        </button>
        <button
          onClick={() => setSortproperty({ property: "title", asc: false })}
        >
          Z-A
        </button>
        <button onClick={() => setSortproperty(null)}>default</button>
      </div>
      <div className="services_cards">
        {data &&
          data
            .filter((x) => x.title.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => {
              if (sortproperty && sortproperty.asc) {
                return a[sortproperty.property].toLowerCase() > b[sortproperty.property].toLowerCase()
                  ? 1
                  : b[sortproperty.property].toLowerCase() > a[sortproperty.property].toLowerCase()
                  ? -1
                  : 0;
              } else if (sortproperty && sortproperty.asc === false) {
                return a[sortproperty.property].toLowerCase() < b[sortproperty.property].toLowerCase()
                  ? 1
                  : b[sortproperty.property].toLowerCase() < a[sortproperty.property].toLowerCase()
                  ? -1
                  : 0;
              } else {
                return 0;
              }
            })
            .map((x) => (
              <div className="services_card">
                <div className="card_icon">
                  <i className={x.icon}></i>
                </div>
                <div className="card_text">
                  <h4>{x.title}</h4>
                  <p>{x.text}</p>
                </div>
                <button onClick={() => deleteItem(x._id)}>delete</button>
                <button onClick={() => handleWishlist(x)}>addwishlist</button>
              </div>
            ))}
      </div>
    </>
  );
};

export default ServicesCards;
