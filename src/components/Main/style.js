import styled from "styled-components";

export const ContainerMain = styled.main`
  width: 80%;
  /* max-width: 1000px; */
  width: 750px;
  margin: 0 auto;
  margin-top: 20px;
  /* margin-bottom: 500px; */
  
  @media (max-width: 925px) {
    width: 600px;
  }

  @media (max-width: 630px) {
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 470px) {
    padding: 0;
    padding-bottom: 30px;
  }
`;
export const logoImg = styled.div`
  float: right;
  width: 340px;
  margin-left: 10px;
  img {
    width: 100%;
  }

  @media (max-width: 925px) {
    width: 240px;
  }

  @media (max-width: 630px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 470px) {
    width: 100%;
  }
`;

export const ConteinerContent = styled.div`
  float: right;
  width: 330px;
  margin-right: 60px;
  margin-top: 100px;
  position: relative;

  h1 {
    font-size: 50px;
    margin-bottom: 28px;
  }

  p {
    font-size: 14px;
    line-height: 19px;
  }

  
  @media (max-width: 925px) {
    width: 280px;
    margin-top: 40px;

    h1 {
        font-size: 40px;
        margin-bottom: 15px;
    }
  }

  @media (max-width: 630px) {
    width: 80%;
    margin: 0 auto;
    margin-top: 20px;
  }

  @media (max-width: 470px) {
    text-align: center;
  }
`;

export const ButtonLearnMore = styled.button`
  margin-top: 30px;
  border: none;
  background-color: black;
  color: white;
  padding: 8px 17px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;

  transition: all 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
    font-weight: 700;
    padding: 6px 17px;
    border: 1px solid black;
    /* position: absolute; */
  }

  
  @media (max-width: 925px) {
    /* width: 240px; */
    margin-top: 15px;
  }
`;

export const ContainerSponsor = styled.div`
  position: absolute;
  top: 90%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  box-sizing: border-box;
  width: 100%;
  margin-top: 80px;
  img {
    width: 100%;
  }

  
  @media (max-width: 925px) {
    top: 80%;
  }

  @media (max-width: 630px) {
    position: initial;
    margin-top: 40px;
  }
`;
