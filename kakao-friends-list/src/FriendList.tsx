import React from 'react';
import { ScrollView, View } from 'react-native';
import ProfileItem from './ProfileItem';
import { friendProfiles } from './data';

export default (props: {isOpened: boolean}) => {
  return props.isOpened && (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 10}}>
        {friendProfiles.map((i, idx) => (
            <View key={`friend-item-${idx}`} style={{ marginTop: idx === 0 ? 0 : 10 }}>
                <ProfileItem
                    uri={i.uri}
                    name={i.name}
                    introduction={i.introduction}
                />
            </View>
        ))}
    </ScrollView>
  )
}