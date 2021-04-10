import axios from 'axios';

export default async function Fetcher(query: string) {
    const res = await axios.get(query);

    return res.data;
}