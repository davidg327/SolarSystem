export const normalizeText = (text: string) =>
    text.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
