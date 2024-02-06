import { Provider } from "react-redux";
import AdminPanel from "../pages/AdminPanel";
import Layout from "../shared/components/Layout";
import Theme from "./Theme";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Theme>
        <Layout>
          <AdminPanel />
        </Layout>
      </Theme>
    </Provider>
  );
}

export default App;
