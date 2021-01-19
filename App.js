import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, View ,Text, Alert , FlatList } from 'react-native';
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
      <StatusBar style="auto" />
         <Adder style={{flex:1}} onAdded={clickListener}/>
       <FlatList
          style={{flex:3}}
          data={todos}
          renderItem={({item})=>(
              <Text style={styles.itemStyle}>{item.text}</Text>
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
  },
  itemStyle:{
    padding:5,
    backgroundColor:"#ff21ff",
    margin:5,
  }
});
