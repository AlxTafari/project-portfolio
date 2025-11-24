import {Icon} from "../../../components/icon/Icon.tsx";
import {GridWrapper} from "../../../components/gridWrapper/GridWrapper.tsx";

export const skillsBox = [
    "html",
    "type-css",
    "js",
    "react",
    "redux",
    "bootstrap",
    "tailwind",
    "saas",
    "git-skill",
    "cib_greensock",
    "vscode",
    "github-skill",

];

export const SkillGen = (props: { skillItem: Array<string> }) => {
    return (
        <GridWrapper gap={"30px"} rowGap={"50px"} minColumnWidth={"150px"} place={"center"} >
                {props.skillItem.map((item, index) => {
                        return (
                            <Icon key={index} iconId={item} width={"120"} height={"120"} viewBox={"0 0 120 120"}/>
                        )
                    }
                )}
        </GridWrapper>
    );
};