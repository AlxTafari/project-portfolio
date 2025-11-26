import styled from "styled-components";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle.tsx";
import {Subitem} from "../../../components/subitem/Subitem.tsx";
import {Container} from "../../../components/container/Container.ts";
// import bigSquare from "../../../assets/img/bigbigSquare.svg"
import { BigSquareTest} from "../../../components/bigSquare/BigSquareStyled.tsx";
import {font} from "../../../styles/Common.ts";
import {theme} from "../../../styles/Theme.ts";

export const About = () => {
    return (
        <StyledAbout id="about">
            <Container>
                    <StyledBlocks>
                        <SectionTitle align={"start"}
                                      title={"About Me"}
                                      description={"The Generator App is an online tool that helps you to export ready-made templates ready to work as your\n" +
                                          "                future website. It helps you to combine slides, panels and other components and export it as a set of\n" +
                                          "                static files: HTML/CSS/JS."}>

                        </SectionTitle>

                        <SectionTitle align={"start"}
                                      title={"Work Experience"}>

                        </SectionTitle>
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

                        <SectionTitle align={"start"}
                                      title={"Education"}>
                        </SectionTitle>
                        <Subitem
                            subtitle={"Bachelor in Electronics & Communication"}
                            modelWork={"Full Time"}
                            city={"France"}
                            company={"Amazon IT"}
                            date={"Aug 2015 - Dec 2020"}
                        />

                    </StyledBlocks>
            </Container>
            <BigSquareTest/>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    display: flex;
    position: relative;
    overflow: hidden;
`

const StyledBlocks = styled.div`
    display: flex;
    flex-direction: column;
    
    h2 {
        ${font({Fmax: 42, Fmin: 28, weight: 600})};
        margin: 38px 0;
        letter-spacing: -0.4px;
    }

    p {
        ${font({Fmax: 18, Fmin: 14, weight: 300, color: theme.colors.secondaryFont})};
        margin: 0;
    }
    

    max-width: 710px;
`
