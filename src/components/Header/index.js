import * as Styled from "./style";
import SelectOption from "../SelectOption";
import logo from "../../assets/images/logo.svg";
import Menu from "../Menu";

export default function Header() {
  return (
    <Styled.Center>
      <Styled.Header>
        {/* parte de navegação */}

        <Styled.Navigate>
          <img src={logo} />
          <SelectOption />
        </Styled.Navigate>
        <Menu/>
      </Styled.Header>
    </Styled.Center>
  );
}
