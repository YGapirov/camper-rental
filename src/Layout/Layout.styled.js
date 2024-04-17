import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: rgba(255, 255, 255, 0.7);
  margin-bottom: 28px;
`;

export const List = styled.ul`
  display: flex;
  gap: 14px;
  margin: 0 auto;
  padding: 24px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 20px;

  transition: color 0.3s, transform 0.3s;

  &:hover,
  &:focus {
    color: #e44848;
  }

  &.active {
    color: #e44848;
    font-weight: bold;
  }
`;

export const StyledItem = styled.li`
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;
