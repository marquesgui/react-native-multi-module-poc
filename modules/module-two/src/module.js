export default class ModuleTwo {
  prefix() {
    return 'two';
  }

  tabs() {
    return [
      {
        id: 'two',
        label: 'Two',
        screen: 'two.twoScreen',
        component: require('./ModuleTwoScreen').default,
      },
    ];
  }
}
