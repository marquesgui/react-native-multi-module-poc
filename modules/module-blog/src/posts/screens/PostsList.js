import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { config$, getConfig } from '../../config';
import { useObservableState } from 'observable-hooks';

const PostsList = props => {
  const config = useObservableState(config$, getConfig());

  console.log('PostsList()');
  const flexDirection = config.layoutReversed ? 'row-reverse' : 'row';

  const renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, flexDirection, paddingTop: 8, paddingStart: 8 }}>
        <Image source={{ uri: item.img }} style={{ width: 72, height: 72 }} />

        <View style={{ flex: 1, paddingStart: 8, paddingEnd: 8 }}>
          <Text style={{ fontWeight: 'bold' }} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={{ textAlign: 'justify' }} numberOfLines={3}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  return <FlatList data={props.posts} testID="posts-list" renderItem={renderItem} keyExtractor={item => `${item.id}-key`} />;
};

export default PostsList;
