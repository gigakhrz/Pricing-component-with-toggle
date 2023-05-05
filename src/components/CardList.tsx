import styled from "styled-components";
import { propsType } from "../type";
import { useEffect, useState } from "react";
import axios from "axios";

const CardList = (): JSX.Element => {
  const [cardData, setCardData] = useState<propsType[]>([]);
  useEffect(() => {
    const request = async () => {
      const response = await axios.get("/data,json");
      const data = response.data;
      console.log(data);
    };
    request();
  }, []);
  return <div></div>;
};

export default CardList;
