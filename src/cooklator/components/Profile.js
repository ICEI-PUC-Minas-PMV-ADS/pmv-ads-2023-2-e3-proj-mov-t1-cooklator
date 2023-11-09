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
        }
    });

    const [checked, setChecked] = React.useState(false);

    const [name, setName] = React.useState("Usuário Teste");
    const [email, setEmail] = React.useState("usuarioteste@email.com");
    const [currentPassword, setCurrentPassword] = React.useState("");
    const [newPassword, setNewPassword] = React.useState("");
    const [newPasswordConfirmation, setNewPasswordConfirmation] = React.useState("");
    const [valueHour, setValueHour] = React.useState("35");
    const [hideCurrentPassword, setHideCurrentPassword] = React.useState(true);
    const [hideNewPassword, setHideNewPassword] = React.useState(true);
    const [hideNewPasswordConfirmation, setHideNewPasswordConfirmation] = React.useState(true);

    return (

        <View style={{paddingTop: 16}}>
            <Card style={{paddingBottom: 16, marginHorizontal: 8}} elevation={3} >
                <View style={styles.inputContainer}>

                    <Text style={{fontWeight:'bold', paddingTop: 16}}>
                        Perfil
                    </Text>

                    <TextInput
                        style={styles.input}
                        label="Nome"
                        value={name}
                        mode='outlined'
                        onChangeName={name => setName(name)}
                    />
                    <TextInput
                        style={styles.input}
                        label="E-mail"
                        value={email}
                        mode='outlined'
                        onChangeEmail={email => setEmail(email)}
                    />

                    <View style={styles.input}>
                        <TextInput
                            style={{width: '100%', paddingBottom: 0}}
                            label="Valor por Hora"
                            value={valueHour}
                            mode='outlined'
                            onChangeValueHour={valueHour => setValueHour(valueHour)}
                        />
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={{fontWeight: 'bold', fontSize: 10}}>Fixar para todos os projetos</Text>
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
                        onChangeSenhaAtual={currentPassword => setCurrentPassword(currentPassword)}
                        right={<TextInput.Icon icon={hideCurrentPassword ? "eye" : "eye-off"} onPress={() => !setHideCurrentPassword}/>}
                        secureTextEntry={hideCurrentPassword}
                    />
                    <TextInput
                        style={styles.input}
                        label="Nova Senha"
                        value={newPassword}
                        mode='outlined'
                        onChangeNovaSenha={newPassword => setNewPassword(newPassword)}
                        right={<TextInput.Icon icon={hideNewPassword ? "eye" : "eye-off"} onPress={() => !setHideNewPassword}/>}
                        secureTextEntry={hideNewPassword}
                    />
                    <TextInput
                        style={styles.input}
                        label="Confirmação Nova Senha"
                        value={newPasswordConfirmation}
                        mode='outlined'
                        onChangeConfirmacaoNovaSenha={newPasswordConfirmation => setNewPasswordConfirmation(newPasswordConfirmation)}
                        right={<TextInput.Icon icon={hideNewPasswordConfirmation ? "eye" : "eye-off"} onPress={() =>    !setHideNewPasswordConfirmation}/>}
                        secureTextEntry={hideNewPasswordConfirmation}
                    />

                    <Button
                        style={{marginBottom: 16}}
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
