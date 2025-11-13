import styled from "styled-components";
import {InformationBlock} from "../../../components/informationBlock/InformationBlock.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {StyledBtn, StyledLink} from "../../../components/StyledButton.tsx";
import {Container} from "../../../components/container/Container.ts";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper>
                    <InformationBlock title="For any questions please message me"/>
                </FlexWrapper>
                <StyledForm>
                    <Field placeholder={"name"}/>
                    <Field placeholder={"subject"}/>
                    <Field itemID="text" placeholder={"your message"} type="textarea"/>
                </StyledForm>

                <StyledBtn as={StyledLink}>Send Message</StyledBtn>

            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 3rem 0;
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