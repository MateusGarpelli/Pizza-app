import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

type Size = 'P' | 'M' | 'G';

export const ChooseSize = () => {
  const [selectedSize, setSelectedSize] = useState<Size| null>(null);
  


  const handleSizeSelection = (size:Size) => {
    setSelectedSize(size);
  };

  return (
    <View style={{marginTop:100, marginRight: 145,}}>
      <Text style={{ color: "#555758", fontWeight: '700', fontSize: 17 }}>Escolha um tamanho:</Text>
      <View style={styles.sizeContainer}>
        <TouchableOpacity
          style={[styles.sizeButton, selectedSize === 'P' && styles.selectedSize]}
          onPress={() => handleSizeSelection('P')}
        >
          <Text style={[styles.sizeButtonText, selectedSize === 'P' && styles.selectedSizeText]}>P</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.sizeButton, selectedSize === 'M' && styles.selectedSize]}
          onPress={() => handleSizeSelection('M')}
        >
          <Text style={[styles.sizeButtonText, selectedSize === 'M' && styles.selectedSizeText]}>M</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.sizeButton, selectedSize === 'G' && styles.selectedSize]}
          onPress={() => handleSizeSelection('G')}
        >
          <Text style={[styles.sizeButtonText, selectedSize === 'G' && styles.selectedSizeText]}>G</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sizeContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginRight:30
  },
  sizeButton: {
    margin: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f5f5f5",
    alignItems: 'center',
    justifyContent: 'center',
  },
  sizeButtonText: {
    color: '#bdbebe',
    fontSize: 17,
    fontWeight: '600',
  },
  selectedSize: {
    backgroundColor: "#f3b12b",
  },
  selectedSizeText: {
    color: 'white',
  },
});
