import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

const CardValues = ({ cardTitle, cardSubTitle, concatenateCurrency }) => {
    const formattedSubtitle = concatenateCurrency ? `R$ ${cardSubTitle}` : cardSubTitle;

    return (
        <Card style={styles.card}>
            <Card.Title
                titleStyle={styles.title}
                subtitleStyle={styles.subtitle}
                title={cardTitle}
                subtitle={formattedSubtitle}
            />
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '90%',
        minHeight: 150,
        alignSelf: 'center',
        backgroundColor: 'rgba(237, 247, 246, 0.9)',
        borderWidth: 1,
        borderColor: '#DAFFFB',
        borderRadius: 10,
        padding: 10,
        margin: 10
    },
    title: {
        color: '#04364A',
        fontSize: 20,
        marginBottom: 25,
        marginTop: 10,
        fontWeight: 'normal',
        alignSelf: 'center',
    },
    subtitle: {
        color: '#176B87',
        height: 50,
        fontSize: 35,
        alignSelf: 'center',
        fontWeight: '400',
        lineHeight: 44,
    },
});

export default CardValues;