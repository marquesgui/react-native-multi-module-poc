export default class ModuleThree {
  prefix() {
    return 'three';
  }

  tabs() {
    return [
      {
        id: 'three',
        label: 'Three',
        screen: 'three.ThreeScreen',
        component: require('./ModuleThreeScreen').default,
      },
    ];
  }
}
