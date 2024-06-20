import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // createHttpLink,
} from "@apollo/client";

import Nav from "./pages/Nav/Nav.jsx";
import Footer from "./pages/Footer/Footer.jsx";
// import { setContext } from "@apollo/client/link/context";
// import Header from "./components/Header";
import "../node_modules/bootstrap/scss/bootstrap.scss";
import { Outlet } from "react-router-dom";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem("id_token");
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });
// const client = createHttpLink({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="min-100-vh">
        <Nav />
        <Outlet />
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default App;
