import styled from "styled-components";

interface CheclBoxtype {
  check: boolean;
  setCheck: (check: boolean) => void;
}

const CheckBox = ({ check, setCheck }: CheclBoxtype): JSX.Element => {
  const changeInput = () => {
    setCheck(!check);
  };
  return (
    <CheckBoxContainer>
      <h2>Our Pricing</h2>
      <div>
        <h5>Annualy</h5>
        <label>
          <input type="checkbox" onChange={changeInput} checked={check} />
          <span></span>
        </label>
        <h5>Monthly</h5>
      </div>
    </CheckBoxContainer>
  );
};

export default CheckBox;

const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 44px;

  h2 {
    font-size: 32px;
    line-height: 39px;
    color: #6e728e;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  h5 {
    font-size: 15px;
    line-height: 28px;
    color: #6e728e;
    mix-blend-mode: normal;
    opacity: 0.5;
  }

  label {
    width: 56px;
    height: 32px;
    appearance: none;
    outline: none;
    background: linear-gradient(135deg, #a2a7f0 0%, #696edd 100%);
    border-radius: 16px;
    position: relative;
    :hover {
      opacity: 0.5;
    }

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    span {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, #a2a7f0 0%, #696edd 100%);
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 16px;
    }

    span:before {
      position: absolute;
      content: "";
      height: 24px;
      width: 24px;
      left: 6px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }

    input:checked + span:before {
      -webkit-transform: translateX(20px);
      -ms-transform: translateX(20px);
      transform: translateX(20px);
      background-color: #ffffff;
    }
  }
`;
