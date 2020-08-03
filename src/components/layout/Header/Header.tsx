import React from 'react';
import styled, { css } from 'styled-components';
import { breakpoints, colors, dimensions, layerIndexes } from 'components/foundations/variables';
import { createRef, default as React, useState } from "react"
import { InstantSearch } from "react-instantsearch-dom"
import { ThemeProvider } from "styled-components"
import StyledSearchBox from "./styled-search-box"
import StyledSearchResult from "./styled-search-result"
import StyledSearchRoot from "./styled-search-root"
import useClickOutside from "./use-click-outside"

interface HeaderProps {
  navigation?: boolean;
  absolute?: boolean;
  fixed?: boolean;
}

const isFixed = css`
  @media (min-width: ${breakpoints.lg}px) {
    left: ${dimensions.widths.sidebar.lg}px;
  }
`;

const Wrapper = styled('header')<HeaderProps>`
  display: flex;
  flex-direction: column;
  position: ${props => (props.fixed ? 'fixed' : props.absolute ? 'absolute' : 'relative')};
  top: 0;
  left: 0;
  width: 100%;
  height: ${dimensions.heights.header}px;
  padding: 0 24px;
  background-color: ${props => (props.navigation ? colors.grey01 : colors.white)};
  border-bottom: ${props => (props.navigation ? 'none' : `1px solid ${colors.grey02}`)};
  z-index: ${layerIndexes.stickyNav};

  ${props => props.fixed && isFixed}
`;

const Header: React.SFC<HeaderProps> = ({ children, absolute, fixed, navigation }) => (
  <Wrapper absolute={absolute} fixed={fixed} navigation={navigation}>
    {children}
  </Wrapper>
);

export default Header;
