import React,{useState} from "react";
import {View,Text,TouchableOpacity,StyleSheet,TextInput, Button} from 'react-native'

export default function TodoList() {
    const [task, setTask] = useState();
    const addTask = (task) =>{ 
        console.log(task)    
    };

    return (
        <View>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>

            <TextInput style={styles.input}

                onChangeText={(task)=>{setTask(task)}}
                // value={inputCount}
                placeholder="Add List"
            />
            <TouchableOpacity onPress={()=>{addTask(task)}}>
            <Text style={styles.add}>Add</Text>

            </TouchableOpacity>
            </View>

           

         
           
        </View>
    );


}
const styles = StyleSheet.create({
    add: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 10,
        color: "#ffff",
        borderRadius:'5px'

    },
    
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width:'250px'
    }
});