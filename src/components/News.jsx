import React, { useState } from "react";

function News() {
  const goBack = () => {
    window.history.back();
  }
    return (
      <div>
        <h1>News feed</h1>
        <Card /> &nbsp;
        <Card /> &nbsp;
        <Card /> &nbsp;
        <Card /> &nbsp;
        <Card /> &nbsp;
        <Card /> &nbsp;
        <button className="back" onClick={goBack}>Back</button>
      </div>
    );
  }

  function Card() {
    const [show, setShow] = useState(false);

    return (
      <div className="card">
        <h2 className="card__title">the latest news</h2>
        <img className="card__img" src="/assets/news/1.jpg" alt="news"/>
        <div className="card__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dictum turpis in leo blandit, eget bibendum elit suscipit. ...
          <button className="show__more__btn" onClick={() => setShow(!show)}>
            {show === true ? "Show less" : "Show more"}
          </button>
          {show && <p>Maecenas posuere turpis non egestas tempor. Integer rhoncus, tellus nec venenatis finibus, enim
          dolor blandit ex, at tristique est diam eget dui.Nam placerat mi nibh, ac finibus lorem scelerisque pretium. Vestibulum in
          viverra tortor. Sed quis semper metus. Duis efficitur velit necmagna scelerisque convallis.</p>}
        </div>
      </div>
    )
  }
  
  export default News;