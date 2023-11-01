import { center } from "@shopify/react-native-skia";
import { StyleSheet } from "react-native";

//"flex-row justify-between items-center p-4"
export const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 4
    },
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold'
    }
})