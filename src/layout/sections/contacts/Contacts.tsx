import styled from "styled-components";
import {InformationBlock} from "../../../components/informationBlock/InformationBlock.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {StyledBtn} from "../../../components/StyledButton.tsx";

export const Contacts = () => {
    return (
        <StyledContacts>
            <FlexWrapper>
                <InformationBlock title="For any questions please message me"/>
            </FlexWrapper>
            <StyledForm>
                <Field placeholder={"name"}/>
                <Field placeholder={"subject"}/>
                <Field placeholder={"your message"} type="textarea"/>
                <StyledBtn>Send Message</StyledBtn>
            </StyledForm>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    height: 50vh;
    background: #eff4b9;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    gap: 10px;

`

const Field = styled.input`
`