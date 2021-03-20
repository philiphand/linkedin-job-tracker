import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

interface Props {
    children: JSX.Element[] | JSX.Element;
}

export const MenuButton: React.FC<Props> = ({ children }) => {
    return (
        <Wrapper numberOfChildren={Array.isArray(children) ? children.length : 1}>
            <Button>
                {children && Array.isArray(children) && children.map((child: any) => {
                    return (
                        <div>
                            { child}
                        </div>
                    )
                })}
                {children && !Array.isArray(children) && children}
            </Button>
        </Wrapper>
    );
}

const Wrapper = styled.div<{ numberOfChildren: number }>`
    height: 70px;
    font-size: 20px;
    width: 150px;
    background-color: black;
    color: white;
    border: none;
    outline: none;
    z-index: 1;
    margin: 0;
    padding: 0;
    overflow: hidden;

    &:hover {
        animation-duration: 0.4s;
        animation-name: grow;
        height: 300%;
    }

    @keyframes grow {
        from {
            height: 100%;
        }

        to {
            height: 300%;
        }
    }
`

const Button = styled.div`
    height: 70px;
`

const Name = styled.p`
    height: 100%;
    color: white;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        animation-duration: 0.4s;
        animation-name: fadeRed;
        color: darkred;
        text-decoration: underline;
    }

    @keyframes fadeRed {
        from {
            color: white;
            text-decoration: none;
        }

        to {
            color: darkred;
            text-decoration: underline;
        }
    }
`