import { Text, View,Button,TextInput } from 'react-native'
import React, {useState } from 'react'
import {useDispatch} from 'react-redux'


const Primary = () => {
    const [text ,setText ] = useState ('');
    const dispatch = useDispatch();

    const handleAdd = () => {
            dispatch({type:'ADD_NAME', payload:{name: text}});
    };

    return (
    
      <View>
        <Text style={{fontSize:30}}>Primary</Text>
        <View style={{borderWidth:1,margin:10,padding:5,borderColor:'#e0e0e0'}}>
        <TextInput 
        value={text}
        onChangeText={setText}
        placeholder='isim giriniz' />
        </View>

        <Button title='ekle' onPress={handleAdd}></Button>
      </View>
    )
}
 export default Primary;