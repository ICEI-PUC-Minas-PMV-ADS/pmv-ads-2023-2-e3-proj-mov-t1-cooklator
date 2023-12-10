import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Card, Checkbox, TextInput} from 'react-native-paper';
import config from "../config";
import {useRoute} from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// import AppBar from './AppBar'

const usersApiUrl = config.usersApiUrl;

const Profile = () => {

    const styles = StyleSheet.create({

        inputContainer: {
            flex: 1,
            justifyContent: 'top',
            alignItems: 'center',
            paddingHorizontal: 16,
        },
        input: {
            width: '100%',
            marginVertical: 10
        },
        invalidInput: {
            color: 'red'
        }
    });

    const route = useRoute();
    const user = route.params?.user;
    const [userProfile, setUserProfile] = React.useState(user);
    const [checked, setChecked] = React.useState(false);
    const [name, setName] = React.useState(userProfile.name);
    const [isNameValid, setIsNameValid] = React.useState(true);
    const [email, setEmail] = React.useState(userProfile.email);
    const [isEmailValid, setIsEmailValid] = React.useState(true);
    const [currentPassword, setCurrentPassword] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [isNewPasswordValid, setIsNewPasswordValid] = React.useState(true);
    const [newPasswordConfirmation, setNewPasswordConfirmation] = React.useState("");
    const [isNewPasswordConfirmationValid, setIsNewPasswordConfirmationValid] = React.useState(true);
    const [valueHour, setValueHour] = React.useState(userProfile.hourValue);
    const [hideCurrentPassword, setHideCurrentPassword] = React.useState(true);
    const [hideNewPassword, setHideNewPassword] = React.useState(true);
    const [hideNewPasswordConfirmation, setHideNewPasswordConfirmation] = React.useState(true);
    const [modalMessage, setModalMessage] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        if (user) {
            setUserProfile(user)
        }
    }, [user]);

    const currentPasswordChange = e => {
        const currentPassword = e.target.value;
        setCurrentPassword(currentPassword);
    }

    const newPasswordConfirmationChange = e => {
        const newPasswordConfirmation = e.target.value;
        setIsNewPasswordConfirmationValid(newPasswordConfirmation !== '' && newPasswordConfirmation.length === 8 && newPasswordConfirmation === newPassword)
        setNewPasswordConfirmation(newPasswordConfirmation);
    }

    const newPasswordChange = e => {
        const newPassword = e.target.value;
        setIsNewPasswordValid(newPassword !== '' && newPassword.length === 8)
        setNewPassword(newPassword);
    }

    const hideCurrentPasswordChange = () => {
        setHideCurrentPassword(!hideCurrentPassword);
    }

    const hideNewPasswordChange = () => {
        setHideNewPassword(!hideNewPassword);
    }

    const hideNewPasswordConfirmationChange = () => {
        setHideNewPasswordConfirmation(!hideNewPasswordConfirmation)
    }

    const nameChange = e => {
        const name = e.target.value;
        setIsNameValid(name !== '' && (name.length >= 5 && name.length <= 15));
        setName(name);
    }

    const emailChange = e => {
        const email = e.target.value;
        setIsEmailValid(validateEmail(email))
        setEmail(email);
    }

    const valueHourChange = e => {
        const valueHour = e.target.value;
        if (!isNaN(valueHour)) {
            setValueHour(valueHour);
        }
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const updateUser = async () => {
        try {
            if ((name !== '' && (name.length >= 5 && name.length <= 15)) && validateEmail(email) && !isNaN(valueHour)) {

                const userUpdated = {
                    email: email,
                    name: name,
                    hourValue: valueHour,
                    password: userProfile.password
                };

                const response = await updateUserRequest(userUpdated);

                if (response.status === 201 || response.status === 200) {
                    const data = await response.json();
                    AsyncStorage.setItem('@USER_DATA', JSON.stringify(data)).then();
                    showModal('Usuário editado com sucesso!');
                }
            } else {
                setIsNameValid(name !== '' && (name.length >= 5 && name.length <= 15));
                setIsEmailValid(validateEmail(email));
            }

        } catch (error) {
            console.log(error);
        }
    }

    const updatePassword = async () => {
        try {
            let userData = getUserData();
            if (userData.password !== currentPassword) {
                console.log('Senha incorreta!')
            } else {
                if ((newPassword !== '' && newPassword.length === 8) && (newPasswordConfirmation !== '' && newPasswordConfirmation.length === 8 && newPasswordConfirmation === newPassword)) {

                    const userPasswordUpdated = {
                        email: userProfile.email,
                        name: userProfile.name,
                        hourValue: userProfile.hourValue,
                        password: newPassword
                    }

                    const response = await updateUserPasswordRequest(userPasswordUpdated);

                    if (response.status === 201 || response.status === 200) {
                        showModal('Usuário editado com sucesso!');
                    }
                } else {
                    setIsNewPasswordValid(newPassword !== '' && newPassword.length === 8);
                    setIsNewPasswordConfirmationValid(newPasswordConfirmation !== '' && newPasswordConfirmation.length === 8 && newPasswordConfirmation === newPassword)
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function getUserData() {
        fetch(usersApiUrl)
            .then((response) => response.json())
            .then((data) => {

                return data.filter(userDb => userDb === userProfile.id);
            })
            .catch((error) => console.error('Erro ao buscar as receitas:', error));
    }

    function updateUserRequest(userUpdated) {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userUpdated),
        };

        return fetch(usersApiUrl + '/' + userProfile.id, requestOptions);
    }

    function updateUserPasswordRequest(userPasswordUpdated) {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userPasswordUpdated),
        };

        return fetch(usersApiUrl + '/' + userProfile.id, requestOptions);
    }

    const showModal = (message) => {
        setModalMessage(message);
        setModalVisible(true);
    };

    return (

        <ScrollView>
            <View style={{paddingTop: 16}}>
                <Card style={{paddingBottom: 16, marginHorizontal: 8}} elevation={3} >
                    <View style={styles.inputContainer}>

                        <Text style={{fontSize: 18, fontWeight:'bold', paddingTop: 16}}>
                            Perfil
                        </Text>

                        <TextInput
                            style={styles.input}
                            outlineColor={isNameValid ? 'gray' : 'red'}
                            label="Nome"
                            value={name}
                            mode='outlined'
                            onChange={nameChange}
                        />
                        {!isNameValid && <Text style={styles.invalidInput}>O nome deve conter entre 5 e 15 caracteres </Text>}
                        <TextInput
                            style={styles.input}
                            outlineColor={isEmailValid ? 'gray' : 'red'}
                            label= "E-mail"
                            value={email}
                            mode='outlined'
                            onChange={emailChange}
                            errorMessage={"Teste"}
                        />
                        {!isEmailValid && <Text style={styles.invalidInput}>Endereço de E-mail inválido</Text>}

                        <View style={styles.input}>
                            <TextInput
                                style={{width: '100%', paddingBottom: 0}}
                                label="Valor por Hora"
                                value={valueHour}
                                mode='outlined'
                                onChange={valueHourChange}
                            />
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Text style={{fontWeight: 'bold', fontSize: 12}}>Fixar para todos os projetos</Text>
                                <Checkbox
                                    status={checked ? 'checked' : 'unchecked'}
                                    onPress={() => {
                                        setChecked(!checked);
                                    }}
                                />
                            </View>
                        </View>

                        <Button icon="square-edit-outline" mode="contained" disabled={!isNameValid || !isEmailValid || isNaN(valueHour)} onPress={updateUser}>
                            Editar
                        </Button>

                    </View>
                </Card>

                <Card style={{paddingBottom: 16, marginHorizontal: 8, marginVertical: 20}} elevation={3} >
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            label="Senha Atual"
                            value={currentPassword}
                            mode='outlined'
                            onChange={currentPasswordChange}
                            right={<TextInput.Icon icon={hideCurrentPassword ? "eye-off" : "eye"} onPress={hideCurrentPasswordChange}/>}
                            secureTextEntry={hideCurrentPassword}
                        />
                        <TextInput
                            style={styles.input}
                            label="Nova Senha"
                            value={newPassword}
                            outlineColor={isNewPasswordValid ? 'gray' : 'red'}
                            mode='outlined'
                            onChange={newPasswordChange}
                            right={<TextInput.Icon icon={hideNewPassword ? "eye-off" : "eye"} onPress={hideNewPasswordChange}/>}
                            secureTextEntry={hideNewPassword}
                        />
                        {!isNewPasswordValid && <Text style={styles.invalidInput}>A nova senha deve conter 8 caracteres</Text>}
                        <TextInput
                            style={styles.input}
                            label="Confirmação Nova Senha"
                            value={newPasswordConfirmation}
                            outlineColor={isNewPasswordConfirmationValid ? 'gray' : 'red'}
                            mode='outlined'
                            onChange={newPasswordConfirmationChange}
                            right={<TextInput.Icon icon={hideNewPasswordConfirmation ? "eye-off" : "eye"} onPress={hideNewPasswordConfirmationChange}/>}
                            secureTextEntry={hideNewPasswordConfirmation}
                        />
                        {!isNewPasswordConfirmationValid && <Text style={styles.invalidInput}>Confirmação de senha inválida</Text>}

                        <Button
                            disabled={!isNewPasswordValid || !isNewPasswordConfirmationValid}
                            style={{marginVertical: 10}}
                            icon="square-edit-outline"
                            mode="contained"
                            onPress={updatePassword}>
                            Alterar Senha
                        </Button>

                    </View>
                </Card>

                {/*<SafeAreaProvider>*/}
                {/*    <AppBar />*/}
                {/*</SafeAreaProvider>*/}

            </View>
        </ScrollView>
    );

}

export default Profile;
