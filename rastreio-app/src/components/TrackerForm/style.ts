import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 60%;
  margin: 30px;
`;

export const Label = styled.label`
  color: #00416b;
  text-align: start;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #007bb3;
  border-radius: 4px;
  box-sizing: border-box;
  outline: none;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #0071ad;
  color: white;
  padding: 12px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #00416b;
  }
`;

export const Title = styled.h4`
  text-align: center;
`;
