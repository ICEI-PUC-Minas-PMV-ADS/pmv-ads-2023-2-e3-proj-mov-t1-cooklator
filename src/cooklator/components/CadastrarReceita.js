import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Modal,
    Pressable, TouchableHighlight
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
import CadastroMaterial from "./CadastroMaterial";
import Receitas from "../pages/Receitas";

const receitaApiUrl = 'http://localhost:3000/receita';

const CadastroReceita = () => {

    const [textTitulo, setTextTitulo] = useState('');
    const [textObs, setTextObs] = useState('');
    const [hourValue, setHourValue] = useState('R$ 0.00');
    const valorHora = parseFloat(hourValue.replace('R$', '').trim());
    const [checked, setChecked] = useState(false);
    const navigation = useNavigation();

    const handleNavigateToMaterial = () => {
        navigation.navigate('CadastroMaterial');
    };

    const handleNavigateToReceitaPage = () => {
        navigation.navigate('Receitas');
    };

    const handleAdicionarReceita = async () => {
        try {
            const novaReceita = {
                nome: textTitulo,
                valorHora: valorHora,
                aplicaValorPadrao: checked,
                observacoes: textObs
            };

            const response = await adicionarReceita(novaReceita);

            if (response.ok) {
                const data = await response.json();
                console.log('Receita adicionada com sucesso:', data);
            }
        } catch (error) {
            console.error('Erro:', error);
        }
    };

    function adicionarReceita(novaReceita) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(novaReceita),
        };

        return fetch(receitaApiUrl, requestOptions)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Erro ao adicionar a receita');
                }
            });
    }

    const handleInputChange = (text) => {
        const numericValue = text.replace(/[^0-9]/g, '');

        const formattedValue = numericValue.replace(
            /(\d)(?=(\d{2})+(?!\d))/g,
            '$1.'
        );

        setHourValue(`R$ ${formattedValue}`);
    };

    return (
        <View style={styles.mainContainer}>
        <View style={styles.container}>
            <View style={styles.headerView}>
                <Text style={styles.headerText}> Cadastrar Receita</Text>
            </View>

            <View style={styles.line}></View>

            <TextInput
                style={styles.input}
                value={textTitulo}
                onChangeText={setTextTitulo}
                placeholder="Nome da receita"
                keyboardType="default"
                placeholderTextColor="grey"
            />

            <TextInput
                style={styles.inputObs}
                value={textObs}
                onChangeText={setTextObs}
                placeholder="Observações"
                keyboardType="default"
                placeholderTextColor="grey"
            />

            <View style={styles.viewButtons}>
                <View style={styles.viewValue}>
                    <Text style={styles.textValorHora}> Valor da hora:</Text>
                    <TextInput
                        style={styles.inputValor}
                        value={hourValue}
                        onChangeText={handleInputChange}
                        placeholder="R$ 0,00"
                        keyboardType="numeric"
                        placeholderTextColor="grey"
                    />
                </View>
            </View>
            <View style={styles.checkboxContainer}>
                <Checkbox.Android
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />
                <Text style={styles.checkboxText}>Aplicar o valor cadastrado no Perfil</Text>
            </View>


                <Text style={styles.textTituloMaterial}>Materiais:</Text>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={handleNavigateToMaterial}>
                    <Text style={styles.textStylePlus}>+</Text>
                </Pressable>


            <View style={styles.viewButtons}>

                <View style={styles.viewButtons}>
                    <TouchableHighlight
                        style={styles.buttonCancel}
                        onPress={handleNavigateToReceitaPage}>
                        <Text style={styles.textStyle}>Cancelar</Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.viewButtons}>
                    <TouchableHighlight
                        style={styles.buttonSave}
                        onPress={handleAdicionarReceita}>
                        <Text style={styles.saveText}>Salvar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#C1C4C7',
        marginBottom: 10,
        alignSelf: 'stretch',
    },
    headerText: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    headerView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
    },
    input: {
        width: 300,
        height: 40,
        borderWidth: 1,
        borderColor: '#DCDCDC',
        borderRadius: 10,
        margin: 12,
        marginLeft: 20,
        padding: 10,
    },
    inputObs: {
        width: 300,
        height: 100,
        borderWidth: 1,
        borderColor: '#DCDCDC',
        borderRadius: 10,
        margin: 15,
        marginLeft: 20,
        padding: 10,
    },
    inputValor: {
        width: 100,
        height: 40,
        borderWidth: 1,
        borderColor: '#DCDCDC',
        borderRadius: 10,
        marginLeft: 20,
        padding: 10,
    },
    button: {
        borderRadius: 20,
        elevation: 2,
    },
    buttonOpen: {
        width: 30,
        height: 30,
        backgroundColor: '#DCDCDC',
        margin: 12,
        marginRight: 200,
        paddingLeft: 8,
    },
    textStyle: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
    },
    textStylePlus: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonSave: {
        width: 100,
        height: 40,
        backgroundColor: '#BEC2C9',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
    },
    saveText: {
        fontSize: 18,
        fontWeight: '500',
        textAlign: 'center',
        paddingTop: 7,
    },
    buttonCancel: {
        width: 100,
        height: 40,
        marginLeft: 20,
        backgroundColor: '#BEC2C9',
        borderRadius: 20,
        paddingTop: 5,
    },
    viewButtons: {
        width: 220,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    textTituloMaterial: {
        fontSize: 20,
        marginBottom: 15,
        marginLeft: 20,
        marginTop: 12,
        fontWeight: '600',
    },
    textValorHora: {
        width: 100,
        textAlign: 'center',
        fontSize: 15,
        marginLeft: 20,
        fontWeight: '600',
    },
    checkboxContainer: {
        flexDirection: 'row',
        marginLeft: 20,
    },
    viewValue: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkboxText: {
        paddingTop: 7,
    },
});

export default CadastroReceita;
