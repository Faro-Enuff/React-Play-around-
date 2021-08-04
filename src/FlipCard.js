import FlipCardBack from "./FlipCardBack";
import FlipCardFront from "./FlipCardFront";

const FlipCard = ({ chars }) => {
  return (
    <div className="chars-list">
      {chars.map((char) => (
        <div className="flip-card" key={char.id}>
          <div className="flip-card-inner">
            <FlipCardFront char={char} />
            <FlipCardBack char={char} />
          </div>
        </div>
      ))}
      <span className="stretch"></span>
    </div>
  );
};

export default FlipCard;
