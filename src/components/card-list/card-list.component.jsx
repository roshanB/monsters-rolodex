import React from "react";
import Card from "../card/card.component";

import "./card-list.component.css";

const CardList = (props) => {
  return (
    <div className="card-list">
      {
        /* Tried_my_solution
      props.monsters
        .filter(
          (m) => m.name.toLowerCase().indexOf(props.term.toLowerCase()) > -1
        )
        .map((m) => (
          <Card key={m.id} monster={m}></Card>
        ))*/
        // Tried_authors_solution
        props.monsters.map((m) => (
          <Card key={m.id} monster={m}></Card>
        ))
      }
    </div>
  );
};

export default CardList;
