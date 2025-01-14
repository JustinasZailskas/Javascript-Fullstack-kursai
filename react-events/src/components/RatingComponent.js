import { ReactComponent as ActiveStar } from "../images/activeStar.svg";
import { ReactComponent as InactiveStar } from "../images/inactiveStar.svg";

function RatingComponent({ starsRating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < starsRating) {
      stars.push(
        <div key={i} style={{ display: "inline" }}>
          <ActiveStar style={{ width: "20px", height: "20px" }} />
        </div>
      );
    } else {
      stars.push(
        <div key={i} style={{ display: "inline" }}>
          <InactiveStar style={{ width: "20px", height: "20px" }} />
        </div>
      );
    }
  }
  //★
  return <>{stars}</>;
}

export default RatingComponent;
