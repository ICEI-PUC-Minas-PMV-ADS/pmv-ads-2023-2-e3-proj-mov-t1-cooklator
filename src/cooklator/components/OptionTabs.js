import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import Timer from "./Timer";
import CardValues from "./CardValues";
import config from "../config";
import { useState, useEffect } from "react";

const costsApiUrl = config.costsApiUrl;

const OptionsTabs = ({ route }) => {
    const [value, setValue] = React.useState('timer');
    const [suggestedPrice, setSuggestedPrice] = useState(0.00);
    const [totalMaterial, setTotalMaterial] = useState(0.00);
    const [totalValueHour, setTotalValueHour] = useState(0.00);
    const [recipeDate, setRecipeDate] = useState(0.00);
    const { recipe } = route.params;

    const buttonStyle = (buttonValue) => {
        return {
            ...styles.button,
            backgroundColor: value === buttonValue ? '#64CCC5' : '#DAFFFB',
            borderColor: '#c4cfce',
        };
    };

    const fetchDataByField = async (recipeId, field, condicionalValue) => {
        try {
            const response = await fetch(`${costsApiUrl}`);
            const data = await response.json();

            if (response.status === 200) {
                const matchingCost = data.find(cost => cost.recipeId === recipeId);
                return matchingCost ? { [field]: matchingCost[field] } : { [field]: condicionalValue };
            } else {
                console.error('Erro ao obter lista de custos', data);
                return { [field]: condicionalValue };
            }
        } catch (error) {
            console.error('Erro na requisição:', error);
            return { [field]: condicionalValue };
        }
    };

    const getSuggestedPrice = async (recipeId) => {
        return fetchDataByField(recipeId, 'totalCost', 0);
    };

    const getTotalMaterial = async (recipeId) => {
        return fetchDataByField(recipeId, 'totalMaterialCost', 0);
    };

    const getTotalValueHour = async (recipeId) => {
        return fetchDataByField(recipeId, 'totalTimeValue', 0);
    };

    const getRecipeDate = async (recipe) => {
        return recipe.startDate ? recipe.startDate :  "10/10/2023";
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [suggestedPriceData, totalMaterialData, totalValueHourData, starDateData] = await Promise.all([
                    getSuggestedPrice(recipe.id),
                    getTotalMaterial(recipe.id),
                    getTotalValueHour(recipe.id),
                    getRecipeDate(recipe)
                ]);

                setSuggestedPrice(suggestedPriceData.totalCost);
                setTotalMaterial(totalMaterialData.totalMaterialCost);
                setTotalValueHour(totalValueHourData.totalTimeValue)
                setRecipeDate(starDateData)
            } catch (error) {
                console.error('Erro ao obter dados:', error);
            }
        };

        fetchData();
    }, [recipe.id]);

    const formatarData = (dataString) => {
        const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
        const data = new Date(dataString);

        return data.toLocaleDateString('pt-BR', options).replace(/\//g, '/');
    }

    const labelStyle = () => {
        return {
            fontSize: 14,
            fontWeight: 'bold',
        };
    };

    return (
        <View style={styles.container}>
            <View style={styles.viewRecipeTitle}>
                <Text style={styles.title}>{recipe.name}</Text>
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
                    <Timer />
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
                    <CardValues cardTitle={'Preço sugerido'} cardSubTitle={suggestedPrice} concatenateCurrency={true} />
                    <CardValues cardTitle={'Materiais'} cardSubTitle={totalMaterial} concatenateCurrency={true} />
                    <CardValues cardTitle={'Valor por hora'} cardSubTitle={totalValueHour} concatenateCurrency={true} />
                </View>
            )}
            {value === 'notes' && (
                <View>
                    <Text style={styles.titleTopic}>Observações</Text>
                    <CardValues cardTitle={'Data de registro da receita'} cardSubTitle={formatarData(recipeDate)} concatenateCurrency={false} />
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

export default OptionsTabs;
