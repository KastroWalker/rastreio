import styled from "styled-components";

export const Card = styled.div`
  border: 1.5px solid #0071ad;
  border-radius: 10px;
  width: 100%;
  margin: 10px;
  box-shadow: 0px 0px 9px -4px rgba(0, 0, 0, 0.55);
  padding: 10px;
  background-color: #eeeded;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PackageName = styled.h2`
  color: #00416b;
`;

export const PackageCode = styled.h3`
  color: #0071ad;
  font-size: 13px;
`;

export const LastInfo = styled.p``;

export const PackageInfoContainer = styled.div``;

export const RemoveButton = styled.button`
  font-size: 30px;
  border: none;
  color: #0071ad;
  cursor: pointer;

  &:hover {
    color: #00416b;
  }
`;
