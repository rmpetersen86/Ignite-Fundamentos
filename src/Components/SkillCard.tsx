import React from 'react';
import { 
    TouchableOpacity, 
    TouchableOpacityProps,
    Text, 
    StyleSheet 
} from 'react-native';

interface SkillCardProps extends TouchableOpacityProps {
    skillName: string
}

export function SkillCard({ skillName, ...rest }: SkillCardProps) {
    return (
        <TouchableOpacity
            style={styles.buttonSkill}
            {...rest}            
        >
            <Text style={styles.textSkill}>
                {skillName}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonSkill: {
        backgroundColor: '#1F1E25',
        borderRadius: 50,
        padding: 15,
        alignItems: 'center',
        marginVertical: 5
    },
    textSkill: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
    }
})