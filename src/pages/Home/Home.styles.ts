import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme: { breakpoints, colors, sizing, typography } }) => css`
    padding: ${sizing.padding.small};

    @media (${breakpoints.medium}) {
      padding: ${sizing.padding.large};
    }

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
        border: 1px solid ${colors.border};
        width: 100%;
        max-width: 500px;
        border-collapse: collapse;
        text-align: center;

        thead {
          border-bottom: 2px solid ${colors.border};
        }

        th,
        td {
          :nth-child(odd) {
            background: ${colors.backgroundLight};
            width: 25%;
          }

          border-bottom: 1px solid ${colors.border};
          padding: ${sizing.padding.small};
        }

        th {
          color: ${colors.foregroundLight};
          font-weight: ${typography.fontWeight.normal};
        }

        td {
          font-weight: ${typography.fontWeight.normal};
        }
      }
    }
  `
);

export const InputWrapper = styled.div(
  () => css`
    display: flex;
    align-self: center;

    p {
      text-align: end;
      font-weight: bold;
      vertical-align: bottom;
      /* background: gray; */
    }

    > * + * {
      margin-left: 0.5rem;
    }

    :not(:first-child) {
      margin-top: 1rem;
    }
  `
);
