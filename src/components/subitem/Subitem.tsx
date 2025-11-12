import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";

type SubitemPropsType = {
    subtitle?: string;
    modelWork?: string;
    city?: string;
    company?: string;
    date?: string;
    description?: string;

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
                    <Icon iconId={"code"}/>
                    <span>{props.city}</span>
                </TagsItem>
                <TagsItem>
                    <Icon iconId={"code"} />
                    <span>{props.company}</span>
                </TagsItem>
                <TagsItem style={{ marginLeft: "auto" }}>
                    <Icon iconId={"code"}/>
                    <time dateTime={props.date}>{props.date}</time>
                </TagsItem>

            </Tags>

            <p>{props.description}</p>
        </StyledSubitem>

    );
};

const StyledSubitem = styled.div`
    position: relative;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    
    p {
        padding: 0;
        margin: 0;
        margin-left: 1rem;
    }
    
    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #EBEAED;
        //background: linear-gradient(to right, #E70FAA, #00C0FD);
        border-radius: 2px;
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
        
`;

const TagsItem = styled.div`
    position: relative;
    gap: 1rem;
    padding-bottom: 1rem;
    

    svg {
        width: 12px;
        height: 12px;
        fill: #EBEAED;
    }

    
`