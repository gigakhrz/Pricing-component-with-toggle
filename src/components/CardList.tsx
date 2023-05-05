import styled from "styled-components";
import { propsType } from "../type";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
interface props {
  check: boolean;
}
const CardList = ({ check }: props): JSX.Element => {
  const [cardData, setCardData] = useState<propsType[]>([]);
  useEffect(() => {
    const request = async () => {
      const response = await axios.get("/data.json");
      const data = response.data;
      setCardData(data);
    };
    request();
  }, []);

  return (
    <CardsMain>
      {cardData.map((data, index) => (
        <Card
          cardData={cardData}
          index={index}
          key={index}
          data={data}
          check={check}
        />
      ))}
    </CardsMain>
  );
};

export default CardList;

const CardsMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32.5px;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`;
