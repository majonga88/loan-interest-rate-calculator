import styled from "styled-components";
import React, {FC, InputHTMLAttributes} from "react";

const StyledLink = styled.a`
    font-weight: bold;
    cursor: pointer;
    color: #00c88f;
    border-bottom: 2px solid #00c88f;
    align-self: center;
`;

interface LinkProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string,
    href?: string,
}

const Link: FC<LinkProps> = ({title, href}) => (
    <StyledLink href={href}>
        {title}
    </StyledLink>
);

export default Link;