import styled from 'styled-components';
import React, {FC, InputHTMLAttributes} from "react";

const StyledInput = styled.input`
  width: 100%;
`;

const StyledFieldSlider = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
    min?: number,
    max?: number,
    step?: number,
    value: number,
    onInput: any,
}

const RangeInput: FC<SliderProps> = ({min, max, step, value,  onInput} ) => (
    <StyledFieldSlider>
        <StyledInput type="range" min={min} max={max} step={step} value={value} onInput={onInput}/>
    </StyledFieldSlider>
);

export default RangeInput;
