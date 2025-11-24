import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import {Container} from "../../../components/container/Container.ts";
import {theme} from "../../../styles/Theme.ts";

export const Contacts = () => {
    return (
        <StyledContactsSection id="contact">
            <Container>
                <FlexWrapper>
                    <SectionTitle title="For any questions please message me"/>
                </FlexWrapper>
                <StyledForm>
                    <Field placeholder={"name"}/>
                    <Field placeholder={"subject"}/>
                    <Field as={"textarea"} placeholder={"your message"} />
                    <StyledButton type={"submit"}>
                        Send Message
                    </StyledButton>
                </StyledForm>




            </Container>
        </StyledContactsSection>
    );
};

const StyledContactsSection = styled.section`
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
    border: 1px solid ${theme.colors.borderColor};
    background-color: ${theme.colors.secondaryBg};
    padding: 8px 14px;

    font-family: Poppins, sans-serif;
    font-weight: 400;
    font-size: 12px;
    letter-spacing: 0.05em;
    
    color: ${theme.colors.font};
    
    ::placeholder {
        color: ${theme.colors.secondaryFont};
    }
    
    text-transform: capitalize;

    &:focus-visible {
        outline: 2px solid ${theme.colors.borderColor};
    }
`
const StyledButton = styled.button`
    width: auto;
    height: auto;
    font-weight: 300;
    font-size: 16px;
    padding: 6px;
    background-color: ${theme.colors.secondaryBg};
    color: ${theme.colors.secondaryFont};
    border: 1px solid ${theme.colors.borderColor};
    cursor: pointer;
    position: relative;
    z-index: 0;
    transition: color 0.5s ease;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: -4px;
        height: 0;
        border: 2px solid transparent;
        transition: height 0.5s ease, border-color 0.5s ease;
        z-index: -1;
    }

    &:hover {
        color: ${theme.colors.accent};

        &::before {
            height: 100%;
            border-color: ${theme.colors.accent};
        }
    }

    &:focus-visible {
        outline: 2px solid ${theme.colors.borderColor};}
    
`