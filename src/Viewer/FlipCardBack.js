import OwnModal from "../Components/OwnModal";

const FlipCardBack = ({ char }) => {
  return (
    <div className="flip-card-back">
      <h1>{char.name}</h1>
      <OwnModal char={char} />
    </div>
  );
};

export default FlipCardBack;
