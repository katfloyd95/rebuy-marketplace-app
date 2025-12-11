import type { Offer } from "../data/offers";
import { Link } from "react-router-dom";
import VoteButtons from "./VoteButtons";

interface offerProps {
  offer: Offer;
  setOffers: React.Dispatch<React.SetStateAction<Offer[]>>;
}

export default function OfferCard({ offer, setOffers }: offerProps) {

  return (
    <div>
      <img src={offer.imageSrc} />
      <h4>{offer.title}</h4>
      <p>{offer.price}€</p>
      <VoteButtons votes={offer.votes} onVote={setOffers} />
      <Link to={`/offer/${offer.id}`}>
        <button className="button">View Details</button>
      </Link>
      <button className="button">Buy on rebuy</button>
    </div>
  );
}
