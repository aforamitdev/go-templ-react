import { createRoot } from 'react-dom';
import Dashboard from './Dashboard';
const DashboardRoot = document.getElementById('dashboard');

if (!DashboardRoot) {
  throw new Error('Could not find element with id dashboard');
}
const headerReactRoot = createRoot(DashboardRoot);
const data = DashboardRoot.getAttribute('js-reactroot');
const dataJson = data ? JSON.parse(data) : {};
headerReactRoot.render(Dashboard({ data: dataJson }));
