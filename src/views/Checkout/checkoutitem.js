import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { 
    FONT_FAMILY_REGULAR, 
    FONT_SIZE_MEDIUM, 
    FONT_SIZE_SMALL, 
    WHITE, 
    FONT_FAMILY_LIGHT, 
    FONT_FAMILY_SEMI_BOLD
} from '../../styles/styles';
import { formataValor } from '../../utils/utils';

const CheckoutItem = ({ titulo, imagem, itemName, preco, quantidade }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imagemContainer}>
                <Image source={imagem} style={styles.imagem} />
            </View>
            <View style={styles.descContainer}>
                <Text style={styles.descTextoSuperior}>{itemName}</Text>
                <Text style={styles.descTextoInferior}>{titulo}</Text>
            </View>
            <View style={styles.precoContainer}>
                <Text style={styles.precoTexto}>{formataValor(preco * quantidade)}</Text>
                <Text style={styles.precoTexto}>Qtd: {quantidade}</Text>
            </View>
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: WHITE,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
    },
    imagemContainer: {
        flex: 20,
        backgroundColor: '#F7F8FC',
        padding: 18,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imagem: {
        width: 40,
        height: 50,
    },
    descContainer: {
        flex: 25,
        padding: 18,
        justifyContent: 'center'
    },
    descTextoSuperior: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: FONT_SIZE_MEDIUM,
        fontWeight: 'bold'
    },
    descTextoInferior: {
        fontFamily: FONT_FAMILY_LIGHT,
        fontSize: FONT_SIZE_SMALL
    },
    precoContainer: {
        flex: 35,
        padding: 18,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    precoTexto: {
        fontFamily: FONT_FAMILY_REGULAR
    }
});

export default CheckoutItem;