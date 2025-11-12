import styled from "styled-components";
import photo from "../../../assets/img/prj6.webp"

export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justify={"space-around"} alignItems={"center"} direction={"row"}>
                <StyledHello>Hi 👋,
                    My name is <br/>
                    Alexander<br/>
                    I build things for web</StyledHello>
                <Photo src={photo}/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: bisque;

`

type FlexWrapperPropsType = {
    direction?: string;
    justify?: string;
    alignItems?: string;
    wrap?: string;
}

const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    min-height: 800px;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-items: ${props => props.alignItems};
    wrap: ${props => props.wrap};
`

const StyledHello = styled.h1`

`

const Photo = styled.img`
    width: 349px;
    height: 349px;
    border-radius: 50%;
    object-fit: cover;
    padding: 9px;
    background: linear-gradient(to right, #E70FAA, #00C0FD);
    box-sizing: border-box;
    
`

