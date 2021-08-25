import React, {useState} from 'react';
import {Loan} from "../domains/loan/Loan";
import {getInterestRate} from "../services/InterestRateService";
import {fillMaximumLoanAvailable} from "../services/LoanTermService";
import Card from "../components/card/Card";
import SelectInput from "../components/input/SelectInput";
import RangeInput from "../components/input/RangeInput";
import {LegalForms} from "../domains/loan/constants/LegalForms";
import {LoanPurposes} from "../domains/loan/constants/LoanPurposes";
import Field from "../components/field/Field";
import NumberInput from "../components/input/NumberInput";
import FieldLabel from "../components/field/FieldLabel";
import FieldValue from "../components/field/FieldValue";
import Container from "../components/Container";
import CardTitle from "../components/card/CardTitle";
import Button from "../components/input/Button";
import Link from "../components/input/Link";

function InterestRateCalculator() {

    let [loan, setLoan] = useState<Loan>(new Loan());

    const onChangeLoanPurpose = (e: any) => {

        loan.loanPurpose = e.currentTarget.value;
        loan = fillMaximumLoanAvailable(loan);

        setLoan({
            ...loan,
            loanRate: getInterestRate(loan)
        });
    };

    const onChangeLegalForm = (e: any) => {

        loan.legalForm = e.currentTarget.value;
        loan = fillMaximumLoanAvailable(loan);

        setLoan({
            ...loan,
            loanRate: getInterestRate(loan)
        });
    };

    const onChangeLoanAmount = (e: any) => {

        loan.loanAmount.currentAmount = Number(e.currentTarget.value);
        loan = fillMaximumLoanAvailable(loan);

        setLoan({
            ...loan,
            loanRate: getInterestRate(loan)
        });
    };

    const onChangeLoanTerm = (e: any) => {

        loan.loanTerm.currentTerm = Number(e.currentTarget.value);
        loan = fillMaximumLoanAvailable(loan);

        setLoan({
            ...loan,
            loanRate: getInterestRate(loan)
        });
    };

    return (
        <Container>
            <CardTitle value="Compile your business financing"/>
            <Card>
                <Field>
                    <FieldLabel>Loan Purpose</FieldLabel>
                    <FieldValue>Legal Form</FieldValue>
                </Field>
                <Field>
                    <FieldLabel>
                        <SelectInput name="Loan Purpose" id="loanpurpose" value={loan.loanPurpose}
                                     onChange={onChangeLoanPurpose} options={Object.values(LoanPurposes)}/>
                    </FieldLabel>
                    <FieldValue>
                        <SelectInput name="Legal Form" id="legalform" value={loan.legalForm}
                                     onChange={onChangeLegalForm} options={Object.values(LegalForms)}/>
                    </FieldValue>
                </Field>
            </Card>
            <Card>
                <Field>
                    <FieldLabel>Financing</FieldLabel>
                    <FieldValue>
                        <NumberInput min={0} max={500000} value={loan.loanAmount.currentAmount}
                                     onChange={onChangeLoanAmount}/>
                    </FieldValue>
                </Field>
                <Field>
                    <RangeInput max={loan.loanAmount.maxAmount}
                                value={loan.loanAmount.currentAmount}
                                onInput={onChangeLoanAmount}/>
                </Field>
            </Card>
            <Card>
                <Field>
                    <FieldLabel>Loan Duration</FieldLabel>
                    <FieldValue>
                        <SelectInput name="Legal Form" id="legalform"
                                     value={loan.loanTerm.currentTerm}
                                     onChange={onChangeLoanTerm} options={loan.loanTerm.availableTerms}
                                     optionText={'months'}/>
                    </FieldValue>
                </Field>
                <Field>
                    <RangeInput min={12} max={loan.loanTerm.maxTerm} step={12}
                                value={loan.loanTerm.currentTerm}
                                onInput={onChangeLoanTerm}/>
                </Field>
            </Card>
            <Card>
                <Field>
                    <FieldLabel>Interest rate</FieldLabel>
                    <FieldValue>{loan.loanRate} %</FieldValue>
                </Field>
            </Card>
            <Card>
                <Field>
                    <FieldLabel>
                        <Link title="Check if you qualify"/>
                    </FieldLabel>
                    <FieldValue>
                        <Button title="Get started right away"/>
                    </FieldValue>
                </Field>
            </Card>
        </Container>
    );
}

export default InterestRateCalculator;