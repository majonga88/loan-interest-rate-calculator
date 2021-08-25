import styled from "styled-components";
import React, {FC, InputHTMLAttributes} from "react";

const StyledFieldInputNumber = styled.span`
  border: 1px solid #dfdfdf;
  border-radius: 2px;
  width: 100%;
`;

const StyledCurrency = styled.span`
  padding-left: 1em;
`;

const StyledInput = styled.input`
  border: 0;
  height: 3.5em;
  text-align-last: center;
  width: 80%;
`;

interface InputNumberProps extends InputHTMLAttributes<HTMLInputElement> {
    min: number,
    max: number,
    value: number,
    onChange: any,
}

const NumberInput: FC<InputNumberProps> = ({min, max, value,  onChange} ) => (
    <StyledFieldInputNumber>
        <StyledCurrency>€</StyledCurrency>
        <StyledInput type="number" min={min} max={max} value={value}
               onChange={onChange}
               onKeyDown={(e) => e.key === ('e' || 'E') && e.preventDefault()}>
        </StyledInput>
    </StyledFieldInputNumber>
);


export default NumberInput;