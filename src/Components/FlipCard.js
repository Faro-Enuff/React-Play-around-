import FlipCardBack from "../Viewer/FlipCardBack";
import FlipCardFront from "./FlipCardFront";

const FlipCard = ({ chars, searchTerm }) => {
  return (
    <div className="chars-list">
      {chars
        .filter((char) => {
          if (searchTerm === "") {
            return char;
          } else if (
            char.name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return char;
          }
        })
        .map((char) => (
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
