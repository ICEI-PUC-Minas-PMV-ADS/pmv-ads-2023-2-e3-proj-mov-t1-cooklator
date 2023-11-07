import React, {useState} from 'react';
import {Platform, ScrollView, StyleSheet, View, Text} from 'react-native';
import {Card, Title, Paragraph, Appbar, Menu, Divider, useTheme} from 'react-native-paper';
import ModalWarning from "./ModalWarning";
import config from "../config";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from "@react-navigation/native";

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const recipeApiUrl = config.recipeApiUrl;

const CardRecipe = ({recipeName, recipeColor, recipeId, setRecipes}) => {

    const [visible, setVisible] = useState({});
    const {isV3} = useTheme();
    const [modalVisibleConfirmRemove, setModalVisibleConfirmRemove] = useState(false);
    const [modalMessageConfirmRemove, setModalMessageConfirmRemove] = useState('');
    const navigation = useNavigation();

    const handleNavigateToOptions = () => {
        navigation.navigate('OptionsTabs');
    }

    const showModal = (message) => {
        setModalMessageConfirmRemove(message);
        setModalVisibleConfirmRemove(true);
    };

    const hideModal = () => {
        setModalVisibleConfirmRemove(false);
        setModalMessageConfirmRemove('');
    };
    const _toggleMenu = (name) => () => {
        setVisible({...visible, [name]: !visible[name]});
    };

    const removeRecipe = async (recipeId) => {

        try {
            const response = await deleteRecipe(recipeId);
            if (response.status === 201 || response.status === 200) {
                setRecipes((prevRecipes) => prevRecipes.filter(recipe => recipe.id !== recipeId));
            }

        } catch
            (error) {
            console.error('Erro:', error);
        }
    }

    const _getVisible = (name) => !!visible[name];

    const handleConfirmDeleteRecipe = () => {
        showModal('Tem cereteza que deseja excluir esta receita?')
    };

    function deleteRecipe(recipeId) {

        const deleteUrl = recipeApiUrl + '/' + recipeId;

        const requestOptions = {
            method: 'DELETE',
        };

        return fetch(deleteUrl, requestOptions);
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card style={styles.card}>
                <Card.Cover style={{...styles.cardCover, backgroundColor: recipeColor}}/>
                <Card.Content>
                    <View style={styles.cardContent}>
                        <View>
                            <Title style={styles.titleText}>{recipeName}</Title>
                            <Paragraph style={styles.titleContent}>
                                <View style={styles.iconContainer}>
                                    <Icon name="timer-outline" size={20} color="gray"/>
                                    <Text>Tempo: x minutos</Text>
                                </View>
                                <View style={styles.iconContainer}>
                                    <Icon name="fruit-watermelon" size={20} color="gray"/>
                                    <Text>Materiais: 2</Text>
                                </View>
                                    <Icon name="chart-line" size={20} color="gray"/>
                                    <Text>R$ 3,00</Text>
                            </Paragraph>
                        </View>

                        <View style={styles.containerMenu}>
                            <Appbar.Header style={{backgroundColor: 'transparent', width: 45}}>
                                <Menu
                                    visible={_getVisible('menu1')}
                                    onDismiss={_toggleMenu('menu1')}
                                    anchor={
                                        <Appbar.Action
                                            icon={MORE_ICON}
                                            onPress={_toggleMenu('menu1')}
                                            {...(!isV3 && {color: 'white'})}
                                        />
                                    }
                                >
                                    <Menu.Item onPress={() => {
                                    }} title="Finalizar Projeto"/>
                                    <Menu.Item onPress={() => {
                                    }} title="Editar"/>
                                    <Divider style={isV3 && styles.md3Divider}/>
                                    <Menu.Item onPress={() => handleConfirmDeleteRecipe(recipeId)}
                                               title="Remover"/>
                                </Menu>
                            </Appbar.Header>
                        </View>
                    </View>
                </Card.Content>
            </Card>
            <ModalWarning
                visible={modalVisibleConfirmRemove}
                message={modalMessageConfirmRemove}
                onPrimaryButtonPress={hideModal}
                primaryButtonLabel={'Cancelar'}
                onSecondaryButtonPress={() => removeRecipe(recipeId)}
                secondaryButtonLabel="Sim"
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {},
    card: {
        marginBottom: 16,
        height: 200,
        marginTop: 10,
    },
    cardCover: {
        height: 70,
    },
    titleText: {
        fontSize: 25,
        marginTop: 20
    },
    titleContent: {
        fontSize: 15,
        marginTop: 30
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    list: {
        marginTop: 48,
    },
    md3Divider: {
        marginVertical: 8,
    },
    containerMenu: {
        marginRight: 15,
        alignItems: 'flex-end',
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 30,
    }
});

export default CardRecipe;
