import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator,Image, FlatList, Text, View } from 'react-native';


export default NextScreen=()=>{
    const [isLoading, setLoading] = useState(true);
    const [profiles, setProfiles] = useState([
        {id:0,first_name: "Zeeshan"}
    ]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then((response) => response.json())
      .then((res) => {
          (res.data).forEach((element) => {
            let name=element.first_name;
            console.log(name);
              setProfiles([...profiles,
                {id:element.id,
                first_name: element.first_name.toString()
                }])
            });
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);


    return(
        <View style={nextStyle.main}>
          <StatusBar style="inverted" backgroundColor="#bbb"/>

          { isLoading?
            <ActivityIndicator animating={isLoading} 
            hidesWhenStopped={true} 
            size="large"
            color="#bbbbb" /> ://else
            <View style={{flex:1}}>
            <FlatList
                    keyExtractor={item=>item.id.toString()}
                    data={profiles}
                    renderItem={({item})=>{
                        return(
                        <View style={nextStyle.itemStyle}>
                          <Text style={nextStyle.tvStyle}>{item.text}</Text>
                        </View>
                      )}
                    }
                />
                </View>
            }
          
        </View>
    )
}

const nextStyle=StyleSheet.create({
    main:{
        flex:1,
        flexDirection:"column",
        alignItems:"center",
    },
    itemStyle:{
        flexDirection:"row",
        flex:1,
        backgroundColor:"#bbb",
        padding:5,
    },
    tvStyle:{
        padding:5,
        backgroundColor:"#ff21ff",
        margin:5,
        // flex:3,
      },
})