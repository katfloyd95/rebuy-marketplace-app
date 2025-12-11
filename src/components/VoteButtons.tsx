interface props {
    votes: number;
    onVote: (diff: number) => void;
  }
  
  export default function VoteButtons({ votes, onVote }: props) {
    return (
      <div>
        <button>
          ↑
        </button>
        <span>{votes}</span>
        <button>
          ↓
        </button>
      </div>
    );
  }