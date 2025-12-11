import type { Offer } from "../data/offers";
import OfferCard from "./OfferCard";

interface offerProps {
  offers: Offer[];
  setOffers: React.Dispatch<React.SetStateAction<Offer[]>>;
}

export default function OfferList({ offers, setOffers }: offerProps) {
  return (
    <div>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} setOffers={setOffers} />
      ))}
    </div>
  );
}