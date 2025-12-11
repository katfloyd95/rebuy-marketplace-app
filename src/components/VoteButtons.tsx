interface props {
    votes: number;
    onVote: (diff: number) => void;
  }
  
  export default function VoteButtons({ votes, onVote }: props) {
    return (
      <div>
        <button onClick={() => onVote(+1)}>
          ↑
        </button>
        <span>{votes}</span>
        <button onClick={() => onVote(-1)}>
          ↓
        </button>
      </div>
    );
  }