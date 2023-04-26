import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export function useGetForHome() {
  const nav = useNavigation()
  const [input,setInput]=useState('')
  const [status, setStatus]=useState(false)
  
  function handleSubmit() {
    if (input.length <= 0) {
      return setStatus(true)
    }

    const random = Math.floor(Math.random() * 3 + 1)
    nav.navigate("Decrip", {txt:input,random:random})
    setInput('')
    setStatus(false)
  }
  
  return {input,status,setInput,handleSubmit}
}
