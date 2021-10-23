import { ChangeEvent, FormEvent, useState } from "react";
import { Package } from "../../types/Package";
import { Button, Form, Input, Label, Title } from "./style";

type TrackerFormProps = {
  packages: Array<Package>;
  setPackages: (packages: Array<Package>) => void;
  setErroMessage: (message: String) => void;
};

const TrackerForm = (props: TrackerFormProps) => {
  const { packages, setPackages, setErroMessage } = props;
  const [codePackage, setCodePackage] = useState("");
  const [namePackage, setNamePackage] = useState("");

  const handleCodePackage = (event: ChangeEvent<HTMLInputElement>) => {
    setCodePackage(event.target.value);
  };

  const handleNamePackage = (event: ChangeEvent<HTMLInputElement>) => {
    setNamePackage(event.target.value);
  };

  const formValidate = () => {
    let invalidValues = false;

    if (!codePackage) {
      setErroMessage("Informe um código");
      invalidValues = true;
    }

    return !invalidValues;
  };

  const savePackageInfoInLocalStorage = (newPackage: Package) => {
    if (packages.length > 0) {
      const packageExist =
        packages.filter((pkg) => pkg["code"] === newPackage.code).length > 0;

      if (packageExist) {
        setErroMessage("Pacote já cadastrado!");
      } else {
        setPackages([...packages, newPackage]);
        localStorage.setItem(
          "packages",
          JSON.stringify([...packages, newPackage])
        );
      }
    } else {
      setPackages([newPackage]);
      localStorage.setItem("packages", JSON.stringify([newPackage]));
    }
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErroMessage("");

    if (formValidate()) {
      const newPackage: Package = {
        code: codePackage,
        name: namePackage,
      };

      savePackageInfoInLocalStorage(newPackage);
    }
  };

  return (
    <Form action="." onSubmit={submitForm}>
      <Title>Insira informações do pacote</Title>

      <Label htmlFor="code_package">Código*: </Label>
      <Input type="text" id="code_package" onChange={handleCodePackage} />

      <Label htmlFor="name_package">Nome: </Label>
      <Input type="text" id="name_package" onChange={handleNamePackage} />

      <Button>Rastrear produto</Button>
    </Form>
  );
};

export default TrackerForm;
