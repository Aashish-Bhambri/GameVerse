interface Props {
  score: number;
}

const CreditScore = ({ score }: Props) => {
  let colorClass = "text-gray-400 bg-gray-400/10 border border-gray-400/20";
  if (score > 75) {
    colorClass = "text-green-400 bg-green-400/10 border border-green-400/20";
  } else if (score > 60) {
    colorClass = "text-yellow-400 bg-yellow-400/10 border border-yellow-400/20";
  }

  return (
    <span className={`px-2 py-0.5 text-sm font-bold rounded ${colorClass}`}>
      {score}
    </span>
  );
};

export default CreditScore;
