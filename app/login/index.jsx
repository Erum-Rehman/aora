import { Image, Pressable, Text, View } from "react-native";
import Colors from '../../constants/Colors'
export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Image style={{ width: '100%', height: 450 }} source={require('../../assets/images/login.png')} />
            <View style={{
                display: 1,
                alignItems: 'center',
                padding: 20,
            }}
            >
                <Text
                    style={{
                        flex: 1,
                        fontFamily: "outfit-bold",
                        fontSize: 30,
                        textAlign: 'center'
                    }}>Ready to make a new friend</Text>
                <Text
                    style={{
                        flex: 1,
                        fontFamily: "outfit",
                        fontSize: 18,
                        textAlign: 'center',
                        color: Colors.grey,
                    }}>Let's adopt the pet which you like and make the life happy again</Text>
                    <Pressable>
                        <Text>
                            Get Started
                        </Text>
                    </Pressable>
            </View>
        </View>
    );
}
