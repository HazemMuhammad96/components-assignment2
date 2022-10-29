import {StatusBar} from 'expo-status-bar';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from "./styles";
import {useMemo, useState} from "react";


function EnhancedButton({disabled, onPress, title, ...rest}) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={(e) => {
                if (!disabled)
                    onPress(e)
            }}
            disabled={disabled}
            style={disabled
                ? {...styles.button, ...styles.disabled}
                : {...styles.button, ...styles.enabled}
            }
            {...rest}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default function App() {

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isDataValid = useMemo(() => emailRegex.test(email) && password.length >= 8, [email, password])

    function onSubmit() {
        Alert.alert("Your Data", `Email: ${email}\nPassword: ${password}`)
    }

    return (
        <View style={styles.container}>

            <StatusBar style="auto"/>
            <View>
                <Text style={styles.title}>Welcome Back</Text>
                <Text style={styles.subTitle}>Enter Your Login Credintials</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter your email address"
                    value={email}
                    onChangeText={v => setEmail(v)}
                    keyboardType="email-address"
                />
                <TextInput
                    secureTextEntry
                    style={styles.input}
                    placeholder="Enter your password"
                    value={password}
                    onChangeText={v => setPassword(v)}
                />
            </View>

            <EnhancedButton
                title={"Submit"}
                onPress={onSubmit}
                disabled={!isDataValid}
            />


        </View>
    );
}

