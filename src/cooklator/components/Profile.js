import React from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// import AppBar from './AppBar'

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

    const [checked, setChecked] = React.useState(false);

    const [name, setName] = React.useState("Usuário Teste");
    const [isNameValid, setIsNameValid] = React.useState(true);
    const [email, setEmail] = React.useState("usuarioteste@email.com");
    const [isEmailValid, setIsEmailValid] = React.useState(true);
    const [currentPassword, setCurrentPassword] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [isNewPasswordValid, setIsNewPasswordValid] = React.useState(true);
    const [newPasswordConfirmation, setNewPasswordConfirmation] = React.useState("");
    const [isNewPasswordConfirmationValid, setIsNewPasswordConfirmationValid] = React.useState(true);
    const [valueHour, setValueHour] = React.useState("35");
    const [hideCurrentPassword, setHideCurrentPassword] = React.useState(true);
    const [hideNewPassword, setHideNewPassword] = React.useState(true);
    const [hideNewPasswordConfirmation, setHideNewPasswordConfirmation] = React.useState(true);

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

    return (

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

                    <Button icon="square-edit-outline" mode="contained" onPress={() => console.log('Pressed')}>
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
                        style={{marginVertical: 10}}
                        icon="square-edit-outline"
                        mode="contained"
                        onPress={() => console.log('Pressed')}>
                        Alterar Senha
                    </Button>

                </View>
            </Card>

            {/*<SafeAreaProvider>*/}
            {/*    <AppBar />*/}
            {/*</SafeAreaProvider>*/}

        </View>

    );

}

export default Profile;
