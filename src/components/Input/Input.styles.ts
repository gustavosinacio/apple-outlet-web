import styled, { css } from "styled-components";

export const Container = styled.input(
  ({ theme: { breakpoints, colors, typography } }) => css`
    background: transparent;
    color: ${colors.foreground};

    font-size: 1.2rem;
    font-weight: ${typography.fontWeight.normal};
    width: auto;
    max-width: 100px;

    border: 0;
    border-radius: 0;
    border-bottom: 1px solid ${colors.border};

    box-sizing: border-box;

    :hover,
    :focus-visible {
      border-bottom: 1px solid ${colors.primary};
      border-bottom: 1px solid ${colors.primary};

      outline: 0px;
    }

    @media (${breakpoints.medium}) {
      max-width: none;
    }
  `
);
