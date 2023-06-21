import SwapiService from "../../services/swapiService";
import Card from "../Card/Card";

import "./List.css";

import React, { useEffect, useState } from "react";

const List = () => {
  let swapi = new SwapiService();
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    swapi.getAllPeople().then((res) => {
      setPeoples(res);
    });
  }, []);

  return (
    <section className="list">
      <div className="list__controls">
        <div className="list__page-name">People</div>
        <div className="list__pagination">
          <button className="list__btn">1</button>
          <button className="list__btn">2</button>
          <button className="list__btn">3</button>
          <button className="list__btn">4</button>
          <button className="list__btn">5</button>
        </div>
      </div>

      <div className="list__items">
        {peoples.length === 0 ? (
          <div className="load__wrapper">
            <span className="load"></span>
          </div>
        ) : (
          peoples.map((people, index) => {
            {
              return <Card name={people.name} key={index} id={index + 1} />;
            }
          })
        )}
      </div>
    </section>
  );
};

export default List;
