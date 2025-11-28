import {useState} from "react";
import {S} from "../Header_Styles.ts";
import {Menu} from "../menu/Menu.tsx";

export const MobileMenu = (props: { menuItem: Array<{ title: string; link: string }> }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
                <Menu menuItem={props.menuItem}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    )

};