import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, View ,Text, Alert ,Image, FlatList } from 'react-native';
import Adder from './components/Adder';
var count=0;

export default function App() {

const [todos,setTodo]=useState([])

function clickListener(txt){
  if(txt!==""){
    count=count+1
    setTodo(
      [...todos,{ text:txt, key:count.toString()} ]
    )
  }else{
    Alert.alert("Please enter something to proceed!")
    }
}

  return (
    
    <View style={styles.container_col}>
      <StatusBar style="inverted" backgroundColor="#bbb"/>
      
      <Adder style={{flex:1}} onAdded={clickListener}/>
      
      <FlatList
          style={{flex:3}}
          data={todos}
          renderItem={({item})=>(
            <View style={styles.list_style}>
              <Image
              style={styles.tinyLogo}
              source={{uri:"../circle.png"}}
              />
              <Text style={styles.itemStyle}>{item.text}</Text>
            </View>
          )}

        />
    </View>
  );

}

const styles = StyleSheet.create({
  container_col: {
    backgroundColor:"#fff",
    alignItems: 'center',
    flex:1,
    flexDirection:"column",
    borderColor:"#bbb",
    borderWidth:1,
    marginTop:25,
    marginStart:5,
    marginEnd:5,
    marginBottom:5,
  },

  list_style:{
    flexDirection:'row',
    flex:1,
  },

  itemStyle:{
    padding:5,
    backgroundColor:"#ff21ff",
    margin:5,
    // flex:3,
  },
  
  tinyLogo:{
    width:50,
    height:50,
    flex:1,
  }
});
