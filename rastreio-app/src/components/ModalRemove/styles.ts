import styled from "styled-components";

export const ContainerModal = styled.div<{ statusModal: boolean }>`
  position: fixed;
  z-index: 1;
  background-color: #eeeded;
  display: ${(props) => (props.statusModal ? "display" : "none")};
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 1.5px solid #0071ad;
  padding: 30px;
`;

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ContentModal = styled.div``;

export const FooterModal = styled.div``;

export const TitleModal = styled.h1``;

export const MessageModal = styled.p``;

export const CancelButton = styled.button`
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  color: #0071ad;
  padding: 12px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  border: 1.5px solid #0071ad;

  &:hover {
    border: 1.5px solid #00416b;
    color: #00416b;
  }
`;

export const ConfirmButton = styled.button`
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

export const NamePackage = styled.span`
  font-weight: bold;
`;
