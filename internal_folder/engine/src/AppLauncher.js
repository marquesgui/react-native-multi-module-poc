import autobind from 'react-autobind';
export class AppLauncher {
  constructor({ moduleManager }) {
    this.moduleManager = moduleManager;
    autobind(this);
  }

  /**
   * launch the js application, evantually it will call setRoot in navigation as a function of the state
   * @param appAlreadyLaunched
   * @returns {Promise<void>}
   */
  async launch(appAlreadyLaunched) {
    const AppRegistry = require('react-native').AppRegistry;
    AppRegistry.registerComponent('engine', () => require('./App').default);
  }
}
