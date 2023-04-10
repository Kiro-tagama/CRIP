import { useEffect, useState } from "react";
import { View,Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

import {useGetForDecrip} from '../hooks/useGetForDecrip.js'

var dicas=[
  {1:"sifra de cesar",2:"ordem 4",3:"A = E ..."},
  {2:"numeros",2:"A = 11",3:"11*4+10"},
  {1:"..."}
]

export default function Decrip(params) {
  const route=params.route.params

  const {decrip,setDecrip,color,setColor,crip, setCrip, handleConfirm} = useGetForDecrip(route)

  // const [decrip,setDecrip]=useState('')
  // const [color,setColor]=useState(null)

  // const [crip, setCrip] = useState("carregando ...")

  // // aqui dentro vai a função q vai codificar a palavra
  // useEffect(()=>{
  //   if (route.random == 1) {
  //     console.log(1);
  //     setCrip("palavra 1")
  //   } else if (route.random == 2) {
  //     console.log(2);
  //     setCrip("palavra 2")
  //   } else {
  //     console.log(3);
  //     setCrip("palavra 3")
  //   }
  // },[route.random])
  

  // function handleConfirm() {
  //   console.log(route);
  //   if (route.txt == decrip) {
  //     setColor("#B3FFAE") //se for igual
  //   } else {
  //     setColor("#FF7D7D")
  //   }
  // }
  
  return(
    <View style={[styles.container,{backgroundColor:color}]}>
      <Text style={styles.titulo}>Desencriptar</Text>
      <Text style={{fontSize:18,fontWeight:"400"}}>{crip}</Text>
      <TextInput
        style={styles.input}
        placeholder="Desencripte"
        value={decrip}
        onChangeText={(e)=>setDecrip(e)}
      />
      <TouchableOpacity onPress={handleConfirm} style={styles.bt}>
        <Text style={{color:"#eee",textAlign:"center"}}>Confirmar</Text>
      </TouchableOpacity>
      
    </View>
  )
}

const styles=StyleSheet.create({
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
    borderRadius:5,
    backgroundColor:"white"
  },
  bt:{
    width:"75%",
    backgroundColor:"#555",
    padding:15,
    borderRadius:5,
    textAlign:"center"
  }
})