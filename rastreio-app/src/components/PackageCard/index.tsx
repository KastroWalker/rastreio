import { Card, LastInfo, PackageCode, PackageName } from "./style";

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
