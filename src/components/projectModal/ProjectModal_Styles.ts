import styled from "styled-components";
import { theme } from "../../styles/Theme.ts";
import { font } from "../../styles/Common.ts";

export const S = {
    Overlay: styled.div`
        position: fixed;
        inset: 0;
        background: rgba(0, 0, 0, 0.75);
        z-index: 1000;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    `,

    Window: styled.div`
        position: relative;
        background: ${theme.colors.secondaryBg};
        border-radius: 20px;
        width: 100%;
        max-width: 900px;
        max-height: 90vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        box-shadow: ${theme.colors.shadow};
    `,

    CloseButton: styled.button`
        position: absolute;
        top: 14px;
        right: 14px;
        z-index: 10;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.55);
        border: none;
        color: ${theme.colors.font};
        font-size: 16px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s;

        &:hover {
            background: ${theme.colors.accent};
        }
    `,

    // position: absolute внутри Overlay — не участвует в flex-выравнивании
    ArrowButton: styled.button<{ $side: "left" | "right" }>`
        position: absolute;
        ${({ $side }) => $side}: 20px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 1001;
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background: ${theme.colors.secondaryBg};
        border: 1px solid ${theme.colors.borderColor};
        color: ${theme.colors.font};
        font-size: 24px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.2s, border-color 0.2s;

        &:hover {
            background: ${theme.colors.accent};
            border-color: ${theme.colors.accent};
        }

        @media ${theme.media.tablet} {
            display: none;
        }
    `,

    Banner: styled.div`
        width: 100%;
        height: 220px;
        flex-shrink: 0;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    `,

    Body: styled.div`
        display: flex;
        flex: 1;
        overflow: hidden;

        @media ${theme.media.tablet} {
            flex-direction: column;
        }
    `,

    Sidebar: styled.aside`
        width: 180px;
        flex-shrink: 0;
        padding: 24px 20px;
        border-left: 1px solid ${theme.colors.borderColor};
        overflow-y: auto;

        @media ${theme.media.tablet} {
            width: 100%;
            border-left: none;
            border-top: 1px solid ${theme.colors.borderColor};
            padding: 16px 24px;
        }
    `,

    SidebarTitle: styled.h4`
        ${font({ weight: 600, Fmin: 11, Fmax: 13, color: theme.colors.secondaryFont })};
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: 12px;
    `,

    TechList: styled.ul`
        display: flex;
        flex-direction: column;
        gap: 10px;

        @media ${theme.media.tablet} {
            flex-direction: row;
            flex-wrap: wrap;
            gap: 12px;
        }
    `,

    TechItem: styled.li`
        ${font({ weight: 400, Fmin: 13, Fmax: 14 })};
        display: flex;
        align-items: center;
        gap: 8px;

        /* акцентная точка вместо рамки */
        &::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: ${theme.colors.accent};
            flex-shrink: 0;
        }
    `,

    Content: styled.div`
        flex: 1;
        padding: 28px 32px;
        overflow-y: auto;

        @media ${theme.media.tablet} {
            padding: 20px 24px;
        }
    `,

    ContentTitle: styled.h2`
        ${font({ weight: 600, Fmin: 20, Fmax: 26 })};
        margin-bottom: 14px;
    `,

    ContentDescription: styled.p`
        ${font({ weight: 300, Fmin: 14, Fmax: 16, color: theme.colors.secondaryFont })};
        line-height: 1.7;
        margin-bottom: 24px;
    `,

    // заглушка — сюда в будущем: галерея, ссылки, демо-видео и т.д.
    ContentPlaceholder: styled.div`
        border: 1px dashed ${theme.colors.borderColor};
        border-radius: 12px;
        padding: 20px;
        text-align: center;
        ${font({ weight: 300, Fmin: 13, Fmax: 14, color: theme.colors.placeholderColor })};
    `,
};
