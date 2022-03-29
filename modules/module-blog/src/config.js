import { BehaviorSubject } from 'rxjs';

let currentConfig = {
  layoutReversed: true,
};

export const config$ = new BehaviorSubject(currentConfig);

export const getConfig = () => currentConfig;

export const updateConfig = config => {
  currentConfig = config;
  config$.next(config);
};
