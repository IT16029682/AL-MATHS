import * as React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ChemestryScreen, PhysicsScreen, MathsScreen, PastPapersScreen } from './src/Screens'
import {NetworkProvider, NetworkConsumer} from 'react-native-offline';


function HomeScreen({ navigation }) {
  return (
    <View >
    <NetworkProvider shouldPing={true} pingInterval={100}>
      <NetworkConsumer>
        {({ isConnected }) =>
          isConnected ? (
    <View style={{ marginTop: 100, alignItems: 'center' }}>

      <Text style={styles.text}>G.C.E A/L LESSONS</Text>
      
     
              
      <View style={{ width: "90%", margin: 10, marginTop: 20, justifyContent: 'center' }}>



        <Button
          title="Physics"

          color="#841584"
          onPress={() =>
            navigation.navigate('Physics')
          }
        />
      </View>

      <View style={{ width: "90%", margin: 10, marginTop: 20, justifyContent: 'center' }}>

        <Button
          title="Maths"
          onPress={() =>
            navigation.navigate('Maths')
          }
        />
      </View>
      <View style={{ width: "90%", margin: 10, marginTop: 20, justifyContent: 'center' }}>

        <Button
          title="Chemestry"
          onPress={() =>
            navigation.navigate('Chemestry')
          }
        />
      </View>



    </View>
 
  ) : (
    <Text style={styles.text2}> No Network</Text>
  )
}
</NetworkConsumer>
</NetworkProvider>
</View>
  );
}






function Feed() {
  return (

    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chemestry" component={ChemestryScreen} />
      <Stack.Screen name="Physics" component={PhysicsScreen} />
      <Stack.Screen name="Maths" component={MathsScreen} />
      <Stack.Screen name="PastPapers" component={PastPapersScreen} />
    </Stack.Navigator>

  );
}

function Profile() {
  const url = "https://lk.linkedin.com/in/krishan-prabodha-silva"

  return (

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Develop by Krishan Prabodha Silva</Text>

      <Text style={{ fontSize: 20, color: "blue" }} onPress={() => Linking.openURL(url)}>

        linkedin
      </Text>

    </View>
  );
}

function PastPapers({ navigation }) {

  return (

    <View style={{ marginTop: 100, alignItems: 'center' }}>
      <Text style={styles.text}>G.C.E A/L Past Papers</Text>
      <View style={{ width: "90%", margin: 10, marginTop: 20, justifyContent: 'center' }}>

        <Button
          title="Past Papers"

          color="#841584"
          onPress={() =>
            navigation.navigate('PastPapers')
          }
        />
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Past Papers"
        component={PastPapers}
        options={{
          headerShown: true,
          tabBarLabel: 'Past Papers',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={Profile}
        options={{
          headerShown: true,
          tabBarLabel: 'About',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />

    </NavigationContainer>


  );
}

const styles = StyleSheet.create({

  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },
  container2: {
    flex: 1,
    marginTop: 100,
    padding: 20,
    borderColor: 'black',
    height: 55,
    alignItems: 'center',
    },
    text2: {
    marginTop:30,
    fontSize: 24,
    color: 'black',
    textAlign: 'center',
    },
});
