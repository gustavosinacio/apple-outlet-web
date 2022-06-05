import styled, { css } from "styled-components";

export const Container = styled.input(
  ({ theme: { colors } }) => css`
    background: ${colors.background};
    border: 0;
  `
);
