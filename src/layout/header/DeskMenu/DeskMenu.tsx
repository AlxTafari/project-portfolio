import {S} from "../Header_Styles.ts"
import {Menu} from "../menu/Menu.tsx";


export const DeskMenu = (props: { menuItem: Array<{ title: string; link: string }> }) => {
    return (
        <S.DeskMenu>
          <Menu menuItem={props.menuItem} />
        </S.DeskMenu>
    );
};
