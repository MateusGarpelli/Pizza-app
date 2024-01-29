import React, { useState } from 'react';
import { Modal, View, Image, StyleSheet, Text, TouchableOpacity, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Props } from '../PizzaInfo/app';
import { PizzaInformations } from '../PizzaInformations/app';
import { ButtonModal } from '../ButtonModal/app';

type Props2 = {
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const OrderModal = ({ setActiveModal, pizza }: Props & Props2) => {

  const [count, setCount] = useState(0)

  const minus = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  }


  const handleBack = () => {
    setActiveModal(false);

  }

  return (
    <Modal >
      <View style={styles.modalContainer}>
        <Image
          source={require('../../../assets/desfoco.jpg')}
          style={styles.backgroundImage}
        />
        <View style={styles.arrowContainer} >
          <TouchableOpacity onPress={handleBack}>
            <Feather name="arrow-left" size={30} style={{}} />
          </TouchableOpacity>
        </View>
        <View style={styles.modalContent}>
          {pizza && (
            <View>
              <View style={{ marginBottom: 150, alignItems: 'center', top: -10 }}>
                <Image source={pizza.image} style={{ width: 250, height: 250, borderRadius: 20, marginVertical: 30, bottom:55 }} />
                <View style={{ backgroundColor: "#f7f7f7", borderRadius: 15, width: 80, height: 50, alignItems: "center", top: -110 }}>
                  <Text style={{ fontSize: 35, fontWeight: "500",  }}>{count}</Text>
                  <View style={{ flexDirection: 'row', bottom: 10 }}>
                    <TouchableOpacity onPress={() => (setCount(count + 1))} activeOpacity={0.7} style={{ backgroundColor: "#fac300", borderRadius: 10, width: 31, height: 33, alignItems: "center", }}><Text style={{ color: "white", fontSize: 40, fontWeight: "300", bottom: 13 }}>+</Text></TouchableOpacity>
                    <TouchableOpacity onPress={minus} activeOpacity={0.7} style={{ backgroundColor: "white", borderRadius: 10, width: 31, height: 33, alignItems: "center", }}><Text style={{ color: "black", fontSize: 40, fontWeight: "300", bottom: 13 }}>-</Text></TouchableOpacity>
                  </View>
                  <View style={{top:105}} >
                    <PizzaInformations pizza={pizza} />
                  </View>
                </View>
              </View>
              <View style={{top:62}}>
              <ButtonModal  value='Finalizar pedido' />
              </View>
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  arrowContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#CCC',
    borderRadius: 15,
    padding: 10,
  },
  modalContent: {
    backgroundColor: 'none',
    padding: 20,
    borderRadius: 10,
  },
});

export default OrderModal;
