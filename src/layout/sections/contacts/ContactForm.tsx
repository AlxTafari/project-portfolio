import { useState } from "react";
import { FormValues, sendMessage } from "./contactsApi.ts";
import { S } from "./Contacts_Styles.ts";

type FormErrors = Partial<FormValues>;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (vals: FormValues): FormErrors => {
    const errs: FormErrors = {};
    if (vals.name.trim().length < 2) errs.name = "Name is required (min. 2 characters)";
    if (!emailRegex.test(vals.email)) errs.email = "Please enter a valid e-mail";
    if (vals.message.trim().length < 10) errs.message = "Message is too short (min. 10 characters)";
    return errs;
};

export const ContactForm = () => {
    const [values, setValues] = useState<FormValues>({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState<FormErrors>({});
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues(prev => ({ ...prev, [name]: value }));
        // сбрасываем ошибку поля как только пользователь начал его исправлять
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errs = validate(values);
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setLoading(true);
        setSubmitError(false);
        try {
            await sendMessage(values);
            setSent(true);
        } catch {
            setSubmitError(true);
        } finally {
            setLoading(false);
        }
    };

    if (sent) {
        return <S.SuccessMessage>✓ Message sent! I'll get back to you soon.</S.SuccessMessage>;
    }

    return (
        <S.Form onSubmit={handleSubmit} noValidate>
            <S.FieldGroup>
                <label htmlFor="name">Name</label>
                <S.Field
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    autoComplete="name"
                    maxLength={50}
                    value={values.name}
                    onChange={handleChange}
                    $hasError={!!errors.name}
                />
                {errors.name && <S.ErrorText>{errors.name}</S.ErrorText>}
            </S.FieldGroup>

            <S.FieldGroup>
                <label htmlFor="email">E-mail</label>
                <S.Field
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    maxLength={100}
                    value={values.email}
                    onChange={handleChange}
                    $hasError={!!errors.email}
                />
                {errors.email && <S.ErrorText>{errors.email}</S.ErrorText>}
            </S.FieldGroup>

            <S.FieldGroup>
                <label htmlFor="message">Message</label>
                <S.Field
                    as="textarea"
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    maxLength={1000}
                    value={values.message}
                    onChange={handleChange}
                    $hasError={!!errors.message}
                />
                <S.CharCount>{values.message.length}/1000</S.CharCount>
                {errors.message && <S.ErrorText>{errors.message}</S.ErrorText>}
            </S.FieldGroup>

            {submitError && (
                <S.ErrorText>Something went wrong. Please try again.</S.ErrorText>
            )}
            <S.Button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
            </S.Button>
        </S.Form>
    );
};
