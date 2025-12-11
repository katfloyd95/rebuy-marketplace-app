import { useMemo } from "react";
import OfferList from "../components/OfferList";
import useOffers from "../hooks/useOffers";
import styled from "styled-components";

export default function Home() {
  const { offers, setOffers } = useOffers();

  const sortedOffers = useMemo(() => {
    return [...offers].sort((a, b) => b.votes - a.votes);
  }, [offers]);

  return (
    <HomeContainer>
      <h1>Offers</h1>
      <OfferList offers={sortedOffers} setOffers={setOffers} />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
    margin: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;



