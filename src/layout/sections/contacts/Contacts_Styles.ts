import styled from "styled-components";
import { theme } from "../../../styles/Theme.ts";

export const S = {
    Section: styled.section``,

    Form: styled.form`
        max-width: 540px;
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin: 0 auto;
        padding: 16px 0;
    `,

    FieldGroup: styled.div`
        display: flex;
        flex-direction: column;
        gap: 6px;

        label {
            font-family: Poppins, sans-serif;
            font-size: 12px;
            font-weight: 500;
            color: ${theme.colors.secondaryFont};
            letter-spacing: 0.04em;
        }

        textarea {
            resize: none;
            height: 155px;
        }
    `,

    Field: styled.input<{ $hasError?: boolean }>`
        width: 100%;
        border: 1px solid ${({ $hasError }) => $hasError ? theme.colors.accent : theme.colors.borderColor};
        background-color: ${theme.colors.secondaryBg};
        padding: 8px 14px;
        border-radius: 4px;
        font-family: Poppins, sans-serif;
        font-weight: 400;
        font-size: 12px;
        letter-spacing: 0.05em;
        color: ${theme.colors.font};

        ::placeholder {
            color: ${theme.colors.placeholderColor};
        }

        &:focus-visible {
            outline: 2px solid ${({ $hasError }) => $hasError ? theme.colors.accent : theme.colors.borderColor};
        }
    `,

    ErrorText: styled.span`
        font-family: Poppins, sans-serif;
        font-size: 11px;
        font-weight: 400;
        color: ${theme.colors.accent};
    `,

    CharCount: styled.span`
        font-family: Poppins, sans-serif;
        font-size: 11px;
        color: ${theme.colors.placeholderColor};
        text-align: right;
    `,

    SuccessMessage: styled.p`
        max-width: 540px;
        margin: 0 auto;
        padding: 24px 0;
        font-family: Poppins, sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: ${theme.colors.font};
        text-align: center;
    `,

    Button: styled.button`
        width: auto;
        height: auto;
        font-weight: 300;
        font-size: 16px;
        padding: 6px;
        border-radius: 4px;
        background-color: ${theme.colors.secondaryBg};
        color: ${theme.colors.secondaryFont};
        border: 1px solid ${theme.colors.borderColor};
        cursor: pointer;
        position: relative;
        z-index: 0;
        transition: color 0.5s ease;

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            height: 0;
            border: 2px solid transparent;
            border-top-left-radius: 4px;
            transition: height 0.5s ease, border-color 0.5s ease;
            z-index: -1;
        }

        &:hover:not(:disabled) {
            color: ${theme.colors.accent};

            &::before {
                height: 100%;
                border-color: ${theme.colors.accent};
                border-bottom-left-radius: 4px;
            }
        }

        &:focus-visible {
            outline: 2px solid ${theme.colors.borderColor};
        }
    `,
};
