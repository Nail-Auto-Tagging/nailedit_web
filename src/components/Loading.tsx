import { useEffect, useRef } from 'react';
import { Animated, Image, Text, View } from 'react-native';


export const Loading = () => {
    const fadeAnim = useRef(new Animated.Value(0.15)).current

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 0.05,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 0.2,
                    duration: 1000,
                    useNativeDriver: true,
                })
            ])
        ).start();
    }, [fadeAnim]);

    return (
        <View style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
        }}>
            <Animated.View
                style={{ justifyContent: "center", alignItems: "center", opacity: fadeAnim }}>
                <Image
                    source={{ uri: process.env.PUBLIC_URL + 'homelogo.png' }}
                    style={{ width: '67px', height: '80px', marginBottom: '16px' }} />
                <Text>
                    분류 중...
                </Text>
            </Animated.View>
        </View>
    );
}