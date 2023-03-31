import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Home() {

  const nav = useNavigation()
  const [input,setInput]=useState('')

  function handleSubmit() {
    const random = Math.floor(Math.random() * 3 + 1)
    nav.navigate("Decrip", {txt:input,random:random})
    setInput('')
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.titulo}>Criptografia</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite aqui..."
        value={input}
        onChangeText={(e)=>setInput(e)}
      />
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
