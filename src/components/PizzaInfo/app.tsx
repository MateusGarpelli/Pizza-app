import { Image, Text, TouchableOpacity, View } from "react-native"
import { Pizza } from "~/types/Pizza";
import { ChooseSize } from "../ChooseSize/app";
import { ButtonModal } from "../ButtonModal/app";
import { useState } from "react";
import { OrderModal } from "../OrderModal/app";

export type Props = {
  pizza: Pizza | null
}

export const PizzaInfo = ({ pizza }: Props) => {

  const [activeModal, setActiveModal] = useState(false);

  const handleModal = () => {
    setActiveModal(true);
  }

  return (
    <View  >
      {pizza && (
        <><View style={{ marginTop: 15, alignItems: 'center', }}>
          <Text style={{ fontWeight: "bold", fontSize: 30, color: "#3d3e40", textShadowColor: 'rgba(0, 0, 0, 0.2)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2, }}>{pizza.name}</Text>
          <Image source={pizza.image} style={{ width: 200, height: 200, borderRadius: 20, marginVertical: 30, }} />
          <Text style={{ color: "#fcb82c", fontSize: 25, fontWeight: '500', textShadowColor: 'rgba(0, 0, 0, 0.2)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2, }}>{`R$${pizza.price.toFixed(2)}`}</Text>
        </View>
          <View style={{}}>
            <ChooseSize />
          </View>
          <TouchableOpacity >
            <ButtonModal value="Adicionar no carrinho" onPress={handleModal}  />
          </TouchableOpacity>
          {activeModal && <OrderModal setActiveModal={setActiveModal}  pizza={pizza}/>}
        </>
      )}
    </View>
  );
};