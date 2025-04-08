import { View, Text, TouchableOpacity } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props {
    name: any;
}

const IconButton = (props: Props) => {
    return (
        <TouchableOpacity hitSlop={{ top: 15, bottom: 15 }} style={{ paddingHorizontal: 6 }}>
            <Ionicons name={props.name} size={24} color="black" />
        </TouchableOpacity>
    )
}

export default () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold' }}>친구</Text>

            <View style={{ flexDirection: 'row' }}>
                <IconButton name='search-outline' />
                <IconButton name='person-add-outline' />
                <IconButton name='musical-note-outline' />
                <IconButton name='settings-outline' />
            </View>
        </View>
    )
}