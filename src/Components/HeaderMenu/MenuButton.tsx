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
    width: 170px;
    background-color: black;
    color: white;
    border: none;
    outline: none;
    z-index: 1;
    margin: 0;
    padding: 0;
    overflow: hidden;

    transition: height 0.15s ease-out;

    &:hover {
        height: ${props => { return props.growHeight }};
        transition: height 0.25s ease-in;
    }
`

const Button = styled.div`
    height: 70px;
`