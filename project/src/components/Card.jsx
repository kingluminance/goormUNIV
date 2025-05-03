function CardBox({ children, cardTitle }) {
  return (
    <div className="cardCollector">
      <div></div>
      <div className="card">
        <h2>{cardTitle}</h2>
        {children}
      </div>
    </div>
  );
}

export default CardBox;
