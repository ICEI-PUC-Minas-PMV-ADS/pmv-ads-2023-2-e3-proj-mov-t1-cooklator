import React, {useState} from 'react';
import {Modal, Text, View, Pressable} from 'react-native';

const ModalWarning = ({visible, message, onClose, onGoTo}) => {

    message = 'Receita adicionada com sucesso';

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.messageText}>{message}</Text>
                    <Pressable
                        onPress={onClose}
                    >
                        <View style={styles.viewText}>
                            <Text>Fechar</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

const styles = {
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(218, 255, 251, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: 300,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#DAFFFB',
        borderWidth: 2,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 4,
    },
    viewText: {
        width: 125,
        height: 33,
        borderRadius: 20,
        border: 10,
        backgroundColor: '#64CCC5',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#DAFFFB',
        borderWidth: 2,
        shadowColor: 'rgba(0, 0, 0, 0.3)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 4,
        elevation: 4,
    },
    messageText: {
        fontSize: 17,
        fontWeight: '500',
        textAlign: 'center',
        paddingBottom: 30,
    },
};

export default ModalWarning;
