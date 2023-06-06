import styled from "styled-components";
import { Link } from "react-router-dom";

export const Trending = styled(Link)`
display: block;
padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  list-style: none;
  position: relative;
  padding: 3px 0 2px 25px;
  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;

  &::before {
    content: '*';
    position: absolute;
    top: 6px;
    left: 0;
  }

  &:hover {
    box-shadow: inset 500px 0 0 0 orangered;
  color: white;
  }
`;

