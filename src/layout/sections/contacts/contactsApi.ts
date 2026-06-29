export type FormValues = { name: string; email: string; message: string };

const ENDPOINT = "https://formspree.io/f/xwvdqbeq";

export const sendMessage = async (values: FormValues): Promise<void> => {
    const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error("Failed to send message");
};
