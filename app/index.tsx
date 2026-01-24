import {View, Text, Button, StyleSheet} from "react-native";
import { useRouter } from "expo-router";

export default function App(){

    const router = useRouter()

    return(
        <View style={styles.box}>
            <Text style={styles.textTitle}>HOME</Text>
            <Button title="ไปหน้า 2" onPress={() => router.navigate('/rectangle')}/>

                 <Button title="ไปหน้า 3" onPress={() => router.navigate('/conical')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        flex: 1,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center"
    },
    textTitle:{
        fontSize:22,
        fontWeight:"700",
        color:"white"
    }
})