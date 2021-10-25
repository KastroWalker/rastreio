import {
  Card,
  LastInfo,
  PackageCode,
  PackageName,
  PackageInfoContainer,
  RemoveButton,
} from "./style";
import { FaTrash } from "react-icons/fa";

type packageCardProps = {
  name: String;
  code: String;
  lastInfo: String;
  onRemoveButton: (code: String) => void;
};

const PackageCard = (props: packageCardProps) => {
  const { name, code, lastInfo, onRemoveButton } = props;

  return (
    <Card>
      <PackageInfoContainer>
        <PackageName>{name}</PackageName>
        <PackageCode>{code}</PackageCode>
        <LastInfo>{lastInfo}</LastInfo>
      </PackageInfoContainer>
      <RemoveButton onClick={() => onRemoveButton(code)}>
        <FaTrash />
      </RemoveButton>
    </Card>
  );
};

export default PackageCard;
