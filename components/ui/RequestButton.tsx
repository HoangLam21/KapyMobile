import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const RequestButton = ({ type, width, height, onPress }: any) => {
  return (
    <TouchableOpacity
      className={`flex justify-center items-center rounded-full ${
        type ? "bg-specialRelation" : "bg-cardinal"
      }`}
      style={{ width: width, height: height }}
      onPress={onPress}
    >
      <Text className="text-white text-12 font-helvetica-bold">Accept</Text>
    </TouchableOpacity>
  );
};

export default RequestButton;
