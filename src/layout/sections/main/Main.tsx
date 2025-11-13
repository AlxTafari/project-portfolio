import styled from "styled-components";
import photo from "../../../assets/img/prj6.webp"
import {Container} from "../../../components/container/Container.ts";
import {Theme} from "../../../styles/Theme.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <StyledHello>
                        <span>Hi 👋,</span>
                        <span>My name is</span>
                        <GradientText>Alexander</GradientText>
                        <span>I build things for web</span>
                    </StyledHello>
                    <Photo src={photo}/>

                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.section`
    min-height: 100vh;
    display: flex;

`

const StyledHello = styled.h1`
    display: flex;
    align-items: start;
    flex-direction: column;
`

const Photo = styled.img`
    width: 350px;
    height: 350px;
    border-radius: 50%;
    object-fit: cover;
    padding: 8px;
    background: linear-gradient(to right, #E70FAA, #00C0FD);
    box-sizing: border-box;

`
const GradientText = styled.span`
    background: ${Theme.DarkColors.Gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

`;