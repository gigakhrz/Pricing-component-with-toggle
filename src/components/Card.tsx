import styled from "styled-components";
import { propsType } from "../type";
interface CardPropsType {
  cardData: propsType[];
  index: number;
  data?: {};
}

const Card = ({ cardData, index }: CardPropsType): JSX.Element => {
  return (
    <CardContainer bg={cardData[index].bgcolor}>
      <div className="header">
        <h4>{cardData[index].level}</h4>
        <h1>{cardData[index].price}</h1>
      </div>

      <div className="benefits">
        <hr />
        <h5>{cardData[index].storage}</h5>
        <hr />
        <h5>{cardData[index].user}</h5>
        <hr />
        <h5>{cardData[index].sendsize}</h5>
        <hr />
      </div>

      <button>learn more</button>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div<{ bg: string }>`
  width: 327px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.bg};
  box-shadow: 0px 20px 40px rgba(212, 210, 244, 0.5);
  border-radius: 10px;
  padding: 31px 29px;
  gap: 32px;
  @media (min-width: 1024px) {
    width: 350px;
    padding: ${(props) => (props.bg !== "#ffffff" ? "54.45px 31px" : "31px")};
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;

    h4 {
      font-size: 18px;
      line-height: 28px;
      color: ${(props) => (props.bg === "#ffffff" ? " #6e728e" : "white")};
    }

    h1 {
      font-size: 72px;
      line-height: 71px;
      letter-spacing: -2.16px;
      color: ${(props) => (props.bg === "#ffffff" ? " #4a4d60" : "white")};
    }
  }

  .benefits {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;

    hr {
      border: none;
      width: 100%;
      height: 1px;
      background-color: #6e728e;
    }

    h5 {
      color: ${(props) => (props.bg === "#ffffff" ? " #6e728e" : "white")};
      font-size: 15px;
      line-height: 28px;
    }
  }

  button {
    border: none;
    width: 100%;
    height: 44px;
    color: ${(props) => (props.bg === "#ffffff" ? "white" : "#6D72DE")};
    background: ${(props) =>
      props.bg === "#ffffff"
        ? "linear-gradient(135deg, #A2A7F0 0.06%, #696EDD 100.06%)"
        : "white"};
    border-radius: 6px;

    font-family: Montserrat;
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 1.393px;
    cursor: pointer;

    text-transform: uppercase;
    :hover {
      background: ${(props) =>
        props.bg === "#ffffff"
          ? "white"
          : "linear-gradient(135deg, #A2A7F0 0.06%, #696EDD 100.06%)"};

      color: ${(props) => (props.bg === "#ffffff" ? "#6D72DE" : "white")};
      border: ${(props) =>
        props.bg === "#ffffff" ? "1px solid #6D72DE" : "1px solid #fff"};
    }
  }
`;
