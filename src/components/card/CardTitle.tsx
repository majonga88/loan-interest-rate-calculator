import styled from "styled-components";
import React, {FC, InputHTMLAttributes} from "react";

const StyledCardTitle = styled.h3`
    text-align: center;
`;

interface CardTitleProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
}

const CardTitle: FC<CardTitleProps> = ({value}) => (
    <StyledCardTitle>
        {value}
    </StyledCardTitle>
);

export default CardTitle;