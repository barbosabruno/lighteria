import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import Botao from '../../../../shared/components/botao';
import {
    BLACK,
    FONT_FAMILY_BOLD,
    FONT_FAMILY_REGULAR,
    FONT_SIZE_LARGE,
    FONT_SIZE_MEDIUM,
    FONT_SIZE_SMALL,
    FONT_SIZE_X_LARGE,
    LIGHTERGRAY,
    LIGHTGRAY,
    WHITE
} from '../../../../styles/styles';
import { formataValor } from '../../../../utils/utils';

const DescricaoItem = ({ id, titulo, imagem, estudio, itemName, preco, itemDesc }) => {

    const navigation = useNavigation();

    return (
        <View style={styles.itemContainer}>
            <View style={styles.itemPosicao}>
                <View style={styles.item}>
                    <View style={styles.textoPosicao}>
                        <View>
                            <Text style={styles.textoSuperior}>{estudio}</Text>
                            <Text style={styles.textoMedio}>{itemName}</Text>
                            <Text style={styles.textoInferior}>{titulo}</Text>
                        </View>
                        <Image source={imagem} style={styles.imagem} />
                    </View>
                    <Text style={styles.textoDescricao}>{itemDesc}</Text>
                    <View style={styles.rodape}>
                        <Text style={styles.moeda}>{formataValor(preco)}</Text>
                        <Botao titulo={'COMPRAR'} onPress={() => navigation.push('Checkout')} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 4,
        marginTop: -60
    },
    itemPosicao: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        backgroundColor: WHITE,
        borderRadius: 30,
        padding: 28,
        width: '80%',
        elevation: 4
    },
    textoPosicao: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textoSuperior: {
        fontFamily: FONT_FAMILY_BOLD,
        fontWeight: 'bold',
        fontSize: FONT_SIZE_MEDIUM,
        marginBottom: 4,
    },
    textoMedio: {
        fontFamily: FONT_FAMILY_BOLD,
        fontWeight: 'bold',
        fontSize: FONT_SIZE_X_LARGE,
        marginBottom: 4
    },
    textoInferior: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: FONT_SIZE_SMALL,
        color: LIGHTGRAY,
        marginBottom: 12
    },
    imagem: {
        width: 30,
        height: 72
    },
    textoDescricao: {
        fontFamily: FONT_FAMILY_REGULAR,
        fontSize: FONT_SIZE_SMALL,
        marginTop: 10,
        color: LIGHTERGRAY
    },
    rodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16
    },
    moeda: {
        fontFamily: FONT_FAMILY_BOLD,
        fontWeight: 'bold',
        fontSize: FONT_SIZE_LARGE,
        color: BLACK,
    }
});

export default DescricaoItem;