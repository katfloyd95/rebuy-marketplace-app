import styled from "styled-components";

interface props {
    votes: number;
    onVote: (diff: number) => void;
  }
  
  export default function VoteButtons({ votes, onVote }: props) {
    return (
      <VoteButtonContainer>
        <StyledVoteButton onClick={() => onVote(+1)}>
          ↑
        </StyledVoteButton>
        <VoteNumber>{votes}</VoteNumber>
        <StyledVoteButton onClick={() => onVote(-1)}>
          ↓
        </StyledVoteButton>
      </VoteButtonContainer>
    );
  }

  const VoteButtonContainer = styled.div`
    display: flex;
    align-items: center;
  `;

  const StyledVoteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #018790;
    border: none;
    padding: 5px 10px;
    color: #f4f4f4;
    font-weight: 500;
    border-radius: 15%;

    &:hover {
        background-color: #00b7b5;
    }
  `;

  const VoteNumber = styled.span`
    margin: 0 3px;
  `;

