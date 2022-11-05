import { useEffect, useState } from "react";
import * as Styled from "./style";
import menu from "../../assets/images/icon-menu.svg";
import closedMenu from "../../assets/images/icon-close-menu.svg";
import arrowUp from "../../assets/images/icon-arrow-up.svg";
import arrowDown from "../../assets/images/icon-arrow-down.svg";

import todoList from "../../assets/images/icon-todo.svg";
import calendar from "../../assets/images/icon-calendar.svg";
import reminders from "../../assets/images/icon-reminders.svg";
import planning from "../../assets/images/icon-planning.svg";

export default function Menu() {
  const [width, setWidth] = useState(null);
  const [showOptions, setShowOptions] = useState(null);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setWidth(window.screen.width);
    console.log(window.screen.width);
  }, [width]);

  function handleClosedMenu() {}

  function handleMenu() {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  function closedOptions() {
    setShowOptions(null);
  }

  function handleOptions(title) {
    showOptions === title ? closedOptions() : setShowOptions(title);
    console.log(showOptions);
  }

  return (
    <>
      {width >= 710 ? (
        <Styled.signIn>
          <button>Login</button>
          <button>Register</button>
        </Styled.signIn>
      ) : (
        <Styled.Container>
          <img src={menu} onClick={handleMenu} />
          {showMenu && (
            <Styled.MenuContainer>
              <Styled.Menu>
                <img src={closedMenu} onClick={handleMenu} />

                <Styled.TitleOption onClick={() => handleOptions("Features")}>
                  Features{" "}
                  <img src={showOptions === "Features" ? arrowUp : arrowDown} />
                </Styled.TitleOption>
                {showOptions === "Features" && (
                  <Styled.ListOptions>
                    <Styled.Option>
                      <img src={todoList} /> Todo List
                    </Styled.Option>
                    <Styled.Option>
                      <img src={calendar} /> Calendar
                    </Styled.Option>
                    <Styled.Option>
                      <img src={reminders} /> Reminders
                    </Styled.Option>
                    <Styled.Option>
                      <img src={planning} /> Planning
                    </Styled.Option>
                  </Styled.ListOptions>
                )}

                <Styled.TitleOption onClick={() => handleOptions("Company")}>
                  Company{" "}
                  <img src={showOptions === "Company" ? arrowUp : arrowDown} />
                </Styled.TitleOption>
                {showOptions === "Company" && (
                  <Styled.ListOptions>
                    <Styled.Option>History</Styled.Option>
                    <Styled.Option>Our Team</Styled.Option>
                    <Styled.Option>Blog</Styled.Option>
                  </Styled.ListOptions>
                )}
                <Styled.TitleOption>Careers</Styled.TitleOption>
                <Styled.TitleOption>About</Styled.TitleOption>

                <Styled.ContainerButton>
                  <button>Login</button>
                  <button>Register</button>
                </Styled.ContainerButton>
              </Styled.Menu>
            </Styled.MenuContainer>
          )}
        </Styled.Container>
      )}
    </>
  );
}
