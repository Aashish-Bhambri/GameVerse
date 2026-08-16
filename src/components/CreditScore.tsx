interface Props {
  score: number;
}

const CreditScore = ({ score }: Props) => {
  let colorClass = "text-[#fc4b37] bg-[#fc4b37]/10 border-[#fc4b37]/30"; // < 50
  if (score >= 75) {
    colorClass = "text-[#6dc849] bg-[#6dc849]/10 border-[#6dc849]/30"; // 75+
  } else if (score >= 50) {
    colorClass = "text-[#fdca52] bg-[#fdca52]/10 border-[#fdca52]/30"; // 50-74
  }

  return (
    <span
      className={`px-2 py-0.5 text-xs font-bold rounded-md border tracking-wide transition-colors ${colorClass}`}
      title={`Metacritic score: ${score}/100`}
      aria-label={`Metacritic score: ${score} out of 100`}
    >
      {score}
    </span>
  );
};

export default CreditScore;
