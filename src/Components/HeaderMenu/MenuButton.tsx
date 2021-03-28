import React from "react";
import styled from "styled-components";

interface Props {
    children: JSX.Element[] | JSX.Element;
}

export const MenuButton: React.FC<Props> = ({ children }) => {
    return (
        <Wrapper growHeight={Array.isArray(children) ? `${children.length * 100}%` : "100%"}>
            <Button>
                {children && Array.isArray(children) && children.map((child: any) => {
                    return (
                        <div key={children.indexOf(child)}>
                            {child}
                        </div>
                    )
                })}
                {children && !Array.isArray(children) && children}
            </Button>
        </Wrapper>
    );
}

const Wrapper = styled.div<{ growHeight: string }>`
    height: 70px;
    font-size: 20px;
    width: 145px;
    color: white;
    outline: none;
    z-index: 1;
    margin: 0;
    padding: 0;
    overflow: hidden;
    box-sizing: border-box;
    transition-delay: 0.25s;
    border: 1px solid black;
    transition: border-radius 0.1s ease-out 0.1s, border 0s ease-in 0.25s, height 0.25s ease-in;
    background-color: black;
    border-top: none;
    
    &:hover {
        height: ${props => { return props.growHeight }};
        border: 1px solid silver;
        border-radius: 0px 0px 15px 15px;
        border-top: none;
        background-color: black;
        transition: border-radius 0.1s ease-out 0.2s, border 0s ease-out, height 0.25s ease-in;
    }
`

const Button = styled.div`
    height: 70px;
`