import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const QuizApp = () =>{
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <View style={styles.categoryContainer}>
                <TouchableOpacity
                    style={styles.category}
                    onPress={() => navigation.navigate('Playground',{category:'Quimica'} )}
                >
                    <Text style={styles.categoryTitle}>Quimica</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.category}
                    onPress={() => navigation.navigate('Playground',{category:'Rotulo'} )}
                >
                    <Text style={styles.categoryTitle}>Rotulo</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.category}
                    onPress={() => navigation.navigate('Playground',{category:'Risco Quimico'} )}
                >
                    <Text style={styles.categoryTitle}>Risco Quimico</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.category}
                    onPress={() => navigation.navigate('Playground',{category:'Guias'} )}
                >
                    <Text style={styles.categoryTitle}>Guias</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default QuizApp

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    categoryContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,

    },
    category:{
        width:150,
        height:150,
        margin:10,
        borderRadius:10,
        backgroundColor:"#fff",
        shadowColor:'black',
        opacity: 0.5,
        shadowRadius: 5,
        elevation:5,
        justifyContent: 'center',
        alignItems:'center'
    },
    categoryTitle:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        color:'black'
    }
  });