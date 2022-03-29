import React, { useState } from 'react';
import { Text, View, Switch } from 'react-native';
import broadcastManager, { BROADCASTS } from './broadcastManager';
import config from './config';

const SettingsScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = newValue => {
    broadcastManager.broadcast(BROADCASTS.POSTS_LIST_REVERSE_LAYOUT, newValue);
    config.postsList.reverseLayout = newValue;
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start', padding: 8 }}>
      <Text style={{ flex: 8, fontWeight: 'bold', fontSize: 18 }}>Reverse posts list layout</Text>
      <Switch
        style={{ flex: 2 }}
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default SettingsScreen;
