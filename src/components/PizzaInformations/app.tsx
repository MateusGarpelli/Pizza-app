import { Text, View } from "react-native"
import { Props } from "../PizzaInfo/app"


export const PizzaInformations = ({ pizza }: Props) => {

    return (
        <View>
            {pizza && (
                <View style={{ width: 355, height: 370, backgroundColor: "white", alignItems: "center", bottom: 35, borderRadius: 30 }}>
                    <View style={{ backgroundColor: "#CCC", width: 45, height: 5, marginTop: 5, borderRadius: 10 }}></View>
                    <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 27, color: "#3d3e40", }}>{pizza.name}</Text>
                    <Text style={{ color: "#b3b9c0", fontSize: 16, marginTop: 6 }}>{pizza.igredients}</Text>
                    {<Text style={{ color: "#fcb82c", fontSize: 25, fontWeight: '500', marginTop: 18}}>{`R$${pizza.price.toFixed(2)}`}</Text>}
                    <View style={{alignItems:"center",padding: 15}}>
                        <Text style={{ fontSize: 17, fontWeight: "600", marginTop: 25 }}>Descrição:</Text>
                        <Text style={{ color: "#a2aab2", fontSize: 14, marginTop: 10, textAlign: 'center', lineHeight: 20}}>{pizza.description}</Text>
                    </View>
                </View>
            )}
        </View>
    )
}