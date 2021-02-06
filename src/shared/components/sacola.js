import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FONT_FAMILY_SEMI_BOLD, RED, WHITE } from '../../styles/styles';
import { DataContext } from '../../provider';

const Sacola = () => {

    const navigation = useNavigation();

    const { itensCheckout } = useContext(DataContext);

    return (
        <TouchableOpacity onPress={() => navigation.push('Checkout')}>
            <View style={styles.containerSacola}>
                <Image
                    source={require('../../assets/images/icone-sacola.png')}
                    style={styles.imagem}
                />
                {!!itensCheckout?.length && (
                    <View style={styles.containerQuantidade}>
                        <Text style={styles.textoQuantidade}>
                            {itensCheckout.reduce(
                                (acumulador, atual) => acumulador + atual.quantidade, 0
                            )}
                        </Text>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    containerSacola: {
        backgroundColor: WHITE,
        padding: 18,
        borderRadius: 30
    },
    imagem: {
        height: 30,
        width: 30,
    },
    containerQuantidade: {
        backgroundColor: RED,
        borderRadius: 100,
        marginTop: -22,
        marginLeft: 11
    },
    textoQuantidade: {
        textAlign: 'center',
        padding: 4,
        fontSize: 10,
        fontFamily: FONT_FAMILY_SEMI_BOLD,
        color: WHITE
    }
})

export default Sacola;