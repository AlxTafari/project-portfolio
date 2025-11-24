import styled from "styled-components";
import {Icon} from "../icon/Icon.tsx";
import {theme} from "../../styles/Theme.ts";
import {GridWrapper} from "../gridWrapper/GridWrapper.tsx";
import {FlexWrapper} from "../flexWrapper/FlexWrapper.tsx";
import {font} from "../../styles/Common.ts";

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
                <GridWrapper columnTemplate="1fr 1fr" gap={"10px"}>
                    <FlexWrapper justify={"space-between"} align={"center"}>
                        <Tag>
                            <Icon iconId={"building"} width={"12px"} height={"12px"} viewBox={"0 0 12 12"}/>
                            <span>{props.company}</span>
                        </Tag>
                        <Tag>
                            <Icon iconId={"location"} width={"12px"} height={"12px"} viewBox={"0 0 12 12"}/>
                            <span>{props.city}</span>
                        </Tag>
                    </FlexWrapper>
                    <FlexWrapper justify={"flex-end"} align={"center"}>
                        <Tag>
                            <Icon iconId={"date"} width={"16px"} height={"12px"} viewBox={"0 0 16 12"}/>
                            <time dateTime={props.date}>{props.date}</time>
                        </Tag>
                    </FlexWrapper>
                </GridWrapper>
            </Tags>
        </StyledSubitem>

    );
};

const StyledSubitem = styled.div`
    position: relative;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    color: ${theme.colors.secondaryFont};

`

const StyledSubTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    h3 {
        ${font({Fmax: 20, Fmin: 16, weight: 400})};
    }
    
    span {
        ${font({Fmax: 10, Fmin: 10, weight: 400})};
        white-space: nowrap;
        position: relative;
        z-index: 2;
        
        &::before {
            content: '';
            position: absolute;
            top: -30%;
            left: -20%;
            width: 140%;
            height: 20px;
            border: ${theme.colors.borderColor} 5px solid;
            background-color: ${theme.colors.borderColor};
            border-radius: 20px;
            z-index: -1;
        }
        
    }
`

const Tags = styled.div`

    gap: 1rem;
    position: relative;
    padding: 10px 0 20px 0;
    ${font({Fmax: 14, Fmin: 12, weight: 50, color: theme.colors.secondaryFont})};

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: linear-gradient(to right, #E70FAA, #00C0FD);
        border-radius: 2px;
        white-space: nowrap;

        svg {
            fill: ${theme.colors.secondaryFont};
        }

        @media ${theme.media.mobile} {
            span {

            }
        }

`;

const Tag = styled.div`
`