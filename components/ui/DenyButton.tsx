import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const DenyButton = ({ label, onPress }: any) => {
  return (
    <TouchableOpacity
      className="flex justify-center items-center w-[70px] h-[40px] rounded-full bg-deny"
      onPress={onPress}
    >
      <Text className="text-white  text-12 font-helvetica-bold">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default DenyButton;
