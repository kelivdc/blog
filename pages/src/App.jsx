import { Admin, Resource, fetchUtils } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider'
import Dashboard from './Dashboard'
import { CategoryList, CategoryCreate, CategoryEdit } from './category/Category'

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }
  const token  = localStorage.getItem('auth');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
const dataProvider = jsonServerProvider('http://localhost:8080/api/v1/admin', httpClient);


const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} title="CMS" dashboard={Dashboard}>
    <Resource name="categories" list={CategoryList} create={CategoryCreate} edit={CategoryEdit} />
  </Admin>
);

export default App;