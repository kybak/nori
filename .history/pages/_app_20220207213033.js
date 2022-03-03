/* pages/_app.js */
import "../styles/globals.css";
// import Link from "next/link";
import { transitions, positions, Provider as AlertProvider } from "react-alert";

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
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;