import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import {
    useFonts,
    Comfortaa_300Light,
    Comfortaa_400Regular,
    Comfortaa_500Medium,
    Comfortaa_600SemiBold,
    Comfortaa_700Bold,
} from '@expo-google-fonts/comfortaa';

export default function NewMaterial() {

    const [materialValue, setMaterialValue] = React.useState('R$0,00');
    const [savedMaterials, setSavedmaterials] = React.useState([]);

    let [fontsLoaded] = useFonts({
        Comfortaa_300Light,
        Comfortaa_400Regular,
        Comfortaa_500Medium,
        Comfortaa_600SemiBold,
        Comfortaa_700Bold,
    });

    const [material, setMaterial] = React.useState({
        nome: '',
        quantidade: '',
        valor: '',
        observacoes: '',
    });

    const handleAdd = () => {
        console.log('Material a ser salvo:', material);
        const newMaterial = { ...material, valor: materialValue };
        setSavedmaterials([...savedMaterials, newMaterial]);
        setMaterial({
            nome: '',
            quantidade: '',
            valor: '',
            observacoes: '',
        });
    };

    const handleInputChange = (text) => {
        const numericValue = text.replace(/[^0-9]/g, '');

        const formattedValue = numericValue.replace(
            /(\d)(?=(\d{2})+(?!\d))/g,
            '$1.'
        );

        setMaterialValue(`R$ ${formattedValue}`);
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={[styles.headerText, { marginTop: 10 }]}>
                    Materiais
                </Text>
                <View style={styles.box1}>
                    <View style={styles.box2}>
                        <TextInput
                            editable
                            maxLength={40}
                            value={material.nome}
                            style={styles.input}
                            placeholder='Nome do material'
                            onChangeText={(text) => setMaterial({ ...material, nome: text })}
                        />
                        <TextInput
                            editable
                            maxLength={40}
                            value={material.quantidade}
                            style={styles.input}
                            placeholder='Quantidade'
                            onChangeText={(text) => setMaterial({ ...material, quantidade: text })}
                        />
                        <TextInput
                            editable
                            maxLength={40}
                            value={material.valor}
                            style={styles.input}
                            placeholder='Valor'
                            onChangeText={(text) => {
                                setMaterial({ ...material, valor: text })
                                handleInputChange(text)
                            }}
                        />
                        <TextInput
                            editable
                            maxLength={40}
                            value={material.observacoes}
                            style={styles.input}
                            placeholder='Notas e observações'
                            onChangeText={(text) => setMaterial({ ...material, observacoes: text })}
                        />
                    </View>
                    <View style={styles.buttonContainer}>
                        <Pressable style={styles.buttonSave} onPress={handleAdd}>
                            <p style={styles.saveText}>
                                +
                            </p>
                        </Pressable>
                        <Pressable style={styles.buttonSave} >
                            <p style={styles.saveText}>
                                Salvar
                            </p>
                        </Pressable>
                    </View>
                    <View>
                        <Text style={styles.headerText2}>Materiais Salvos</Text>
                        {savedMaterials.map((newMaterial, index) => (
                            <View key={index} style={styles.savedMaterialContainer}>
                                <Text style={styles.savedMaterialLabel}>Nome:</Text>
                                <Text style={styles.savedMaterialText}>{newMaterial.nome}</Text>

                                <Text style={styles.savedMaterialLabel}>Quantidade:</Text>
                                <Text style={styles.savedMaterialText}>{newMaterial.quantidade}</Text>

                                <Text style={styles.savedMaterialLabel}>Valor:</Text>
                                <Text style={styles.savedMaterialText}>{newMaterial.valor}</Text>

                                <Text style={styles.savedMaterialLabel}>Observações:</Text>
                                <Text style={styles.savedMaterialText}>{newMaterial.observacoes}</Text>
                            </View>
                        ))}
                    </View>
                </View>
                <StatusBar style="auto" />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    headerText2: {
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5
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
        textAlign: 'center',
        margin: '0px',
        paddingTop: '5px',
        fontWeight: '500'
    },
    tittle: {
        fontSize: 25,
        marginTop: 20,
        fontFamily: 'Comfortaa_300Light',
        paddingBottom: 30
    },
    div: {
        fontFamily: 'Comfortaa_300Light',
        backgroundColor: '#E5E5E5'
    },
    input: {
        fontFamily: 'Comfortaa_300Light',
        backgroundColor: '#E5E5E5',
        borderColor: '#eee',
        borderWidth: 1,
        borderRadius: 5,
        width: 274,
        height: 38,
        marginBottom: 10
    },
    box1: {
        backgroundColor: '#E5E5E5',
        width: 305,
        height: 327,
        borderRadius: 20,
        marginTop: 10
    },
    box2: {
        backgroundColor: '#C4C4C482',
        width: 305,
        height: 177,
        marginTop: 50,
        padding: 10
    },
    footer: {
        borderTopColor: 'black'
    },
    savedMaterialContainer: {
        marginBottom: 20,
        backgroundColor: 'white',
        borderColor: 'black',
        paddingTop: '3px'
    },
    savedMaterialLabel: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    savedMaterialText: {
        marginBottom: 10,
    },
    scrollContainer: {
        flexGrow: 1,
    },
});
