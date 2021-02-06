import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const formataValor = (valor) => 
    new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })
    .format(valor)
    .replace(/^(\D+)/, '$1 '); // R$ 10,00 (adiciona espaço entre o símbolo e o valor)