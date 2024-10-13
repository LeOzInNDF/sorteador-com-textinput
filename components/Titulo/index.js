import React from "react";
import { View, Text } from "react-native";
import estilo from './estilo';


const Titulo = () => {
  return (
    <View style={estilo.boxTitulo}>
      <Text style={estilo.titulo}>
        Sorteador Numérico
      </Text>
      <Text style={estilo.subtitulo}>
        Hora de ver quem é o vencedor!
      </Text>
    </View>
  )
}

export default Titulo;