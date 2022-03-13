import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => (props.bg ? props.bg : "white")};
  color: ${(props) => (props.color ? props.color : "black")};

  font-size: 25px;
  margin: 7px;
  padding: 6px 11px;

  border: ${(props) => (props.border ? props.border : "1px solid red")};
`;
export { Button };
