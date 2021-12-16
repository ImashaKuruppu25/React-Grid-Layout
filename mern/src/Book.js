import React from 'react'

const Book = (props) => {
  const { img, title, aut, children } = props;
  const btnhandler = (e) => {
    // console.log(e);
    // console.log(e.target);
    alert("Hellow");
  };
  const complexhandler = () => {
    alert(title);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{aut}</h4>
      <button type="button" onClick={btnhandler}>
        Click Me
      </button>
      <button
        type="button"
        onClick={() => {
          complexhandler(title);
        }}
      >
        Click Me more
      </button>
      {children}
    </article>
  );
};

export default Book
