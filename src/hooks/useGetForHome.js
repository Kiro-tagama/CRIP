import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function useGetForHome() {
  
  const nav = useNavigation()
  const [input,setInput]=useState('')
  
  function handleSubmit() {
    const random = Math.floor(Math.random() * 3 + 1)
    nav.navigate("Decrip", {txt:input,random:random})
    setInput('')
  }
  
  return {input,setInput,handleSubmit}
}
