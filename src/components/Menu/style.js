import styled from "styled-components";

export const signIn = styled.div`
  position: absolute;
  right: 10px;
  padding: 2px 0;
  button {
    margin-left: 20px;
    width: 90px;
    font-weight: 600;
    padding: 6px;
    border-radius: 10px;
    background-color: white;
    border: none;

    cursor: pointer;

    &:hover {
      border: 2px solid black;
    }
  }

  @media (max-width: 710px) {
    display: none;
  }
`;

export const Container = styled.div``;

export const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100ch;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.55);
`;
export const Menu = styled.menu`
  position: absolute;
  top: 0px;
  right: 0;
  padding: 20px;
  width: 200px;
  height: 100ch;

  z-index: 20;

  background-color: white;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);

  img {
    float: right;
    margin-bottom: 20px;
  }
`;

export const TitleOption = styled.div`
  width: 100%;
  margin-top: 10px;
  float: right;
  position: relative;

  font-weight: 500;
  color: hsl(0, 0%, 41%);
  font-size: 15px;

  img {
    margin-left: 10px;
    position: absolute;
    top: 5px;
  }
`;
export const ListOptions = styled.div`
  padding: 10px;
  float: right;
  width: 100%;
  display: grid;
  grid-gap: 10px;
  color: hsl(0, 0%, 8%);
`;

export const Option = styled.div`
  font-size: 13px;
  font-weight: 500;
  img {
    width: 13px;
    margin: 0;
    float: left;
    margin-right: 8px;
  }
`;

export const ContainerButton = styled.div`
  
  margin-top: 24px;
  float: left;
  width: 100%;
  display: flex;
  flex-direction: column;

  button {
    margin-bottom: 5px;
    padding: 7px;
    border-radius: 10px;
    background-color: white;
    border: none;

    &:hover {
      border: 1px solid black;
    }
  }
`;
