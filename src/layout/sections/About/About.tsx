import styled from "styled-components";
import {InformationBlock} from "../../../components/informationBlock/InformationBlock.tsx";
import {Subitem} from "../../../components/subitem/Subitem.tsx";
import {Container} from "../../../components/container/Container.ts";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <FlexWrapper justify="start" align={"center"}>
                    <StyledBlocks>
                        <InformationBlock
                            title={"About Me"}
                            description={"The Generator App is an online tool that helps you to export ready-made templates ready to work as your\n" +
                                "                future website. It helps you to combine slides, panels and other components and export it as a set of\n" +
                                "                static files: HTML/CSS/JS."}/>

                        <InformationBlock title={"Work Experience"}>
                            <Subitem
                                subtitle={"Junior Web Developer"}
                                modelWork={"Full Time"}
                                city={"France"}
                                company={"Amazon IT"}
                                date={"25.05.2021"}
                                description={"The Generator App is an online tool that helps you to export ready-made templates ready to work as your\n" +
                                    "                future website. It helps you to combine slides, panels and other components and export it as a set of\n" +
                                    "                static files: HTML/CSS/JS."}

                            />

                            <Subitem
                                subtitle={"Junior Web Developer"}
                                modelWork={"Full Time"}
                                city={"France"}
                                company={"Amazon IT"}
                                date={"25.05.2022"}
                            />

                            <Subitem
                                subtitle={"Junior Web Developer"}
                                modelWork={"Full Time"}
                                city={"France"}
                                company={"Amazon IT"}
                                date={"25.05.2023"}
                            />
                        </InformationBlock>

                        <InformationBlock
                            title={"Education"}
                            description={"Bachelor in Electronics & Communication"}/>
                    </StyledBlocks>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 100vh;
    display: flex;
`

const StyledBlocks = styled.div`
    max-width: 710px;
`