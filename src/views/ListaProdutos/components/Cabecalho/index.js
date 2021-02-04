import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Cabecalho = () => {
    return (
        <>
            <View style={styles.containerTitulo}>
                <Text style={styles.titulo}>Lighteria</Text>
                <View style={styles.containerSacola}>
                <Image
                    source={require('../../../../assets/images/icone-sacola.png')}
                    style={styles.imagem} />
                </View>
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
      fontFamily: 'OpenSans-Bold',
      fontSize: 28,
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },
    containerSacola: {
      backgroundColor: '#fff',
      padding: 18,
      borderRadius: 30
    },
    imagem: {
      height: 30,
      width: 30,
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
      backgroundColor: '#F4F0F4',
      fontSize: 16,
      fontFamily: 'OpenSans-Regular',
      color: '#A1A5AA'
    }
  })

export default Cabecalho;