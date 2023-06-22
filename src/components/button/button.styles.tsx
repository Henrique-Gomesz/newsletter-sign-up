import { styled } from "styled-components";

export const BaseButton = styled.button`
  transition: 0.5s;
  width: 100%;
  border-radius: 6px;
  padding: 16px 16px;
  font-weight: 700;
  font-family: "Roboto";
  color: hsl(0, 0%, 100%);
  background-color: hsl(234, 29%, 20%);
  border-width: 0px;
  font-size: 14px;

  &:hover {
    transition: 0.5s;
    background-color: hsl(4, 100%, 67%);
    -webkit-box-shadow: 10px 24px 61px -15px rgba(255, 98, 87, 1);
    -moz-box-shadow: 10px 24px 61px -15px rgba(255, 98, 87, 1);
    box-shadow: 10px 24px 61px -15px rgba(255, 98, 87, 1);
    cursor: pointer;
  }
`;
