import { View,Text, StyleSheet, TextInput, TouchableOpacity, Modal } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

import {useGetForDecrip} from '../hooks/useGetForDecrip.js'
import { useState } from "react";


export default function Decrip(params) {
  const route=params.route.params
  const {decrip,setDecrip,color,setColor,crip, setCrip, handleConfirm,setModalVisible,modalVisible,modalView} = useGetForDecrip(route)
  
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
        <Text style={{color:"#eee",textAlign:"center",fontWeight:700}}>Confirmar</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={()=>setModalVisible(!modalVisible)} style={styles.bt2}>
          <MaterialIcons name="lightbulb" size={24} color="#eee" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
          {modalView()}
        </View>
      </Modal>

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
  },
  bt2:{
    backgroundColor:"#555",
    padding:15,
    borderRadius:5,
    position:'absolute',
    bottom:75
  },
  modal:{
    // backgroundColor:"#1e1e1e",
    backgroundColor:"red",
    padding:15,
    borderRadius:5,
  }
})