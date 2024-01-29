import { useState } from "react";
import { Text, TouchableOpacity, View, ViewStyle } from "react-native";

type Props = {
    value: string;
    onPress?: () => void;
    style?: ViewStyle;
}

export const ButtonModal = ({ value, onPress,  }: Props) => {

  

    return (
        <TouchableOpacity
      activeOpacity={0.7}
      style={{
        alignItems: "center",
        paddingVertical: 13,
        backgroundColor: "#f3b12b",
        flex: 1,
        borderRadius: 100,
        marginTop: 60,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      }} 
      
      >
        
            <Text style={{ color: "white", fontSize:19, fontWeight:"bold" }} onPress={onPress}>{value}</Text>
        </TouchableOpacity>
    )
}