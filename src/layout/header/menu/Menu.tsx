import {StyledLink} from "../../../components/styledLink/StyledLink.tsx";
import * as React from "react";

export const Menu : React.FC<{menuItem: Array<{ title: string; link: string }>}> = (props: { menuItem: Array<{ title: string; link: string }> }) => {
    return (
        <ul>
            {props.menuItem.map((item, index) => {
                    return  <li key={index}>
                        <StyledLink href={`#${item.link}`}>{item.title}</StyledLink>
                    </li>
                }
            )}
        </ul>
    );
};