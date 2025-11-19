import {StyledTechStack} from "../layout/sections/projects/StyledProjects.tsx";

type ListPropsType = {
    itemArr: Array<string>;

}

export const List = (props: ListPropsType) => {
    return (
            <StyledTechStack>
                <span>Tech Stack: </span>
                {props.itemArr.map((item, index) =>
                    {
                        return  <li key={index}>
                            {item}
                        </li>
                    }
                )}
            </StyledTechStack>
    );
};

