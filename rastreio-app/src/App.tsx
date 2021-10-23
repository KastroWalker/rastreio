import { useEffect, useState } from "react";
import TrackerForm from "./components/TrackerForm";
import { Package } from "./types/Package";
import styled, { keyframes } from "styled-components";
import PackageCard from "./components/PackageCard";
import { trackPackage } from "./clients/Tracking";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;
`;

const ErroMessage = styled.div`
  padding: 20px;
  background-color: #f44336;
  color: #fff;
  opacity: 0.83;
  margin-bottom: 15px;
  width: 100%;
  border-radius: 10px;
  margin: 10px;
`;

const Header = styled.header`
  background-color: #ffe600;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  color: #00416b;
`;

const Footer = styled.footer`
  color: #00416b;
`;

const FooterText = styled.p`
  color: #00416b;
  display: flex;
  justify-content: center;
`;

const LinkFooter = styled.a`
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

const Loader = styled.div`
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
    /* margin: 8px; */
    border-radius: 50%;
    border: 4px solid #00416b;
    border-color: #00416b transparent #00416b transparent;
    animation-name: ${AnimationLoader};
    animation-duration: 1.2s;
    animation-iteration-count: infinite;
  }
`;

const PackageCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FetchingDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MessageFetchingData = styled.p`
  color: #00416b;
`;

const App = () => {
  const [packages, setPackages] = useState<Array<Package>>([]);
  const [erroMessage, setErroMessage] = useState<String>("");
  const [trackingPackages, setTrackingPackages] = useState<Boolean>(true);

  useEffect(() => {
    async function fetchData() {
      const savedPackages = localStorage.getItem("packages");

      if (savedPackages) {
        const packagesTracked: Array<Package> = [];
        const packagesUntracked: Array<Package> = [];

        for await (const pkg of JSON.parse(savedPackages)) {
          await trackPackage(pkg.code)
            .then((data) => {
              const tracks = data;
              const packageTracked: Package = { ...pkg, tracksEvent: tracks };
              packagesTracked.push(packageTracked);
            })
            .catch(() => {
              packagesUntracked.push(pkg);
            });
        }

        setPackages([...packagesTracked, ...packagesUntracked]);
      }

      setTrackingPackages(false);
    }

    fetchData();
  }, []);

  return (
    <>
      <Header>
        <Title>Rastreador</Title>
      </Header>
      <Main>
        {erroMessage && <ErroMessage>{erroMessage}</ErroMessage>}
        <TrackerForm
          packages={packages}
          setPackages={setPackages}
          setErroMessage={setErroMessage}
        />
        {trackingPackages ? (
          <FetchingDataContainer>
            <MessageFetchingData>Rastreando pacotes</MessageFetchingData>
            <Loader />
          </FetchingDataContainer>
        ) : (
          <PackageCardsContainer>
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.code}
                name={pkg.name}
                code={pkg.code}
                lastInfo={
                  pkg.tracksEvent![0].description ?? "Erro ao buscar status"
                }
              />
            ))}
          </PackageCardsContainer>
        )}
      </Main>
      <Footer>
        <FooterText>
          Desenvolvido com 🤍 por&nbsp;
          <LinkFooter href="https://github.com/kastrowalker">
            Kastrowalker
          </LinkFooter>
        </FooterText>
      </Footer>
    </>
  );
};

export default App;
