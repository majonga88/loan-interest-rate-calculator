import styled from "styled-components";
import React, {FC, InputHTMLAttributes} from "react";

const StyledButton = styled.a`
    background-color: #0275ff;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    font-size: 1em;
    text-decoration: none;
    outline: 0;
    border: 1px solid #6964d8;
    padding: 0.8125rem 2.1875rem;
    border-radius: 1.5625rem;
`;

interface ButtonProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string,
    href?: string,
}

const Button: FC<ButtonProps> = ({ title, href }) => (
    <StyledButton href={href}>
        {title}
    </StyledButton>
);

export default Button;