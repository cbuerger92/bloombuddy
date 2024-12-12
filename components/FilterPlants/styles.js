import styled from "styled-components";

export const StyledCheckboxWrapper = styled.div`
  label {
    font-size: 12px;
    padding: 10px 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    background-color: #ffffff;
    color: #000000;
    display: flex;
    align-items: center;
    gap: 5px;
    text-align: center;
    transition: all 0.3s ease;
    margin-right: 5px;
  }

  input {
    opacity: 0;
    position: absolute;
    pointer-events: none;
  }

  input:checked + label {
    background-color: #6d7887;
    color: #ffffff;

    img {
      filter: invert(1);
    }
  }
`;

export const StyledCheckboxSection = styled.section`
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

export const ResetButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
