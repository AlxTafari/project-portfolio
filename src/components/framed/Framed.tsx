import styled from "styled-components";

const angles = ["15deg", "30deg", "45deg", "60deg", "70deg"]

export const Framed = ({children}: { children: React.ReactNode }) => {
    return (
            <FramedWrapper>
                {angles.map((deg, i) => (
                    <Square key={i} rotate={deg}/>
                ))}
                {children}
            </FramedWrapper>
    );
};

const Square = styled.div<{ rotate: string }>`
    position: absolute;
    width: 120%;
    height: 120%;
    border: 1px solid;
    border-image: linear-gradient(90deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.3)) 1;
    transform: rotate(${p => p.rotate});
    top: -10%;
    left: -5%;
    z-index: -1;
`

const FramedWrapper = styled.div`
    display: inline-block;
    position: relative;
    z-index: 1;
    
`
