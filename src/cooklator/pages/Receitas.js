import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Receitas = () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Página inicial temporária</Text>

            <View style={styles.buttonContainer}>
                <Button
                    mode="contained"
                    style={styles.button}
                    // onPress={() => navigation.navigate('TelaProjetosAndamento')}
                >
                    Projetos em andamento
                </Button>
                <Button
                    mode="contained"
                    style={styles.button}
                    // onPress={() => navigation.navigate('TelaProjetosFinalizados')}
                >
                    Projetos finalizados
                </Button>
                <Button
                    mode="contained"
                    style={styles.button}
                    onPress={() => navigation.navigate('CadastrarReceita')}
                >
                    Cadastrar nova receita
                </Button>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    buttonContainer: {
        width: '100%',
        paddingHorizontal: 16,
    },
    button: {
        marginTop: 16,
    },
});

export default Receitas;
