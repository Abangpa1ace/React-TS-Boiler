import React from "react";
import { Link } from "react-router-dom";
import styled from '@emotion/styled';

function Header(): JSX.Element {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/sub">Sub</Link>
    </Container>
  )
}

const Container = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #f4f4f4;
  font-size: 20px;
  font-weight: bold;
`
export default Header