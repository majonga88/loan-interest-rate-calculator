import styled from 'styled-components';
import React, {FC, InputHTMLAttributes} from "react";

const StyledSelectBox = styled.select`
    -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  appearance: none;
  border: 1px solid #dfdfdf;
  border-radius: 2px;
  background-position-x: 100%;
  background-position-y: 5px;
  height: 50px;
  text-align-last: center;
  background: url("http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png") white no-repeat 98.5% !important; /* !important used for overriding all other customisations */
  background: url("http://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/br_down.png") white no-repeat calc(100% - 10px) !important; /* Better placement regardless of input width */
`;

interface SelectBoxProps extends InputHTMLAttributes<HTMLInputElement> {
    value: any,
    onChange: any,
    options: any,
    optionText?: any
}

const SelectInput: FC<SelectBoxProps> = ({value, onChange, options, optionText} ) => (
    <StyledSelectBox value={value} onChange={onChange}>
        {options.map((optionValue: any, index: number) => {
            return (
                <option value={optionValue} key={index}>
                    {optionValue} {optionText}
                </option>
            )
        })}
    </StyledSelectBox>
);

export default SelectInput;
