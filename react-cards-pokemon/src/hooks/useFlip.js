import { useState } from "react";

const useFlip = (initialState) => {
    
    const [isFlipped, setFlipped] = useState(initialState);

    const flipCard = () => {
        setFlipped(value => !value)
    }
    return [isFlipped, flipCard]
}

export default useFlip;