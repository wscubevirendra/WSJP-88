import { createContext, useState } from 'react';
const Context = createContext();

function Store({ children }) {
    const [count, setCount] = useState(200);
    function incHandler() {
        setCount(count + 1)
    }
    return (
        <Context.Provider value={{ count, incHandler }}>
            {children}
        </Context.Provider>
    )
}

export default Store;
export { Context };

