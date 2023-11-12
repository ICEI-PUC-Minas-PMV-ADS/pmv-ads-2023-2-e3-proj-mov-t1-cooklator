import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {FAB, Portal, Provider, useTheme} from 'react-native-paper';
import {useNavigation} from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalWarning from "./ModalWarning";


const FloatingMenu = () => {

    const [visible, setVisible] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleNavigateToRecipesPage = () => {
        navigation.navigate('Receitas');
    };

    const showModal = (message) => {
        setModalMessage(message);
        setModalVisible(true);
    };

    const hideModal = () => {
        setModalVisible(false);
        setModalMessage('');
    };

    const logOut = () => {
        console.log('saiu')
    };

    return (
        <>
            <View style={styles.column}>
                <Provider theme={theme}>
                    <Portal>
                        <FAB.Group
                            fabStyle={styles.fab}
                            open={open}
                            icon={open ? () => <Icon name="silverware-variant" size={24} color="#64CCC5"/>
                                : () => <Icon name="silverware-fork-knife" size={24} color="#64CCC5"/>}
                            actions={[
                                {
                                    icon: 'account', label: 'Perfil', onPress: () => {
                                    },
                                    color: '#DAFFFB',
                                    style: {backgroundColor: '#64CCC5', elevation: 2 },
                                },
                                {
                                    icon: 'muffin', label: 'Receitas', onPress: () => {
                                        handleNavigateToRecipesPage()
                                    },
                                    color: '#DAFFFB',
                                    style: {backgroundColor: '#64CCC5'},
                                },
                                {
                                    icon: 'logout', label: 'Sair', onPress: () => {
                                        showModal('Tem certeza que deseja sair?')
                                    },
                                    size: theme.isV3 ? 'small' : 'medium',
                                    color: '#DAFFFB',
                                    style: {backgroundColor: '#64CCC5'},
                                },
                            ]}
                            onStateChange={({ open }) => setOpen(open)}
                            visible={visible}
                        />
                    </Portal>
                </Provider>
                <ModalWarning visible={modalVisible} message={modalMessage} onPrimaryButtonPress={hideModal}
                              primaryButtonLabel={'Cancelar'} onSecondaryButtonPress={logOut}
                              secondaryButtonLabel={"Sair"}/>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    button: {
        marginTop: 16,
    },
    column: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    fab: {
        backgroundColor: '#DAFFFB'
    }
});

export default FloatingMenu;
