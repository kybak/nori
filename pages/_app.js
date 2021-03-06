/* pages/_app.js */
import "../styles/globals.css";
// import Link from "next/link";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import resultsReducer from "../components/Search/model";

const rootReducer = combineReducers({
  results: resultsReducer
}); // would be in its own file obviously

const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: "30px",
  // you can also just use 'scale'
  transition: transitions.SCALE
};

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* <nav className="border-b p-6">
        <p className="text-4xl font-bold">Metaverse Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">Dashboard</a>
          </Link>
          <Link href="/listings">
            <a className="mr-4 text-pink-500">Listings</a>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-pink-500">Create</a>
          </Link>
        </div>
      </nav> */}
      <Provider store={createStore(rootReducer)}>
        <AlertProvider template={AlertTemplate} {...options}>
          <Component {...pageProps} />
        </AlertProvider>
      </Provider>
    </div>
  );
}

export default MyApp;
