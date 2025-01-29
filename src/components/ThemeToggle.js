import React from 'react';
import styled from 'styled-components';
import { useTheme } from "./context/ThemeContext";

const IconWrapper = styled.div`
    position: relative;
    height: 50px;
    width: fit-content;
    padding: 10px;

    .moon {
      position: absolute;
      top: 20px;
      left: 11px;
      width: 50px;
      transform: rotate(70deg) scale(1.2);
      transition: transform 0.4s ease-in-out; 
    }

    .sun {
        width: auto;
        height: 50px;
        transition: transform 0.4s ease-in-out; 
    }

    &:hover {
        .sun  {
            transform: scale(1.1); 
            filter: drop-shadow(2px 2px 4px rgba(255, 251, 4, 0.62));
        }
        .moon {
            transform: rotate(70deg) scale(1.3);
            filter: drop-shadow(1px 1px 9px rgb(255, 245, 245)); 
        }
    }
  
`


const ThemeToggle = (props) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <IconWrapper onClick={toggleTheme} className="icon-wrapper">
            {theme === "light" ?
                <img className="sun" src="sunmoon.svg" alt="sun icon" />
                    :
                <img className="moon" src="moon.svg" alt="moon icon" />
            }
        </IconWrapper>
    );
};

export default ThemeToggle;