import { useEffect, useState } from "react";
import { View,Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {cripUm} from '../../crip/cripUm.js'
import {cripDois} from '../../crip/cripDois.js'
import {cripTres, decripTres} from '../../crip/cripTres.js'

export function useGetForDecrip(route) {
  const nav = useNavigation()
  const [decrip,setDecrip]=useState('')
  const [color,setColor]=useState(null)

  const [crip, setCrip] = useState("carregando ...")

  const [modalVisible, setModalVisible] = useState(false)
  
  useEffect(()=>{
    if (route.random == 1) {
      console.log(1);
      const data= cripUm(route.txt)
      setCrip(data)
    } else if (route.random == 2) {
      console.log(2);
      const data= cripDois(route.txt)
      setCrip(data)
    } else {
      console.log(3);
      const data= cripTres(route.txt)
      setCrip('[ '+data+' ]')
    }

    if (route.txt == '') {
      setCrip("sem palavra")
      setTimeout(() => {
        nav.navigate("Home")
      }, 300);
    }
  },[route.random])
  

  function handleConfirm() {
    if (route.txt == decrip) {
      setColor("#B3FFAE") 
      setTimeout(() => {
        nav.navigate("Home")
      }, 700);
    } else {
      setColor("#FF7D7D")
      setDecrip("")
    }
  }
  
  function modalView(params) {
    const dicas=[
      ["cifra de césar","ordem é a raiz de 16","A =  ( a letra referente a posição da dica acima )"],
      ["numeros, A = 11","pula de 3,6 e 9 e recomeça","(numero equivalente a letra) x 4 -10]"],
      ["Tente encontrar as chaves ou quebrar a chave pública","Procure padrões ou estruturas na mensagem criptografada que possam ajudá-lo a decifrar a mensagem usando números primos","Experimente diferentes abordagens e técnicas para resolver a criptografia até encontrar uma que funcione melhor para você."]
    ]

    function handleDicas(){
      if (route.random == 1) {
        return dicas[0]
      } else if (route.random == 2) {
        return dicas[1]
      } else {
        return dicas[2]
      }
    }
    
    return(
      <View style={styles.modal}>
        <Text style={styles.into}>Dicas</Text>

        {handleDicas().map((x,i)=><Text style={styles.dicas}>{i+1} -  {x}</Text>)}

        <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)} style={[styles.bt,{backgroundColor:"#eee",marginTop:10,width:'auto'}]}>
          <Text style={{color:"#555",textAlign:"center",fontWeight:700}}>Fechar</Text>
        </TouchableOpacity>
      </View>
    )
  }

  return {decrip,setDecrip,color,crip,handleConfirm,setModalVisible,modalVisible,modalView}
}

const styles=StyleSheet.create({
  into:{
    textAlign:"center",
    fontWeight:"bold",
    fontSize:20,
    marginBottom:10,
    color:'#eee'
  },
  dicas:{
    color:'#eee',
    fontSize:16,
    marginBottom:10
  },
  bt:{
    width:"75%",
    backgroundColor:"#555",
    padding:15,
    borderRadius:5,
    textAlign:"center"
  },
  modal:{
    backgroundColor:"#1e1e1e",
    padding:15,
    borderRadius:5,
    maxWidth:"90%"
  }
})