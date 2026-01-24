import {View, Text, Button, StyleSheet, TextInput} from "react-native";
import { useState } from "react";

export default function Rectangle(){


    const [radius, setRadius] = useState(0)
    const [length, setlength] =useState(0)
    const [area, setArea] =useState(0)

    function RectangleCal(){
        var result = 3.14 * radius * (radius + length)
        
        setArea(result)
    }

    return(


        <View style={styles.box}>
            <Text style={styles.textTitle}>คำนวณพื้นที่ผิวทรงกรวย</Text>
            {/* <Button title="ไปหน้าคำนวณ พื้นสี่เหลี่ยม"/> */}

        <Text>รัศมี คือ {radius} ซม.</Text>
        <Text>ความยาวของเส้นยอดกรวย คือ {length} ซม.</Text>
        <Text>พื้นที่ผิวทรงกรวย คือ {area} ตร.ซม.</Text>


            <TextInput 
            style={styles.textInput} 
            placeholder="กรอกรัศมี"
            placeholderTextColor="gray"
            value={radius.toString()}
            onChangeText={(w) => setRadius(Number(w))}
            />

            <TextInput 
            style={styles.textInput} 
            placeholder="กรอกความของเส้นยอดกรวย" 
            placeholderTextColor="gray"
            value={length.toString()}
            onChangeText={(l) => setlength(Number(l))}
            />

       <Button title="คำนวณ" onPress={() => RectangleCal()}></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor:"pink",
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
