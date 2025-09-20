import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchbarComponent = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <View style={styles.container}>
            <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
                clearIcon={()=><AntDesign name="close" size={24} color="black" />}
                style={{
                    // borderRadius:0,
                    boxShadow:"0 0 8px 0 #0006"
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:15
    }
})

export default SearchbarComponent;
