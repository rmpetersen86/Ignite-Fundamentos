import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    FlatList,
} from 'react-native'

import { Button } from '../Components/Button';
import { SkillCard } from '../Components/SkillCard';

export function Home() {
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [greetings, setGrettings] = useState('');

    function handleAddNewSklill() {
        setMySkills(oldState => [...oldState, newSkill]);
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour < 12) {
            setGrettings('Bom dia');
        }
        else if (currentHour >= 12 && currentHour < 18) {
            setGrettings('Boa tarde')
        } else {
            setGrettings('Boa noite')
        }
    }, [])

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>Bem vindo, Rafael!</Text>

                <Text style={styles.greetings}>
                    {greetings}
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nova Habilidade"
                    placeholderTextColor='#555'
                    onChangeText={setNewSkill}
                />
                <Button onPress={handleAddNewSklill} />

                <Text style={[styles.title, { marginVertical: 50 }]}>
                    Minhas Habilidades
                </Text>

                <FlatList
                    data={mySkills}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <SkillCard skill={item} />
                    )}
                />




            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 70,
        paddingHorizontal: 30
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#1f1e25',
        color: '#FFF',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7
    },
    greetings: {
        color: '#FFF',
        marginVertical: 5,
        fontSize: 16
    }
})