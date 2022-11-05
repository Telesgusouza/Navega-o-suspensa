import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media (max-width: 710px) {
    display: none;
  }
`;

export const ContainerOptions = styled.div`
  position: relative;
`;

export const titleOption = styled.div`
  margin-right: 20px;
  font-size: 14px;
  font-weight: 700;
  display: flex;

  cursor: pointer;

  img {
  margin-right: 0;
    object-fit: contain;
    margin-left: 8px;
  }
`;

export const ListOptions = styled.div`
  position: absolute;
  top: 28px;
  right: 24px;
  padding: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  border-radius: 8px;

  min-width: 100px;

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 14px;

  img {
    margin-right: 6px;
  }
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  
  img {
    object-fit: contain;
    width: 14px;
  }
`;
