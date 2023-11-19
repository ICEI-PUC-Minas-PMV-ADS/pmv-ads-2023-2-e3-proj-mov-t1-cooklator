import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import Timer from "./Timer";
import CardValues from "./CardValues";

const OptionsTabs = () => {
    const [value, setValue] = React.useState('timer');

    const buttonStyle = (buttonValue) => {
        return {
            ...styles.button,
            backgroundColor: value === buttonValue ? '#64CCC5' : '#DAFFFB',
            borderColor: '#c4cfce',
        };
    };

    const labelStyle = () => {
        return {
            fontSize: 14,
            fontWeight: 'bold',
        };
    };

    return (
        <View style={styles.container}>
        <View style={styles.viewRecipeTitle}>
            <Text style={styles.title}>Titulo da Receita</Text>
        </View>
            <SegmentedButtons
                value={value}
                onValueChange={setValue}
                buttons={[
                    {
                        value: 'timer',
                        label: 'Timer',
                        style: buttonStyle('timer'),
                        labelStyle: labelStyle('timer'),

                    },
                    {
                        value: 'materials',
                        label: 'Materiais',
                        style: buttonStyle('materials'),
                        labelStyle: labelStyle('timer'),

                    },
                    {
                        value: 'values',
                        label: 'Valores',
                        style: buttonStyle('values'),
                        labelStyle: labelStyle('timer'),

                    },
                    {
                        value: 'notes',
                        label: 'Notas',
                        style: buttonStyle('notes'),
                        labelStyle: labelStyle('timer'),

                    },
                ]}
                style={styles.group}
            />
            {value === 'timer' && (
                <View style={styles.timeView}>
                    <Text style={styles.titleTimer}>TIMER</Text>
                    <Timer/>
                </View>
            )}
            {value === 'materials' && (
                <View>
                    <Text style={styles.titleTopic}>Materiais aqui</Text>
                </View>
            )}
            {value === 'values' && (
                <View>
                    <Text style={styles.titleTopic}>Valores e precificação</Text>
                    <CardValues cardTitle={'Preço sugerido'} cardSubTitle={'preco calculado'} concatenateCurrency ={true}/>
                    <CardValues cardTitle={'Materiais'} cardSubTitle={'preco calculado'} concatenateCurrency ={true}/>
                    <CardValues cardTitle={'Valor por hora'} cardSubTitle={'preco calculado'} concatenateCurrency ={true}/>
                </View>
            )}
            {value === 'notes' && (
                <View>
                    <Text style={styles.titleTopic}>Observações</Text>
                    <CardValues cardTitle={'Data de registro da recieta'} cardSubTitle={'Data'} concatenateCurrency ={false}/>

                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    titleTopic: {
        margin: 15,
        fontSize: 25,
        fontWeight: '400',
        textAlign: 'center',
    },
    titleTimer: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 200
    },
    button: {
        flex: 1,
    },
    group: {
        paddingHorizontal: 20,
        justifyContent: 'center',
        paddingBottom: 8,
    },
    viewRecipeTitle: {
        flex: 1,
        width: 500,
        height: 400,
        marginTop: 25,
        marginBottom: 25,
        alignSelf: 'center'
    },
    timeView: {
        width: 400,
        height: 400,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginTop: 100
    }
});

OptionsTabs.title = 'Teste';

export default OptionsTabs;