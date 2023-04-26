import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import {useGetForHome} from '../hooks/useGetForHome.js'

export default function Home() {
  const {input,status,setInput,handleSubmit} = useGetForHome()

  const statusColor=status ? "red" : "black" 
  
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.titulo}>Criptografia</Text>
      <TextInput
        style={[styles.input, {borderColor:statusColor}]}
        placeholder="Digite aqui..."
        value={input}
        onChangeText={(e)=>setInput(e)}
      />
      {status ? <Text>^ o campo a cima necessita ter um texto ^</Text> : null}
      <TouchableOpacity
        style={styles.bt}
        onPress={handleSubmit}
      >
        <Text style={{color:"#eee",textAlign:"center"}}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles= StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap:20
  },
  titulo:{
    fontSize:20,
    fontWeight:"bold"
  },
  input:{
    width:"75%",
    padding:10,
    borderWidth:1,
    borderRadius:5
  },
  bt:{
    width:"75%",
    backgroundColor:"#555",
    padding:15,
    borderRadius:5,
    textAlign:"center"
  }
})
