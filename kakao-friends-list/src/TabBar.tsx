import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Ionicons, Fontisto } from '@expo/vector-icons'; 

const TabButton = (props: { isSelected: boolean, onPress: () => void, activeIconName: any, inactiveIconName: any, isIconFontisto?: boolean, isIconIonicons?: boolean }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={props.onPress}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      {props.isIconFontisto && <Fontisto name={props.isSelected ? props.activeIconName : props.inactiveIconName} size={24} color="black" />}
      {props.isIconIonicons && <Ionicons name={props.isSelected ? props.activeIconName : props.inactiveIconName} size={24} color="black" />}
    </TouchableOpacity>
  )
}

export default (props: { selectedTabIdx: number, setSelectedTabIdx: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <View style={{
      flexDirection: "row",
      borderTopWidth: 0.5,
      borderColor: "grey",
    }}>
      <TabButton
        isSelected={props.selectedTabIdx === 0}
        onPress={() => props.setSelectedTabIdx(0)}
        activeIconName={"person"}
        inactiveIconName={"persons"}
        isIconFontisto
      />
      <TabButton
        isSelected={props.selectedTabIdx === 1}
        onPress={() => props.setSelectedTabIdx(1)}
        activeIconName={"chatbubble"}
        inactiveIconName={"chatbubble-outline"}
        isIconIonicons
      />
      <TabButton
        isSelected={props.selectedTabIdx === 2}
        onPress={() => props.setSelectedTabIdx(2)}
        activeIconName={"pricetag"}
        inactiveIconName={"pricetag-outline"}
        isIconIonicons
      />
      <TabButton
        isSelected={props.selectedTabIdx === 3}
        onPress={() => props.setSelectedTabIdx(3)}
        activeIconName={"add-circle"}
        inactiveIconName={"add-circle-outline"}
        isIconIonicons
      />
    </View>
  )
}