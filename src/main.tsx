import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {GlobalStyled} from "./styles/Global.Styled.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <GlobalStyled/>
        <App/>
    </StrictMode>,
)
