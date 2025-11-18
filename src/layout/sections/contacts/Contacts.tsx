import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {StyledLink} from "../../../components/styledLink/StyledLink.tsx";
import {Container} from "../../../components/container/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
                <FlexWrapper>
                    <SectionTitle title="For any questions please message me"/>
                </FlexWrapper>
                <StyledForm>
                    <Field placeholder={"name"}/>
                    <Field placeholder={"subject"}/>
                    <Field as={"textarea"} placeholder={"your message"} />
                </StyledForm>

                <StyledLink>Send Message</StyledLink>

            </Container>
        </StyledContacts>
    );
};

const StyledContacts = styled.section`
    
`

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    padding: 16px 0;


    textarea {
        resize: none;
        max-width: 540px;
        width: 100%;
        height: 155px;
    }
`

const Field = styled.input`
    width: 100%;
    border: 1px solid ${theme.darkColors.borderColor};
    background-color: ${theme.darkColors.secondaryBg};
    padding: 8px 14px;

    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    
    color: ${theme.darkColors.font};
    
    ::placeholder {
        color: ${theme.darkColors.secondaryFont};
    }
    
    text-transform: capitalize;

    &:focus-visible {
        outline: 2px solid ${theme.darkColors.borderColor};
    }
    


`