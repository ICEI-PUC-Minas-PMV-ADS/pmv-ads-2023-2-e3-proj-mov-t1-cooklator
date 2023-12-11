import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {SegmentedButtons} from 'react-native-paper';
import Timer from "./Timer";
import CardValues from "./CardValues";
import config from "../config";
import {useState, useEffect} from "react";
import ModalWarning from "./ModalWarning";
import ModalWithInput from "./ModalWithInput";

const costsApiUrl = config.costsApiUrl;
const recipeApiUrl = config.recipeApiUrl;

const OptionsTabs = ({route}) => {
    const [value, setValue] = React.useState('timer');
    const [suggestedPrice, setSuggestedPrice] = useState(0.00);
    const [totalMaterial, setTotalMaterial] = useState(0.00);
    const [totalValueHour, setTotalValueHour] = useState(0.00);
    const [recipeDate, setRecipeDate] = useState(0.00);
    const {recipe} = route.params;
    const [recipeData, setRecipe] = useState(recipe);
    const [modalVisibleConfirmEdition, setModalVisibleConfirmEdition] = useState(false);
    const [modalMessageConfirmEdition, setModalMessageConfirmEdition] = useState('');
    const [modalVisibleEdition, setModalVisibleEdition] = useState(false);
    const [modalMessageEdition, setModalMessageEdition] = useState('');
    const [inputValue, setInputValue] = useState('');

    const showModal = (message, typeModal) => {
        if (typeModal === "confirm") {
            setModalVisibleConfirmEdition(true);
            setModalMessageConfirmEdition(message);
        } else if (typeModal === "edit") {
            setModalVisibleEdition(true);
            setModalMessageEdition(message);
        }
    };

    const hideModal = (typeModal) => {
        if (typeModal === "confirm") {
            setModalVisibleConfirmEdition(false);
            setModalMessageConfirmEdition('');
        } else if (typeModal === "edit") {
            setModalVisibleEdition(false);
            setModalMessageEdition('');
        }

    };

    const handleConfirmCommentEdition = async () => {
        showModal('Deseja editar o comentário desta receita?', 'confirm')
    };

    const handleInputCommentEdition = async () => {
        showModal('Insira seu novo comentário?', 'edit')
    };

    const buttonStyle = (buttonValue) => {
        return {
            ...styles.button,
            backgroundColor: value === buttonValue ? '#64CCC5' : '#DAFFFB',
            borderColor: '#c4cfce',
        };
    };

    const getRecipeDate = async (recipe) => {
        return recipe.startDate ? recipe.startDate : "10/10/2023";
    }

    const fetchData = async () => {
        const fetchCostsByField = async (recipeId, field, defaultValue) => {
            try {
                const response = await fetch(`${costsApiUrl}`);
                const data = await response.json();

                if (response.status === 200) {
                    const matchingCost = data.find(cost => cost.recipeId === recipeId);
                    return matchingCost ? matchingCost[field] : defaultValue;
                } else {
                    console.error('Erro ao obter lista de custos', data);
                    return defaultValue;
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
                return defaultValue;
            }
        };

        try {
            const [suggestedPriceData, totalMaterialData, totalValueHourData, starDateData] = await Promise.all([
                fetchCostsByField(recipe.id, 'totalCost', 0),
                fetchCostsByField(recipe.id, 'totalMaterialCost', 0),
                fetchCostsByField(recipe.id, 'totalTimeValue', 0),
                getRecipeDate(recipe),
            ]);

            setSuggestedPrice(suggestedPriceData);
            setTotalMaterial(totalMaterialData);
            setTotalValueHour(totalValueHourData);
            setRecipeDate(starDateData);
        } catch (error) {
            console.error('Erro ao obter dados:', error);
        }
    };

    useEffect(() => {
        if (value === 'values') {
            fetchData();
        }
    }, [value, recipe.id]);

    const formatarData = (dataString) => {
        const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
        const data = new Date(dataString);

        return data.toLocaleDateString('pt-BR', options).replace(/\//g, '/');
    }

    const getRecipeObs = () => {
        return recipeData.comments;
    }

    const labelStyle = () => {
        return {
            fontSize: 14,
            fontWeight: 'bold',
        };
    };

    const updateRecipe = async (recipeId, newCommets) => {
        try {
            const updatedRecipeData = {
                ...recipe,
                comments: newCommets,
            };

            const response = await makeRecipeUpdateRequest(recipeId, updatedRecipeData);

            if (response.status === 201 || response.status === 200) {
                setRecipe(updatedRecipeData)
                hideModal('edit');
                hideModal('confirm');
            }

        } catch (error) {
            console.error('Erro:', error);
        }
    }

    function makeRecipeUpdateRequest(recipeId, updatedRecipeData) {
        const editUrl = recipeApiUrl + '/' + recipeId;

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedRecipeData),
        };

        return fetch(editUrl, requestOptions);
    }

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
                    <Timer recipe={recipe} />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#9F6BA0" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
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
                    <CardValues cardTitle={'Preço sugerido'} cardSubTitle={suggestedPrice} concatenateCurrency={true}/>
                    <CardValues cardTitle={'Materiais'} cardSubTitle={totalMaterial} concatenateCurrency={true}/>
                    <CardValues cardTitle={'Valor tempo de trabalho'} cardSubTitle={totalValueHour} concatenateCurrency={true}/>
                </View>
            )}
            {value === 'notes' && (
                <View>
                    <Text style={styles.titleTopic}></Text>
                    <CardValues cardTitle={'Observações cadastradas:'} cardSubTitle={getRecipeObs()}
                                concatenateCurrency={false} subtitleFontSize={20}
                                showIcon={true} onPressIcon={handleConfirmCommentEdition}
                                colorIcon="#04364A"
                                chosenIcon="lead-pencil"/>
                    <CardValues cardTitle={'Data de registro da receita:'} cardSubTitle={formatarData(recipeDate)}
                                concatenateCurrency={false}/>
                    <CardValues cardTitle={'Valor cadastrado por hora:'} cardSubTitle={recipe.hourValue}
                                concatenateCurrency={true}/>
                </View>
            )}
            <ModalWarning
                visible={modalVisibleConfirmEdition}
                message={modalMessageConfirmEdition}
                onPrimaryButtonPress={() => handleInputCommentEdition()}
                primaryButtonLabel="Sim"
                onSecondaryButtonPress={() => hideModal('confirm')}
                secondaryButtonLabel={'Cancelar'}
            />
            <ModalWithInput
                visible={modalVisibleEdition}
                message="Insira o novo comentário: "
                inputValue={inputValue}
                onPrimaryButtonPress={(value) => {
                    updateRecipe(recipe.id, value)
                    setInputValue('');
                    hideModal('edit');
                    hideModal('confirm')
                }}
                primaryButtonLabel="Salvar"
                onSecondaryButtonPress={() => {
                    hideModal('edit')
                    hideModal('confirm');
                }}
                secondaryButtonLabel="Não salvar"
            />
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
        paddingTop: 15
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
        borderRadius: 10,
        backgroundColor: '#C880B7',
        alignSelf: 'center',
        marginTop: 100
    }
});

export default OptionsTabs;
