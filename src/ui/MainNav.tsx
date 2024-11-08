import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";
const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Link = styled(NavLink)`
  // Pseudo-classes
  &:link,//Applies when the link has not been visited.
  &:visited {
    // Applies when the link has been previously visited
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: var(--color-green-700);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  /* Active */
  &:hover {
    background-color: var(--color-grey-200);
  }
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-green-0);
    background-color: var(--color-green-700);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-green-700);
    transition: all 0.3s;
  }

  &:hover svg {
  }
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-green-0);
  }
`;

const MainNav = () => {
  return (
    <nav>
      <NavList>
        <li>
          <Link to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/bookings">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </Link>
        </li>
        <li>
          <Link to="/cabins">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </Link>
        </li>
        <li>
          <Link to="/users">
            <HiOutlineUsers />
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </Link>
        </li>
      </NavList>
    </nav>
  );
};

export default MainNav;
