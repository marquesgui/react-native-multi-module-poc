export default class ModuleOne {
  prefix() {
    return 'one';
  }

  tabs() {
    return [
      {
        id: 'one',
        label: 'One',
        screen: 'one.oneScreen',
        component: require('./ModuleOneScreen').default,
      },
    ];
  }
}
