import Header from './src/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { friendProfiles, myProfile } from './src/data';
import FriendSection from './src/FriendSection';
import ProfileItem from './src/ProfileItem';
import Divider from './src/Divider';
import { useState } from 'react';
import FriendList from './src/FriendList';
import { FlatList, View } from 'react-native';
import TabBar from './src/TabBar';


export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPress = () => {
      setIsOpened(!isOpened)
  }

  const listHeaderComponent = () => {
    return (
        <View style={{ backgroundColor:'white' }}>
            <Header />
            <ProfileItem
            uri={myProfile.uri}
            name={myProfile.name}
            introduction={myProfile.introduction}
            />
            <Divider /> 
            <FriendSection 
                onPress={onPress}
                isOpened={isOpened}
            /> 
        </View>
    )
  }

  const renderItem = ({item, idx}: {item: any, idx: number}) => {
    return (
        <View style={{ marginTop: idx === 0 ? 0 : 10 }}>
            <ProfileItem
                uri={item.uri}
                name={item.name}
                introduction={item.introduction}
            />
      </View>
    )
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor:'white' }} edges={['top', 'bottom', 'right', 'left']}>
        <FlatList 
            data={isOpened ? friendProfiles : []}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            keyExtractor={(_, idx) => `friend-item-${idx}`}
            stickyHeaderIndices={[0]}
            ListHeaderComponent={listHeaderComponent}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => renderItem({ item, idx: index })}
        />

        <TabBar
            selectedTabIdx={selectedTabIdx}
            setSelectedTabIdx={setSelectedTabIdx}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
