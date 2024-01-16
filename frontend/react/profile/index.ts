import { createRoot } from 'react-dom';
import Profile from './Profile';
const ProfileRoot = document.getElementById('profile');

if (!ProfileRoot) {
  throw new Error('Could not find element with id profile');
}
const headerReactRoot = createRoot(ProfileRoot);
headerReactRoot.render(Profile({}));
