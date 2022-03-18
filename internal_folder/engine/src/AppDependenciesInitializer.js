import { AppLauncher } from './AppLauncher';
import { ModuleManager } from './ModulesManagement/ModuleManager';
import { ModuleInitializer } from './ModulesManagement/ModuleInitializer';

export async function init(engineConfig, moduleGenerators) {
  const {
    moduleRegistry,
    sendBroadcast,
    registerMethod,
    registerComponent,
    registerListener,
    removeListener,
    registerConsumedServices,
    invoke,
  } = require('./ModulesManagement/EngineModuleRegistry');
  const moduleInitializer = new ModuleInitializer({
    sendBroadcast,
    registerMethod,
    registerComponent,
    registerListener,
    removeListener,
    registerConsumedServices,
    modulesConfig: engineConfig.modulesConfig,
  });
  const moduleManager = new ModuleManager({
    engineConfig,
    moduleGenerators,
    moduleInitializer,
  });
  const appLauncher = new AppLauncher({ moduleManager });
  return {
    appLauncher,
    moduleManager,
    moduleInitializer,
    moduleRegistry,
    sendBroadcast,
    registerMethod,
    registerComponent,
    registerListener,
    removeListener,
    registerConsumedServices,
    invoke,
  };
}
