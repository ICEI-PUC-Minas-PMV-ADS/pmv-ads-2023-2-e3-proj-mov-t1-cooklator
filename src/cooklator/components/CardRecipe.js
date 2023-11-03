import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const CardRecipe = ({recipeName, recipeColor}) => (
    <ScrollView contentContainerStyle={styles.container}>
        <Card style={styles.card}>
            <Card.Cover style={{ ...styles.cardCover, backgroundColor: recipeColor }} />
            <Card.Content>
                <View style={styles.cardContent}>
                    <View>
                        <Title style={styles.titleText}>{recipeName}</Title>
                        <Paragraph style={styles.titleContent}>This is card 1 content.</Paragraph>
                    </View>
                </View>
            </Card.Content>
        </Card>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {

    },
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
    },
    titleContent: {
        fontSize: 15,
        marginTop: 30
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
});

export default CardRecipe;
