import React, { useState } from 'react';

export const DataContext = React.createContext();

const Provider = ({ children }) => {
    
    const [itensCheckout, setItensCheckout] = useState([]);

    return (
        <DataContext.Provider value={{
            itensCheckout,
            adicionarItem: (novoItem) => {
                console.log(`Item adicionado: ${JSON.stringify(novoItem)}`);
                console.log('Itens: ', itensCheckout);
                let copiaItensCheckout = [...itensCheckout];
                let itemFiltrado = copiaItensCheckout.find(item => item.id === novoItem.id);

                if (itemFiltrado) {
                    itemFiltrado.quantidade = itemFiltrado.quantidade + 1;
                } else {
                    novoItem.quantidade = 1;
                    copiaItensCheckout = [...copiaItensCheckout, novoItem];
                }

                setItensCheckout(copiaItensCheckout);
            }
        }}>
            {children}
        </DataContext.Provider>
    );
}

export default Provider;
