import React, { useState } from "react";
import { Text, View, Modal } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Link } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome'
import { State } from "react-native-gesture-handler";
import { PizzaInfo } from "../PizzaInfo/app";


type Props = {
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPizza: { name: string, price: number, image: any, igredients: string, description: string } | null;
}

export const ModalPizza = ({ setActiveModal, selectedPizza }: Props) => {
  const [heartClick, setHeartClick] = useState(false);

  const handleHeartClick = () => {
    setHeartClick(!heartClick);
  };

  const handleBack = () => {
    setActiveModal(false)
  }

  return (
    <Modal>
      <View >
        <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 16,
      }}>
          <View>
            <Link href={"/"} asChild onPress={handleBack} style={{}}>
              <Feather name="arrow-left" size={30} />
            </Link>
          </View>
          <View style={{ marginRight: 5 }}>
            <FontAwesome.Button
              name="heart"
              size={30}
              color={heartClick ? "red" : "black"}
              onPress={handleHeartClick}
              backgroundColor="#FFFFFF"
              borderRadius={50}
              iconStyle={{ marginLeft: 10 }}
            />
          </View>
        </View>
        <View style={{ justifyContent:"center",alignItems:'center'}}>
        <PizzaInfo pizza={selectedPizza} />
        </View>
      </View>
    </Modal>
  );
};

export default ModalPizza;
