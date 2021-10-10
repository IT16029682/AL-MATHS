import React, { useEffect, useState } from 'react';
import { Linking,ActivityIndicator, FlatList, Text, View, StyleSheet, Button  } from 'react-native';
//import * as React from 'react';
import { Video, AVPlaybackStatus } from 'expo-av';

export  default function PastPapersScreen(){
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

  const getLessons = async () => {
     try {
      const response = await fetch('http://demo2966833.mockable.io/Lessons');
      const json = await response.json();
      setData(json.PastPapers);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getLessons();
  }, []);

  return (
    
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (

            <View style={styles.container}>
           
      
     <Text style={{ fontSize:20,color:"blue" }} onPress={() => Linking.openURL(item.link)}>

     {item.title}
</Text>

          </View>
          )}
        />
      )}

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
    backgroundColor: '#ecf0f1',
  },
  text: {
    textAlign: 'center', 
    fontWeight: 'bold',
    fontSize:20 
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
