import { Icon } from "../icon/Icon.tsx";
import {StyledLink} from "../styledLink/StyledLink.tsx";

type LogoPropsType = React.HTMLAttributes<HTMLAnchorElement>;


export const Logo = ({ className } : LogoPropsType) => {
    return (
        <StyledLink href="#home" className={className}>
            <Icon iconId={"code"} fill={"Theme.DarkColors.Gradient"}/>
        </StyledLink>
    );
};


