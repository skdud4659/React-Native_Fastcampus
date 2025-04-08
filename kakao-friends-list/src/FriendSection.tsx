import { TouchableOpacity, View, Text } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import { friendProfiles } from "./data";

export default (props: {onPress: ()=>void, isOpened: boolean}) => {
    return (
       <View style={{ flexDirection:'column' }}>
         <View style={{ flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
            <Text style={{ color:'grey'}}>친구 {friendProfiles.length}</Text>
            <TouchableOpacity onPress={props.onPress}>
                <Ionicons name={props.isOpened ? 'arrow-up-circle-outline' : 'arrow-down-circle-outline'} size={24} color="lightgrey" />
            </TouchableOpacity>
         </View>
       </View>
    )
}