import React from "react";
import {Text,FlatList, View} from 'react-native';
import {useSelector} from 'react-redux';

const Secondary = () => {

    const list = useSelector(s => s.nameList);

    return(
        <View>
            <Text style = {{fontSize:30}}>
                Secondary
            </Text>
            <FlatList 
            keyExtractor={(_, index) => index.toString()}
            data={list} 
            renderItem={({item}) => <Text>{item}</Text>}
            />
        </View>
    )
}
export default Secondary;