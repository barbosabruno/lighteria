import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FONT_FAMILY_SEMI_BOLD, FONT_SIZE_SMALL, LIGHTBLUE, WHITE } from '../../styles/styles';

const Botao = ({ titulo, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.botaoContainer}>
                <Text style={styles.botaoTexto}>{titulo}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    botaoContainer: {
        backgroundColor: LIGHTBLUE,
        padding: 16,
        borderRadius: 6,
    },
    botaoTexto: {
        fontFamily: FONT_FAMILY_SEMI_BOLD,
        fontSize: FONT_SIZE_SMALL,
        color: WHITE
    }
});

export default Botao;