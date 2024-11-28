import { View, Text } from "react-native";
import React from "react";
import { Button } from "react-native-web";
import MainLayout from "../layouts/MainLayout";

export default function HomeScreen({ navigation }) {
  return (
    <MainLayout>
      <View>
        <Text>HomeScreen</Text>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        />
      </View>
    </MainLayout>
  );
}
