import styled from "styled-components";

const Card = (): JSX.Element => {
  return (
    <CardContainer>
      <div className="header">
        <h4>Basic</h4>
        <h1>19.99$</h1>
      </div>

      <div className="benefits">
        <hr />
        <h5>500Gb internet</h5>
        <hr />
        <h5>ragaca</h5>
        <hr />
        <h5>ragaacaaa</h5>
        <hr />
      </div>

      <button>learn more</button>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 327px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 20px 40px rgba(212, 210, 244, 0.5);
  border-radius: 10px;
  padding: 31px 29px;
  gap: 32px;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;

    h4 {
      font-size: 18px;
      line-height: 28px;
      color: #6e728e;
    }

    h1 {
      font-size: 72px;
      line-height: 71px;
      letter-spacing: -2.16px;
      color: #4a4d60;
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
      color: #6e728e;
      font-size: 15px;
      line-height: 28px;
    }
  }

  button {
    border: none;
    width: 100%;
    height: 44px;
    background: linear-gradient(135deg, #a2a7f0 0%, #696edd 100%);
    border-radius: 6px;

    font-family: Montserrat;
    font-size: 13px;
    font-weight: 700;
    line-height: 16px;
    letter-spacing: 1.393px;
    color: white;
    text-transform: uppercase;
  }
`;
