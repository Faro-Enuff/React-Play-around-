const FlipCardFront = ({ char }) => {
  return (
    <div className="flip-card-front">
      <img src={char.image} alt="avatar" className="avatar" />
    </div>
  );
};

export default FlipCardFront;
