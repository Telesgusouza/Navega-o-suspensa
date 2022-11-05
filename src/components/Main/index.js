import * as Styled from "./style";
import logo from "../../assets/images/image-hero-desktop.png";
import logoCell from "../../assets/images/image-hero-mobile.png";

import databiz from "../../assets/images/client-databiz.svg";
import audioPhile from "../../assets/images/client-audiophile.svg";
import meet from "../../assets/images/client-meet.svg";
import maker from "../../assets/images/client-maker.svg";
import { useEffect, useState } from "react";

export default function Main() {
  const [width, setWidth] = useState(null);

  useEffect(() => {
    setWidth(window.screen.width)
  }, [width]);

  return (
    <Styled.ContainerMain>
      <Styled.logoImg>
        <img src={width >= 630 ? logo : logoCell} />
      </Styled.logoImg>
      <Styled.ConteinerContent>
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <Styled.ButtonLearnMore>Learn more</Styled.ButtonLearnMore>
        <Styled.ContainerSponsor>
          <img src={databiz} />
          <img src={audioPhile} />
          <img src={meet} />
          <img src={maker} />
        </Styled.ContainerSponsor>
      </Styled.ConteinerContent>
    </Styled.ContainerMain>
  );
}
