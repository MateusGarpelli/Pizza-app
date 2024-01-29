import React, { useState } from 'react';
import { Alert, Image, ScrollView, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ModalPizza from '~/components/ModalPizza/app';



const App = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const handleButton = (pizza) => {
    setSelectedPizza(pizza);
    setActiveModal(true);
    
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image source={require('../../assets/kelly.png')} style={styles.avatar} />
      </View>

      <View style={styles.pizzaContainer}>
        <View>
          <TouchableOpacity onPress={() => handleButton({  name: 'Pizza Bahíana', price: 80, image: require('../../assets/pizza4.png'), igredients: " Tomate, Brócolis Queijo, Azeitona", description: "Uma explosão de sabores saudáveis se encontra nesta delícia vegetariana. O contraste entre o tomate suculento, o brócolis crocante "    })} activeOpacity={0.7} style={styles.pizzaItem}>
            <Image source={require('../../assets/pizza4.png')} style={styles.pizzaImage} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleButton({ name: 'Mexicano Maluco', price: 75, image: require('../../assets/pizza5.png'), igredients: "Carne seca, Tomate, Azeitona,Queijo, Pimenta " , description: " Uma festa de sabores carnívoros! A carne seca suculenta se une ao tomate fresco, azeitonas salgadas e queijo derretido." })} activeOpacity={0.7} style={styles.pizzaItem}>
            <Image source={require('../../assets/pizza5.png')} style={styles.pizzaImage} />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => handleButton({ name: 'Especial da Casa', price: 100, image: require('../../assets/pizza6.png'), igredients: "Calabresa ralada, Manjericão, Tomate, Cebola", description: "A clássica calabresa ganha uma versão suprema nesta pizza. A calabresa ralada se harmoniza com o frescor do manjericão." })} activeOpacity={0.7} style={styles.pizzaItem}>
            <Image source={require('../../assets/pizza6.png')} style={styles.pizzaImage} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleButton({ name: 'Pizza de Chocolate', price: 90, image: require('../../assets/pizza7.png'), igredients: " Chocolate ao leite, Confete" , description: " Uma tentação para os amantes de doces! Esta pizza é uma explosão de sabor do chocolate ao leite derretido, que se mistura perfeitamente com a crocância do confete." })} activeOpacity={0.7} style={styles.pizzaItem}>
            <Image source={require('../../assets/pizza7.png')} style={styles.pizzaImage} />
          </TouchableOpacity>
        </View>
      </View>

      {activeModal && <ModalPizza setActiveModal={setActiveModal} selectedPizza={selectedPizza} />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: 'white',
  },
  avatarContainer: {
    alignSelf: 'center',
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 14,
  },
  pizzaContainer: {
    flexDirection: 'row',
    display: "flex",
    margin: 3,
    justifyContent: 'center',
    gap: 8,
  },
  pizzaItem: {
    flex: 1,
    marginTop: 10,
  },
  pizzaImage: {
    width: 160,
    height: 160,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default App;
