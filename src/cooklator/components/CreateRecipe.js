import React, { useState, useEffect } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Checkbox } from 'react-native-paper';
import ModalWarning from './ModalWarning';
import ColorPicker from "./ColorPicker";
import config from "../config";


const recipeApiUrl = config.recipeApiUrl;

const CreateRecipe = ({ route }) => {

    const [textTitle, setTextTitle] = useState('');
    const [textObs, setTextObs] = useState('');
    const [hourValue, setHourValue] = useState('R$ 0.00');
    const hourValueChange = parseFloat(hourValue.replace('R$', '').trim());
    const [checked, setChecked] = useState(false);
    const navigation = useNavigation();
    const [nameError, setNameError] = useState('');
    const [hourValueError, setHourValueError] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [selectedColor, setSelectedColor] = useState('#176B87');

    const handleNavigateToMaterial = () => {
        navigation.navigate('NewMaterial');
    };

    const handleNavigateToRecipesPage = () => {
        navigation.navigate('Receitas');
    };

    const handleAddRecipe = async () => {
        try {
            let isValid = true;
            setNameError('')
            setHourValueError('')

            if (textTitle.trim() === '') {
                setNameError('O nome da receita é obrigatório');
                isValid = false;
            }

            if (hourValueChange <= 0 && checked === false) {
                setHourValueError('O valor da hora deve ser maior que zero ou marque o valor padrão');
                isValid = false;
            }

            if (isValid) {
                const newRecipe = {
                    nome: textTitle,
                    valorHora: hourValueChange,
                    aplicaValorPadrao: checked,
                    observacoes: textObs,
                    cor: selectedColor
                };

                const response = await addRecipe(newRecipe);

                if (response.status === 201 || response.status === 200) {
                    const data = await response.json();
                    showModal('Receita adicionada com sucesso! Deseja cadastrar outra?');
                }
            }
        } catch
        (error) {
            console.error('Erro:', error);
        }
    };

    function addRecipe(newRecipe) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRecipe),
        };

        return fetch(recipeApiUrl, requestOptions);
    }

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const showModal = (message) => {
        setModalMessage(message);
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
        setModalMessage('');
    };

    const handleResetForm = () => {
        hideModal()

        setTextTitle("")
        setTextObs("")
        setHourValue('R$ 0.00')
        setChecked(false)
        setSelectedColor('#176B87')
        setNameError('');
        setHourValueError('');
    };

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
                    value={textTitle}
                    onChangeText={setTextTitle}
                    placeholder="Nome da receita"
                    keyboardType="default"
                    placeholderTextColor="grey"
                />
                <Text style={styles.errorMessageName}>{nameError}</Text>

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
                        <Text style={styles.textHourValue}> Valor da hora:</Text>
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
                <Text style={styles.errorMessageObs}>{hourValueError}</Text>
                <View style={styles.checkboxContainer}>
                    <Checkbox.Android
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setChecked(!checked);
                        }}
                    />
                    <Text style={styles.checkboxText}>Aplicar o valor cadastrado no Perfil</Text>
                </View>
            </Card>

            <Card style={[styles.card, { minHeight: 10 }]} elevation={3}>
                <View style={styles.viewColors}>
                    <ColorPicker onColorSelect={handleColorSelect} />
                </View>
            </Card>

            <Card style={[styles.card, { minHeight: 10 }]} elevation={3}>
                <View style={styles.viewMaterial}>
                    <Text style={styles.textMaterialTitle}>Materiais:</Text>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={handleNavigateToMaterial}>
                        <Text style={styles.textStylePlus}>+</Text>
                    </Pressable>
                </View>
            </Card>

            <View style={styles.viewButtons}>
                <View>
                    <TouchableHighlight
                        style={[styles.buttonSave, { marginRight: 150, marginLeft: 30 }]}
                        onPress={handleNavigateToRecipesPage}
                        underlayColor="#176B87"
                    >
                        <Text style={styles.textStyle}>Cancelar</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <TouchableHighlight
                        style={styles.buttonSave}
                        onPress={handleAddRecipe}
                        underlayColor="#176B87"
                    >
                        <Text style={styles.textStyle}>Salvar</Text>
                    </TouchableHighlight>
                </View>
            </View>
            <ModalWarning visible={modalVisible} message={modalMessage}
                onPrimaryButtonPress={handleResetForm}
                primaryButtonLabel={'Sim'} onSecondaryButtonPress={handleNavigateToRecipesPage}
                secondaryButtonLabel={"Não"} />
        </View>
                </View >
            </View >
        </ScrollView >
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
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 5,
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
    errorMessageName: {
        color: 'red',
        marginLeft: 20,
    },
    errorMessageObs: {
        width: 300,
        height: 40,
        color: 'red',
        marginLeft: 20,
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
    textMaterialTitle: {
        fontSize: 20,
        marginBottom: 15,
        marginLeft: 20,
        marginTop: 12,
        fontWeight: '600',
    },
    textHourValue: {
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
    viewColors: {
        paddingBottom: 10
    }
});

export default CreateRecipe;
