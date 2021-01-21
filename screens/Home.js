import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, View ,Text, Alert ,Image, FlatList, Button } from 'react-native';
import Adder from '../components/Adder';

var count=0;

export default function Home({navigation}) {

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
      <Button title="Next"  onPress={()=>navigation.navigate("NextScreen")}/>
    <Adder style={{flex:1}} onAdded={clickListener}/>
      
      <View style={{flex:3}}>

      <FlatList
          data={todos}
          renderItem={({item})=>(
            <View style={styles.list_style}>
              <Text style={styles.itemStyle}>{item.text}</Text>
            </View>
          )}
        />
        </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container_col: {
    backgroundColor:"#fff",
    flex:1,
    alignItems:"center",
    flexDirection:"column",
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
