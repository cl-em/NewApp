import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        fontSize: 16,
        color: '#333',
        width: '80%',
        height: 40,
    },
    rectangle: {
        borderRadius : 10,
        transform : [{translateY : "25px"}]
    },
    flexBox :{
        display:"flex",
        flexDirection :"column",
    }
});
