import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";

export default function Counter() {

    const [count, setCount] = useState(0);
    const [inputCount, setInputCount] = useState(1);
    const add = () => setCount(count + Number(inputCount));
    const minus = () => setCount(count - Number(inputCount));

    return (
        <View style={styles.container}>

            <TextInput style={styles.input}

                onChangeText={(num)=>{setInputCount(num)}}
                // value={inputCount}
                placeholder="Enter number"
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.add} onPress={add} >
                <Text style={styles.text}>+</Text>
            </TouchableOpacity>
            <View style={styles.countContainer}>
                <Text>{count}</Text>
            </View>
            <TouchableOpacity style={styles.minus} onPress={minus} >
                <Text style={styles.text}>-</Text>
            </TouchableOpacity>
        </View>
    );


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    add: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 10,

    },
    minus: {
        alignItems: "center",
        backgroundColor: "red",
        padding: 10
    },
    countContainer: {
        alignItems: "center",
        padding: 10
    },
    text: {
        color: "#ffff",
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});