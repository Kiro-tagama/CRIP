import { useEffect, useState } from "react";

import cripUm from '../../crip/cripUm.js'
import cripDois from '../../crip/cripDois.js'
import cripTres from '../../crip/cripTres.js'

export function useGetForDecrip({route}) {
  const [decrip,setDecrip]=useState('')
  const [color,setColor]=useState(null)

  const [crip, setCrip] = useState("carregando ...")

  // aqui dentro vai a função q vai codificar a palavra
  useEffect(()=>{
    if (route.random == 1) {
      console.log(1);
      setCrip("palavra 1")
    } else if (route.random == 2) {
      console.log(2);
      setCrip("palavra 2")
    } else {
      console.log(3);
      setCrip("palavra 3")
    }
  },[route.random])
  

  function handleConfirm() {
    console.log(route);
    if (route.txt == decrip) {
      setColor("#B3FFAE") //se for igual
    } else {
      setColor("#FF7D7D")
    }
  }

  return {decrip,setDecrip,color,setColor,crip, setCrip, handleConfirm}
}