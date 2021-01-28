import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet,TouchableNativeFeedback ,ActivityIndicator,Image, FlatList, Text, View, Button, Alert } from 'react-native';


export default NextScreen=({navigation,route})=>{
    const [isLoading, setLoading] = useState(true);
    const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page='+route.params.page)
      .then((response) => response.json())
      .then((res) => {
        setProfiles(res.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


    return(
        <View style={nextStyle.main}>
          <StatusBar style="inverted" backgroundColor="#bbb"/>
          { route.name==="AnotherNextScreen"?
            null:
            <Button title="Next Page" onPress={()=>{navigation.navigate("AnotherNextScreen",
                  {"page":(route.params.page+1)});

              }} />
          }

          { 
          //loading
          isLoading?
            <ActivityIndicator
            style={{alignSelf:"center"}}
            size="large"
            alignSelf="center"
            color="#bbbbb" /> ://else
            //list
            <FlatList
                    keyExtractor={(item)=>item.id.toString()}
                    data={profiles}
                    renderItem={({item})=>{
                        return(
                        <TouchableNativeFeedback onPress={()=>Alert.alert("You clicked "+item.id)}>
                          <View  style={nextStyle.itemStyle}>
                            <Image 
                            style={{width:70,height:70}}
                            source={{uri:item.avatar}}
                            />
                            <View style={{flex:1, flexDirection:"column"}}>
                            <Text style={{padding:5,margin:5, flex:1,}}> {item.first_name} {item.last_name}</Text>
                            <Text style={{padding:5,margin:5, flex:1,}}> {item.email} </Text>
                            </View>
                          </View>
                        </TouchableNativeFeedback>
                      )}
                    }
                />
            }
          
        </View>
    )
}

const nextStyle=StyleSheet.create({
    main:{
        flex:1,
        flexDirection:"column",
    },
    itemStyle:{
        flexDirection:"row",
        flex:1,
        backgroundColor:"#bbb",
        padding:5,
        margin:5,
    },
})