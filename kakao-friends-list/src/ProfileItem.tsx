import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"
import { View, Image, Text } from "react-native"

export default (props: { uri: string; name: string; introduction: string }) => {
    return (
        <View style={{ flexDirection:'row' }}>
            <Image source={{ uri: props.uri}} style={{ width: 50, height: 50, marginRight:10, borderRadius: 20 }} />
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={{ marginBottom: 5, fontWeight: 'bold', fontSize: 16 }}>{props.name}</Text>
                <Text style={{ fontSize: 12, color: 'gray' }}>{props.introduction}</Text>
            </View>
        </View>
    )
}