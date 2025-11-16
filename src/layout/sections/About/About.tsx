import styled from "styled-components";
import {InformationBlock} from "../../../components/informationBlock/InformationBlock.tsx";
import {Subitem} from "../../../components/subitem/Subitem.tsx";
import {Container} from "../../../components/container/Container.ts";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper.tsx";
import bigSquare from "../../../assets/img/drawing.svg"

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper justify="space-between" align={"center"}>
                    <StyledBlocks>
                        <InformationBlock marginBottom={"38px"}
                                          title={"About Me"}
                                          description={"The Generator App is an online tool that helps you to export ready-made templates ready to work as your\n" +
                                              "                future website. It helps you to combine slides, panels and other components and export it as a set of\n" +
                                              "                static files: HTML/CSS/JS."}>

                        </InformationBlock>
                        <InformationBlock title={"Work Experience"} marginBottom={"38px"}>
                            <Subitem
                                subtitle={"Junior Web Developer"}
                                modelWork={"Full Time"}
                                city={"France"}
                                company={"Amazon IT"}
                                date={"Sep 2021 - Dec 2021"}
                            />
                            <Subitem
                                subtitle={"Junior Web Developer"}
                                modelWork={"Full Time"}
                                city={"France"}
                                company={"Amazon IT"}
                                date={"Aug 2015 - Dec 2020"}
                            />

                            <Subitem
                                subtitle={"Junior Web Developer"}
                                modelWork={"Full Time"}
                                city={"France"}
                                company={"Amazon IT"}
                                date={"Aug 2015 - Dec 2020"}
                            />
                        </InformationBlock>
                        <InformationBlock
                            title={"Education"}>
                            <Subitem
                                subtitle={"Bachelor in Electronics & Communication"}
                                modelWork={"Full Time"}
                                city={"France"}
                                company={"Amazon IT"}
                                date={"Aug 2015 - Dec 2020"}
                            />
                        </InformationBlock>

                    </StyledBlocks>
                </FlexWrapper>
            </Container>
            <BigSquareStyled src={bigSquare}/>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const StyledBlocks = styled.div`
    h2 {
        font-size: 42px;
    }

    p {
        font-size: 18px;

    }

    max-width: 710px;
`
const BigSquareStyled = styled.img`
    position: absolute;
    z-index: 1;
    left: 65%;
    pointer-events: none;
    
`