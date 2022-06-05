import styled, { css } from "styled-components";

export const Container = styled.div(
  () => css`
    padding: 1rem;

    table {
      border: 1px solid green;
      width: 100%;

      @media screen and (min-width: 600px) {
        max-width: 600px;
      }

      th {
        border: 1px solid green;
      }

      td {
        border: 1px solid blue;
      }
    }
  `
);
