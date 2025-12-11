import type { Offer } from "../data/offers";
import OfferCard from "./OfferCard";
import styled from "styled-components";

interface offerProps {
  offers: Offer[];
  setOffers: React.Dispatch<React.SetStateAction<Offer[]>>;
}

export default function OfferList({ offers, setOffers }: offerProps) {
  return (
    <OfferListContainer>
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} setOffers={setOffers} />
      ))}
    </OfferListContainer>
  );
}

const OfferListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    column-gap: 1.5rem; 
    row-gap: 2.5rem;

    @media (min-width: 640px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (min-width: 1280px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 2rem;
    }
`;