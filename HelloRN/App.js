import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.title,{flex:5}]}>Step One</Text>
      <Text style={[styles.title,{flex:4}]}>Step Two</Text>
      <Text style={[styles.title,{flex:3}]}>Step Three</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    paddingHorizontal:24,
    backgroundColor:'orange',
    flex:1,
    justifyContent:'space-around',
    // alignItems:'center',
  },
  title:{
    fontSize: 24,
    fontWeight: '600',
    color:'blue',
    backgroundColor:'gray',
    margin:10,
  },
});
