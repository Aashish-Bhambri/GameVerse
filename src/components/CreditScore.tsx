import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CreditScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge color={color} fontSize={"14px"} paddingX={"4px"}>
      {score}
    </Badge>
  );
};

export default CreditScore;
