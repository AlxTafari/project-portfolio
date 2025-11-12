import styled from "styled-components";
import {InformationBlock} from "../../../components/informationBlock/InformationBlock.tsx";
import {Subitem} from "../../../components/subitem/Subitem.tsx";

export const About = () => {
    return (
        <StyledAbout>
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

        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    padding: 177px;
    min-height: 100vh;
    background-color: darkseagreen`

const StyledBlocks = styled.div`
    max-width: 710px;
`