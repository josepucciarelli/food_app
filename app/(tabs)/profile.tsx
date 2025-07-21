import {View, Text, ScrollView, Image} from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import {images} from "@/constants";
import {ProfileFieldProps} from "@/type";

const Profile = () => {
    return (
        <SafeAreaView className="flex-1">
            <ScrollView
                className="px-5"
                contentContainerStyle={{ paddingBottom: 120 }}
            >
                <Text className="text-2xl font-quicksand-bold my-5">My profile</Text>

                <View className="flex items-center justify-center my-5">
                    <Image
                        source={images.avatar}
                        style={{ width: 110, height: 110, borderRadius: 110 / 2 }}
                        className=" rounded-full h-[110px] w-[110px] border-[3px] border-white shadow-sm shadow-neutral-300"
                    />
                </View>

                </ScrollView>
            </SafeAreaView>
    )
}
export default Profile
