import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme: { colors, sizing, typography, breakpoints } }) => css`
    display: inline-block;
    padding: ${sizing.padding.largex};

    > header {
      margin-bottom: 1.5rem;

      display: flex;
      align-items: center;

      > h1 {
        margin-left: ${sizing.margin.small};
      }
    }

    main {
      > h3 {
        margin-top: 1rem;
        text-transform: uppercase;
        color: black;
      }

      table {
        margin-top: 1rem;
        width: 100%;
        max-width: 500px;
        border-collapse: collapse;
        text-align: center;
        border: 1px solid ${colors.border};

        th,
        td {
          padding: ${sizing.padding.small} ${sizing.padding.small};
          border-bottom: 1px solid ${colors.border};
          width: clamp(5%, 15%, 45%);

          :nth-child(1),
          :nth-child(2) {
            width: 5%;

            @media (${breakpoints.medium}) {
              width: 25%;
            }
          }
        }

        th {
          font-weight: ${typography.fontWeight.bold};
          font-size: 1rem;

          text-transform: uppercase;
        }

        td {
          font-weight: ${typography.fontWeight.normal};
        }

        thead tr {
          color: #000;
        }

        tbody {
          tr {
            background: ${colors.primary};
            color: white;
            box-shadow: inset 0 -12px 15px #000;
          }
        }
      }
    }

    div {
      .error {
        margin-left: 1rem;
        color: red;
      }

      .loading {
        margin-left: 1rem;
        color: ${colors.foreground};
      }

      button {
        margin-top: 1rem;
        padding: ${sizing.padding.medium} ${sizing.padding.large};

        text-decoration: none;
        background: ${colors.background};
        color: ${colors.foreground};

        border: 1px solid ${colors.border};
        border-radius: 3px;

        font-size: 1rem;
        font-weight: 600;

        :hover {
          filter: brightness(1.1);
          color: black;
        }
      }
    }
  `
);

export const InputWrapper = styled.div(
  () => css`
    display: flex;
    align-items: flex-end;

    p {
      text-align: end;
      font-weight: bold;
    }

    span {
      font-size: 1.4rem;
    }

    > * + * {
      margin-left: 0.5rem;
    }

    :not(:first-child) {
      margin-top: 0.5rem;
    }
  `
);
