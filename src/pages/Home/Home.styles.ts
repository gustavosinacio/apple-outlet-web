import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme: { colors, sizing, typography, breakpoints } }) => css`
    padding: ${sizing.padding.large};

    > header {
      margin-bottom: 2rem;

      display: flex;
      align-items: center;

      > h1 {
        margin-left: ${sizing.margin.small};
      }
    }

    main {
      > h3 {
        margin-top: 2rem;
      }

      table {
        margin-top: 1rem;
        border: 2px solid ${colors.border};
        width: 100%;
        max-width: 500px;
        border-collapse: collapse;
        text-align: center;

        thead {
          border-bottom: 2px solid ${colors.border};
        }

        th,
        td {
          padding: ${sizing.padding.smallx} ${sizing.padding.small};
          border-bottom: 1px solid ${colors.border};
          width: clamp(5%, 15%, 45%);

          :nth-child(odd) {
            width: 5%;
            background: ${colors.backgroundLight};

            @media (${breakpoints.medium}) {
              width: 10%;
            }
          }
        }

        th {
          font-weight: ${typography.fontWeight.normal};
        }

        td {
          font-weight: ${typography.fontWeight.normal};
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
        padding: ${sizing.padding.small} ${sizing.padding.medium};

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
      margin-top: 1rem;
    }
  `
);
