// import React from "react";
// import { View } from "react-native";
import styled from "styled-components/native";
import { theme } from "../constants";

const Container = styled.View`
  margin-horizontal: ${theme.sizes.padding};
  background-color: "rgba(255,255,255,1)";
  flex: ${props => props.flex ? props.flex : null};
  justify-content: ${props => props.justify ? props.justify : 'center'};
  align-items: ${props => props.align ? props.align : 'center'};
`;

export default Container;
