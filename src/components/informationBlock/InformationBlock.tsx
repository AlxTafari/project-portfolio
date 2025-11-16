import styled from "styled-components";


type InformationBlockPropsType = {
    children?: React.ReactNode;
    title?: string;
    subtitle?: string;
    description?: string;
    modelWork?: string
    textAlign?: string;
    marginBottom?: string;

};

export const InformationBlock = (props: InformationBlockPropsType) => {
    return (
        <StyledInformationBlock textAlign={props.textAlign} marginBottom={props.marginBottom}>

            <h2>{props.title}</h2>
            {props.children}
            <p>{props.description}</p>

        </StyledInformationBlock>
    );
};

const StyledInformationBlock = styled.div<InformationBlockPropsType>`
    h2 {
        font-size: 48px;
        margin-bottom: 38px;
    }
    p {
        font-size: 26px;
    }
    
    text-align: ${props => props.textAlign || "left"};
    margin-bottom: ${props => props.marginBottom || "0px"};
`
