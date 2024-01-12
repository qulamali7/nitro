import React, { useContext } from "react";
import "./index.scss";
import { WishlistContext } from "../../context/WishlistContext";
const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);
  return (
    <>
      {wishlist.map((x) => (
        <div className="services_card">
          <div className="card_icon">
            <i className={x.icon}></i>
          </div>
          <div className="card_text">
            <h4>{x.title}</h4>
            <p>{x.text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Wishlist;
