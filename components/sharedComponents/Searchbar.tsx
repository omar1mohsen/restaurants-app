import { LocationContext } from '@/services/location/location.context';
import { AntDesign } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchbarComponent = () => {
    const {keyword,search} = useContext(LocationContext)
    const [searchQuery, setSearchQuery] = React.useState(keyword);

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
                onEndEditing={()=> search(searchQuery)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:16
    }
})

export default SearchbarComponent;
