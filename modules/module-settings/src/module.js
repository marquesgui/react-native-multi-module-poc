// import config from './config';

export default class DemoModuleB {
  prefix() {
    return 'settings';
  }

  tabs() {
    return [
      {
        id: 'settings',
        label: 'Settings',
        screen: 'settings.settingsScreen',
        component: require('./SettingsScreen').default,
      },
    ];
  }

  components() {
    return [
      {
        id: 'settings.settingsScreen',
        generator: () => require('./SettingsScreen').default,
      },
    ];
  }

  registerBroadcasts(register) {
    const broadcastManager = require('./broadcastManager');
    const broadcasts = broadcastManager.default;
    const { POSTS_LIST_REVERSE_LAYOUT } = broadcastManager.BROADCASTS;
    broadcasts.addBroadcast(POSTS_LIST_REVERSE_LAYOUT, register(POSTS_LIST_REVERSE_LAYOUT, 'notify all modules to reset their data'));
  }

  methods() {
    return [];
  }
}
