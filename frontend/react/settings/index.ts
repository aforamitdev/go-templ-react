import { createRoot } from 'react-dom';
import Settings from './Settings';
const SettingRoot = document.getElementById('settings');

if (!SettingRoot) {
  throw new Error('Could not find element with id settings');
}
const headerReactRoot = createRoot(SettingRoot);
headerReactRoot.render(Settings({}));
