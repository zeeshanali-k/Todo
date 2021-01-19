import React,{useState} from 'react';
import { StyleSheet, View , Button , TextInput } from 'react-native';

export default function Adder(props){
  
const [txt,setTxt]=useState("")

function textChanged(str){
    setTxt(str)
}

function onAddPress(){
  props.onAdded(txt)
  setTxt("")
}

return(
        <View style={adderStyles.container_row}>

            <TextInput 
              style={adderStyles.input}
              placeholder="Todo..."
              onChangeText={textChanged}>{txt}</TextInput>

            <Button 
              accessibilityLabel="Hello there"
              onPress={onAddPress}
              style={adderStyles.btnStyle}
              title="Add"
              />

      </View>
  );
}

const adderStyles=StyleSheet.create({
  container_row: {
    flex:1,
    flexDirection:"row",
    backgroundColor:"#fff",
    padding : 10 ,
    alignItems: 'center',
    justifyContent:'center',
    margin:5,
  },
    input:{
        padding:10,
        borderBottomColor: "#000",
        borderBottomWidth:1,
        borderTopWidth:1,
        borderStartWidth:1,
        borderStartWidth:1,
        borderTopColor:"#eee",
        borderStartColor:"#eee",
        borderEndColor:"#eee",
        marginHorizontal:10,
        fontSize:17,
        flex:2,
        backgroundColor:"#00000020",
      },
      btnStyle:{
        backgroundColor:"#ff21ff",
        borderRadius:10,
        flex:1,
      }
})