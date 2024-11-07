import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import { IModal } from "../types/data.types";
const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3.2rem 6rem;
  transition: all 0.5s;
  animation: scaleUp 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);

  @keyframes scaleUp {
    0% {
      transform: scale(0.8) translateY(1000px) translateX(-50%);
      opacity: 0;
    }
    100% {
      transform: scale(1) translateY(-50%) translateX(-50%);
      opacity: 1;
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
  transform: scale(1);
  animation: fadeIn 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  @keyframes fadeIn {
    0% {
      backdrop-filter: blur(0px);
    }
    100% {
      background-color: var(--backdrop-color);
      backdrop-filter: blur(4px);
    }
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

function Modal({ children, onClose }: IModal) {
  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={onClose}>
          <HiXMark />
        </Button>

        <div>{children}</div>
      </StyledModal>
    </Overlay>,
    document.body,
  );
}

export default Modal;
