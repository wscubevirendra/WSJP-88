import axios from 'axios';
import { toast } from 'react-toastify';


function generateSlug(text) {
    return text.toString()
        .toLowerCase() // Convert to lowercase
        .trim() // Remove leading/trailing spaces
        .replace(/[\s\W-]+/g, '-') // Replace spaces and non-word characters with hyphens
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
    slugRef.current.value = slug
}

const notify = (msg, flag) =>
    toast(msg, { type: flag === true ? "success" : "error" });


const AxiosApiInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

export { generateSlug, AxiosApiInstance, notify }