import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator,Image, FlatList, Text, View } from 'react-native';


export default NextScreen=()=>{
    const [isLoading, setLoading] = useState(true);
    const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
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

          { isLoading?
            <ActivityIndicator
            style={{alignSelf:"center"}}
            size="large"
            color="#bbbbb" /> ://else
            <FlatList
                    keyExtractor={(item)=>item.id.toString()}
                    data={profiles}
                    renderItem={({item})=>{
                        return(
                        <View style={nextStyle.itemStyle}>
                          <Image 
                          style={{width:100,height:100}}
                          source={{uri:item.avatar}}
                          />
                          <Text style={nextStyle.tvStyle}>{item.first_name}</Text>
                        </View>
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
    tvStyle:{
        padding:5,
        backgroundColor:"#ff21ff",
        margin:5,
        flex:3,
      },
})