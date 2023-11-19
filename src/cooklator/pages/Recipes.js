import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import Logo from "../components/Logo";

const Recipes = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Logo  width={350} height={200} isWithSubtitle={true} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.customButton}
                    onPress={() => navigation.navigate('RecipesInProgress')}
                >
                    <Text style={styles.buttonText}>PROJETOS EM ANDAMENTO</Text>
                </TouchableOpacity>

                <View style={styles.buttonSpacer}/>

                <TouchableOpacity
                    style={styles.customButton}
                    // onPress={() => navigation.navigate('TelaProjetosFinalizados')}
                >
                    <Text style={styles.buttonText}>PROJETOS FINALIZADOS</Text>
                </TouchableOpacity>

                <View style={styles.buttonSpacer}/>

                <TouchableOpacity
                    style={styles.customButton}
                    onPress={() => navigation.navigate('CadastrarReceita')}
                >
                    <Text style={styles.buttonText}>CADASTRAR NOVA RECEITA</Text>
                </TouchableOpacity>

                <View style={styles.buttonSpacer}/>

                <TouchableOpacity
                    style={styles.customButton}
                    onPress={() => navigation.navigate('Profile')}
                >
                    <Text style={styles.buttonText}>PERFIL</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 200,
        backgroundColor: '#fff'
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    buttonContainer: {
        width: '80%',
        paddingHorizontal: 16,
    },
    buttonSpacer: {
        height: 16,
    },
    customButton: {
        width: '90%',
        height: 50,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#176B87',
        padding: 10,
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        letterSpacing: 2,
        justifyContent: 'center',
        fontSize: 15,
        fontWeight: "bold",
        paddingTop: 7
    },
    logoImage: {
        width: 350,
        height: 200,
        resizeMode: 'contain',
    },
});

export default Recipes;
