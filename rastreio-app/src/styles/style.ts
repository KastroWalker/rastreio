import styled, { keyframes } from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
`;

export const ErroMessage = styled.div`
  padding: 20px;
  background-color: #f44336;
  color: #fff;
  opacity: 0.83;
  margin-bottom: 15px;
  width: 100%;
  border-radius: 10px;
  margin: 10px;
`;

export const Header = styled.header`
  background-color: #ffe600;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #00416b;
`;

export const Footer = styled.footer`
  color: #00416b;
`;

export const FooterText = styled.p`
  color: #00416b;
  display: flex;
  justify-content: center;
`;

export const LinkFooter = styled.a`
  color: #00416b;
  text-decoration: none;
  font-weight: bold;

  &:visited {
    color: #00416b;
  }
`;

const AnimationLoader = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 65px;

  &:after {
    content: " ";
    display: block;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    border: 4px solid #00416b;
    border-color: #00416b transparent #00416b transparent;
    animation-name: ${AnimationLoader};
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
  }
`;

export const PackageCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const FetchingDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MessageFetchingData = styled.p`
  color: #00416b;
`;
