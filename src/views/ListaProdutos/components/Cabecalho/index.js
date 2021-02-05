import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Sacola from '../../../../shared/components/sacola';
import { COR_DE_FUNDO, FONT_FAMILY_BOLD, FONT_FAMILY_REGULAR, FONT_SIZE_XX_LARGE } from '../../../../styles/styles';

const Cabecalho = () => {
    return (
        <>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Lighteria</Text>
                <Sacola />
            </View>
            <View style={styles.containerDescricao}>
                <View style={styles.containerSeparador} />
                <View style={styles.containerTexto}>
                <Text style={styles.textoDescricao}>Categorias</Text>
                </View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    containerTitulo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 6
    },
    titulo: {
      fontFamily: FONT_FAMILY_BOLD,
      fontSize: FONT_SIZE_XX_LARGE,
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
    containerDescricao: {
      zIndex: -1
    },
    containerSeparador: {
      borderWidth: 0.5,
      borderColor: '#A1A5AA'
    },
    containerTexto: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: -46
    },
    textoDescricao: {
      padding: 34,
      backgroundColor: COR_DE_FUNDO,
      fontSize: 16,
      fontFamily: FONT_FAMILY_REGULAR,
      color: '#A1A5AA'
    }
  })

export default Cabecalho;