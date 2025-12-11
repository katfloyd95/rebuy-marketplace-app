import type { Offer } from "../data/offers";
import { Link } from "react-router-dom";
import VoteButtons from "./VoteButtons";
import styled from "styled-components";

interface offerProps {
  offer: Offer;
  setOffers: React.Dispatch<React.SetStateAction<Offer[]>>;
}

export default function OfferCard({ offer, setOffers }: offerProps) {
    const handleVote = function (diff: number) {
        setOffers((currentOfferList) =>
          currentOfferList.map((o) =>
            o.id === offer.id ? { ...o, votes: o.votes + diff } : o
          )
        );
      };

  return (
    <OfferCardContainer>
      <img src={offer.imageSrc} />
      <h4>{offer.title}</h4>
      <p>{offer.price}€</p>
      <VoteButtons votes={offer.votes} onVote={handleVote} />
      <DetailsLink to={`/offer/${offer.id}`}>
        <StyledButton>View Details</StyledButton>
      </DetailsLink>
      <a href={offer?.purchaseUrl}>
        <StyledButton>Buy on rebuy</StyledButton>
      </a>
    </OfferCardContainer>
  );
}

const OfferCardContainer = styled.div`
    width: 250px;
    border: grey 1px solid;
    padding: 10px;
    background-color: white;
    border-radius: 3%;

    h4,
    p {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }

    img {
        height: 200px;
        width: 250px;
    }
`;

const DetailsLink = styled(Link)`
    text-decoration: none;
`;

const StyledButton = styled.button`
    margin-top: 0.5rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    border-width: 1px;
    border-color: transparent;
    border-style: solid;
    border-radius: 0.375rem;

    background-color: #005461; 
    color: #f4f4f4;

    padding-left: 2rem; 
    padding-right: 2rem;
    padding-top: 0.75rem; 
    padding-bottom: 0.75rem;

    font-size: 1rem; 
    font-weight: 500; 

    outline: none; 

    &:hover {
        background-color: #018790; 
    }

    &:focus {
        box-shadow: 0 0 0 2px white, 0 0 0 4px #6366f1; 
    }
`
