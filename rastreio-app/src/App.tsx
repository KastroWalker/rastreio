import { useEffect, useState } from "react";
import TrackerForm from "./components/TrackerForm";
import { Package } from "./types/Package";
import PackageCard from "./components/PackageCard";
import { trackPackage } from "./clients/Tracking";
import {
  Header,
  Title,
  Main,
  ErroMessage,
  FetchingDataContainer,
  MessageFetchingData,
  Loader,
  PackageCardsContainer,
  Footer,
  FooterText,
  LinkFooter,
} from "./styles/style";

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
              const packageTracked: Package = { ...pkg, trackEvents: tracks };
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
                  pkg.trackEvents![0].description ?? "Erro ao buscar status"
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
