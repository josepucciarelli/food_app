import {View, Text, Button, Alert} from 'react-native'
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import {Link, router} from "expo-router";
import {useState} from "react";
import {createUser} from "@/lib/appwrite";

const SignUp = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [form, setForm] = useState({name: '', email: '', password: ''});

    const submit = async () => {
        const { name, email, password } = form;

        if (!name || !email || !password) return Alert.alert('Error', 'Please enter a valid email or password');

        setIsSubmitting(true);

        try {
            await createUser({ email, password, name })

            router.replace('/');
        } catch (e: any) {
            Alert.alert('Error', e.message);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <View className="gap-10 bg-white rounded-lg p-5 mt-5">
            <CustomInput
                placeholder="Enter your full name"
                value={form.name}
                onChangeText={(text) => setForm((prev) => ({...prev, name: text}))}
                label='Full name'
            />
            <CustomInput
                placeholder="Enter your email address"
                value={form.email}
                onChangeText={(text) => setForm((prev) => ({...prev, email: text}))}
                label='email'
                keyboardType="email-address"
            />
            <CustomInput
                placeholder="Enter your password"
                value={form.password}
                onChangeText={(text) => setForm((prev) => ({...prev, password: text}))}
                label='Password'
                secureTextEntry={true}
            />

            <CustomButton
                title="Sign up"
                isLoading={isSubmitting}
                onPress={submit}
            />

            <View className="flex justify-center mt-5 flex-row gap-2">
                <Text className="base-regular text-gray-100">
                    Have an account?
                </Text>
                <Link href="/sign-in" className="base-bold text-primary">
                    Sign In
                </Link>
            </View>
        </View>
    )
}
export default SignUp
