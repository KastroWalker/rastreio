import styled from "styled-components";

const Card = styled.div`
  border: 1.5px solid #0071ad;
  border-radius: 10px;
  width: 100%;
  margin: 10px;
  box-shadow: 0px 0px 9px -4px rgba(0, 0, 0, 0.55);
  padding: 10px;
  background-color: #eeeded;
`;

const PackageName = styled.h2`
  color: #00416b;
`;

const PackageCode = styled.h3`
  color: #0071ad;
  font-size: 13px;
`;

const LastInfo = styled.p``;

type packageCardProps = {
  name: String;
  code: String;
  lastInfo: String;
};

const PackageCard = (props: packageCardProps) => {
  const { name, code, lastInfo } = props;

  return (
    <Card>
      <PackageName>{name}</PackageName>
      <PackageCode>{code}</PackageCode>
      <LastInfo>{lastInfo}</LastInfo>
    </Card>
  );
};

export default PackageCard;
