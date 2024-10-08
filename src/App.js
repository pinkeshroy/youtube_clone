import React from "react";
import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SuggestionPage from "./components/SuggestionPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "youtube_clone",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "video",
        element: <SuggestionPage />,
      },
    ],
  },
]);
const App=()=>{
  return(
    <Provider store={store}>
    <Head/>
    <RouterProvider router={appRouter}/>
    </Provider>
    )
  }
  export default App;
  