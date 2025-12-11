import { useMemo } from "react";
import OfferList from "../components/OfferList";
import useOffers from "../hooks/useOffers";

export default function Home() {
  const { offers, setOffers } = useOffers();

  const sortedOffers = useMemo(() => {
    return [...offers].sort((a, b) => b.votes - a.votes);
  }, [offers]);

  return (
    <div>
      <h1>Offers</h1>
      <OfferList offers={sortedOffers} setOffers={setOffers} />
    </div>
  );
}



