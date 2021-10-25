import { Package } from "../../types/Package";
import {
  CancelButton,
  ConfirmButton,
  ContainerModal,
  ContentModal,
  FooterModal,
  HeaderModal,
  MessageModal,
  NamePackage,
  TitleModal,
} from "./styles";

type ModalProps = {
  statusModal: boolean;
  packageToRemove: Package;
  onCancelButton: () => void;
  onConfirmButton: () => void;
};

const ModalRemove = (props: ModalProps) => {
  const { statusModal, onCancelButton, onConfirmButton, packageToRemove } =
    props;

  return (
    <ContainerModal statusModal={statusModal}>
      <HeaderModal>
        <TitleModal>Remover pacote</TitleModal>
      </HeaderModal>
      <ContentModal>
        <MessageModal>
          Deseja mesmo remover <NamePackage>{packageToRemove.name}</NamePackage>{" "}
          da sua lista de pacotes?
        </MessageModal>
      </ContentModal>
      <FooterModal>
        <CancelButton onClick={() => onCancelButton()}>Cancelar</CancelButton>
        <ConfirmButton onClick={() => onConfirmButton()}>Remover</ConfirmButton>
      </FooterModal>
    </ContainerModal>
  );
};

export default ModalRemove;
