import {View, Text, Button, StyleSheet, TextInput} from "react-native";
import { useState } from "react";

export default function Rectangle(){

    const [area, setArea] =useState(0)
    const [width, setWidth] = useState(0)
    const [length, setlength] =useState(0)

    function RectangleCal(){
        var result = width * length
        setArea(result)
    }

    return(
        <View style={styles.box}>
            <Text style={styles.textTitle}>คำนวณพื้นที่สี่เหลี่ยม</Text>
            {/* <Button title="ไปหน้า 2"/> */}

        <Text>ความกว้าง คือ {width} ซม.</Text>
        <Text>ความยาว คือ {length} ซม.</Text>
        <Text>พื้นที่สี่เหลี่ยม คือ {area} ตร.ซม.</Text>


            <TextInput 
            style={styles.textInput} 
            placeholder="กรอกความกว้าง" 
            placeholderTextColor="gray"
            value={setWidth.toString()}
            onChangeText={(w) => setWidth(Number(w))}
            />

            <TextInput 
            style={styles.textInput} 
            placeholder="กรอกความยาว" 
            placeholderTextColor="gray"
            value={length.toString()}
            onChangeText={(l) => setlength(Number(l))}
            />

        <Button title="คำนวณ"/>

        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",
        gap:20
    },
    textTitle:{
        fontSize:22,
        fontWeight:"700",
        color:"white"
    },
    textInput:{
        borderWidth:1,
        borderColor:"white",
        width:"80%",
        borderRadius:20
    }
})
