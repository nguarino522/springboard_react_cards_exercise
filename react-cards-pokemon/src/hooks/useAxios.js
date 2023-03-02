import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from 'uuid';

const useAxios = (baseUrl, key) => {
    const [cards, setCards] = useState([]);

    const addCard = async (options) => {
        const resp = await axios.get(key === "pokemon" ? baseUrl + options : baseUrl);
        setCards(cards => [...cards, { ...resp.data, id: uuid() }]);
    }

    const removeCards = () => setCards([]);

    return [cards, addCard, removeCards];
}

export default useAxios;