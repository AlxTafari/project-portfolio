import {theme} from "./Theme.ts";

type FontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmin?: number,
    Fmax?: number,

}

export const font= ({family, weight, color, lineHeight, Fmax, Fmin} : FontPropsType) => `
    font-family: ${family || "Poppins" };
    font-weight: ${weight || 400 };
    color: ${color || theme.colors.font };
    line-height: ${lineHeight || 1.2 };
    font-size: calc( (100vw - 360px)/(1600 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px); 
`

type FluidSizeProps = {
    minWidth: number;
    maxWidth: number;
    minHeight: number;
    maxHeight: number;
};

export const fluidSize = ({ minWidth, maxWidth, minHeight, maxHeight }: FluidSizeProps) => `
  width: calc((100vw - 360px) / (1600 - 360) * (${maxWidth} - ${minWidth}) + ${minWidth}px);
  height: calc((100vw - 360px) / (1600 - 360) * (${maxHeight} - ${minHeight}) + ${minHeight}px);
`;