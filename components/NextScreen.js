import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator,Image, FlatList, Text, View } from 'react-native';


export default NextScreen=()=>{
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then((response) => response.json())
      .then((res) => {
          res.data.forEach(element => {
              setData(prev=>prev.push(element))
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
                    keyExtractor={item=>item.id}
                    data={data}
                    renderItem={(item)=>(
                        <View style={nextStyle.itemStyle}>
                            {/* <Image style={{flex:1, width:50,height:50, margin:1}} 
                            source={{uri:item.avatar}} /> */}
                            <Text style={{flex:3, padding:1,fontSize:20}}>{item.first_name}</Text>
                        </View>
                    )} />
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
        justifyContent:"center",
    },
    itemStyle:{
        flexDirection:"row",
        flex:1,
        backgroundColor:"#bbb",
        padding:5,
    }
})