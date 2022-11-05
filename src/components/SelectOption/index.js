import * as Styled from "./style";
import todoList from "../../assets/images/icon-todo.svg";
import calendar from "../../assets/images/icon-calendar.svg";
import reminders from "../../assets/images/icon-reminders.svg";
import planning from "../../assets/images/icon-planning.svg";

import arrowUp from "../../assets/images/icon-arrow-up.svg";
import arrowDown from "../../assets/images/icon-arrow-down.svg";
import { useState } from "react";

export default function SelectOption() {
  const [showListOptions, setShowListOptions] = useState("null");

  function showOptions(title) {
    title === showListOptions
      ? setShowListOptions("null")
      : setShowListOptions(title);
  }

  return (
    <Styled.Container>
      <Styled.ContainerOptions>
        <Styled.titleOption onClick={() => showOptions("Features")}>
          Features{" "}
          <img src={showListOptions === "Features" ? arrowUp : arrowDown} />
        </Styled.titleOption>

        {showListOptions === "Features" && (
          <Styled.ListOptions>
            <Styled.Option>
              {" "}
              <img src={todoList} /> Todo List
            </Styled.Option>
            <Styled.Option>
              {" "}
              <img src={calendar} /> Calendar
            </Styled.Option>
            <Styled.Option>
              <img src={reminders} /> Reminders{" "}
            </Styled.Option>
            <Styled.Option>
              <img src={planning} /> Planning
            </Styled.Option>
          </Styled.ListOptions>
        )}
      </Styled.ContainerOptions>

      <Styled.ContainerOptions>
        <Styled.titleOption onClick={() => showOptions("Company")}>
          Company{" "}
          <img src={showListOptions === "Company" ? arrowUp : arrowDown} />
        </Styled.titleOption>

        {showListOptions === "Company" && (
          <Styled.ListOptions>
            <Styled.Option>History</Styled.Option>
            <Styled.Option>Our Team</Styled.Option>
            <Styled.Option>Blog</Styled.Option>
          </Styled.ListOptions>
        )}
      </Styled.ContainerOptions>
      <Styled.titleOption>Careers</Styled.titleOption>

      <Styled.titleOption>About</Styled.titleOption>
    </Styled.Container>
  );
}
