import React from 'react';
import {View, StyleSheet} from 'react-native';
import {FAB, Portal, Provider, useTheme} from 'react-native-paper';

const FloatingMenu = () => {

    const [visible, setVisible] = React.useState(true);
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();

    return (
        <>
        <View style={styles.column}>
            <Provider theme={theme}>
                <Portal>
                    <FAB.Group
                        open={open}
                        icon={open ? 'carrot' : 'plus'}
                        actions={[
                            {
                                icon: 'account', label: 'Perfil', onPress: () => {
                                }
                            },
                            {
                                icon: 'email', label: 'Email', onPress: () => {
                                }
                            },
                            {
                                icon: 'bell',
                                label: 'Remind',
                                onPress: () => {
                                },
                                size: theme.isV3 ? 'small' : 'medium',
                            },
                        ]}
                        onStateChange={({open}: { open: Boolean }) => setOpen(open)}
                        onPress={() => {
                            if (open) {
                                // do something if the speed dial is open
                            }
                        }}
                        visible={visible}
                    />
                </Portal>
            </Provider>
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
    }
});

export default FloatingMenu;
