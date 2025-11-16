import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {Theme} from "../../styles/Theme.ts";

type SubitemPropsType = {
    subtitle?: string;
    modelWork?: string;
    city?: string;
    company?: string;
    date?: string;
};

export const Subitem = (props: SubitemPropsType) => {
    return (
         <StyledSubitem>

            <StyledSubTitle>
                <h3>{props.subtitle}</h3>
                <span>{props.modelWork}</span>
            </StyledSubTitle>

            <Tags>
                <TagsItem>
                    <Icon iconId={"building"} width={"12px"} height={"12px"} viewBox={"0 0 12 12"} />
                    <span>{props.city}</span>
                </TagsItem>
                <TagsItem>
                    <Icon iconId={"location"} width={"12px"} height={"12px"} viewBox={"0 0 12 12"} />
                    <span>{props.company}</span>
                </TagsItem>
                <TagsItem style={{ marginLeft: "auto" }}>
                    <Icon iconId={"date"} width={"16px"} height={"12px"} viewBox={"0 0 16 12"} />
                    <time dateTime={props.date}>{props.date}</time>
                </TagsItem>
            </Tags>
         </StyledSubitem>

    );
};

const StyledSubitem = styled.div`
    position: relative;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
`

const StyledSubTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    h3 {
        margin: 0;
        font-style: normal;
    }
`

const Tags = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    position: relative;
    padding: 10px 0;



    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: ${Theme.DarkColors.Font};
        //background: linear-gradient(to right, #E70FAA, #00C0FD);
        border-radius: 2px;
        
`;

const TagsItem = styled.div`
    gap: 10px;
    padding-bottom: 1rem;

    svg {
        fill: ${Theme.DarkColors.Font};
    }

    
`