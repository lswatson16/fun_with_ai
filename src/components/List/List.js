import React from "react";
import Card from "../Card/Card";
import './List.css';

const List = ({ texts}) => {
  const promptCards = texts.map((text, index) => {
    return(
      <Card
        key={index}
        text={text}
      />
    )
  })

  return(
    <div className="list">
      {promptCards}
    </div>
  )
}

export default List;