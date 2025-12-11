import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { offersData } from "../data/offers";
import styled from "styled-components";

export default function Details() {
  const { id } = useParams<{ id: string }>();
  const offerId = Number(id);
  const offer = offersData.find((offer) => offer.id === offerId);

  if (!offer) {
    return (
      <div>
        <p>Offer Not Found</p>
      </div>
    );
  }

  return (
    <DetailsContainer>
      <div role="image-wrapper">
        <StyledImage src={offer.imageSrc} />
      </div>
      <InfoContainer>
        <DetailsWrapper>
          <h2>{offer?.title}</h2>
          <p>{offer?.description}</p>
        </DetailsWrapper>
        <PurchaseContainer>
          <p>{offer?.price}€</p>
          <a href={offer?.purchaseUrl}>
            <StyledButton>Buy on rebuy</StyledButton>
          </a>
          <div>
            <Link to="/">
              <StyledButton>Back</StyledButton>
            </Link>
          </div>
        </PurchaseContainer>
      </InfoContainer>
    </DetailsContainer>
  );
}

const DetailsContainer = styled.div`
    margin-left: auto; 
    margin-right: auto; 
    margin-top: 1.5rem; 
    max-width: 42rem; 
    padding-left: 15px;
    padding-right: 15px;

    @media (min-width: 640px) {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    @media (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        max-width: 50rem; 
        padding-left: 2rem; 
        padding-right: 2rem;
    }
`;

const StyledImage = styled.img`
    width: 100%;

    @media (min-width: 1024px) {
        max-height: 500px;
    }
`;

const InfoContainer = styled.div`
    @media (min-width: 1024px) {
        display: flex;
        justify-content: space-between;
    }
`;

const DetailsWrapper = styled.div`
    @media (min-width: 1024px) {
        padding-right: 10px;
    }
`;

const PurchaseContainer = styled.div`
    @media (min-width: 1024px) {
        border-left: 1px solid lightgray;
        padding: 10px;
        min-width: 200px;
        padding-left: 20px;
    }
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
`;