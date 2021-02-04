import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Cabecalho from '../Cabecalho';
import { Item } from '../Produto';

// Mock - usually data comes from an api
import { DATA } from '../../../../utils/data';

const ListaProdutos = () => {
    return (
        <View style={styles.container}>
            <FlatList 
                numColumns={2}
                data={DATA}
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={item => item.id}
                ListHeaderComponent={
                    <Cabecalho />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 24
    }
})

export default ListaProdutos;