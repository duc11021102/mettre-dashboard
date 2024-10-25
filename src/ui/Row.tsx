import styled, { css } from "styled-components";

// Declare types for props
interface RowProps {
  type?: "horizontal" | "vertical"; // 'type' is optional
}

const Row = styled.div<RowProps>`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: "vertical", // default
};

export default Row;
