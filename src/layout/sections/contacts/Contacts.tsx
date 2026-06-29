import { SectionTitle } from "../../../components/sectionTitle/SectionTitle.tsx";
import { FlexWrapper } from "../../../components/flexWrapper/FlexWrapper.tsx";
import { Container } from "../../../components/container/Container.ts";
import { ContactForm } from "./ContactForm.tsx";
import { S } from "./Contacts_Styles.ts";

export const Contacts = () => (
    <S.Section id="contact">
        <Container>
            <FlexWrapper>
                <SectionTitle title="For any questions please message me"/>
            </FlexWrapper>
            <ContactForm />
        </Container>
    </S.Section>
);
