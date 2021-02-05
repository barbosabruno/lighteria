import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export const Item = ({ id, titulo, imagem, estudio, itemName, preco, itemDesc }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={styles.containerItem} 
            onPress={() => navigation.push('DetalhesProduto', {
                id, 
                titulo,
                imagem,
                estudio,
                itemName,
                preco,
                itemDesc,
            })}
        >
            <Image source={imagem} style={styles.imagem} resizeMode="contain" />
            <Text style={styles.texto}>{titulo}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        height: 168,
        backgroundColor: '#fff',
        borderRadius: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    imagem: {
        height: 84
    },
    texto: {
        marginTop: 8,
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 14,
        color: '#848486',
    }
})