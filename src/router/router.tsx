import { createBrowserRouter } from "react-router-dom";
import { App as Root } from "../pages/App";
import { CountryDetailsPage as CountryDetails } from "../pages/CountryDetailsPage";
import { ErrorPage } from "../pages/ErrorPage";
import { getCountry as countryLoader } from "../utils/getCountry";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />, 
    errorElement: <ErrorPage />
  },
  {
    path: 'country/:countryName',
    element: <CountryDetails />,
    errorElement: <ErrorPage />,
    loader: countryLoader
  }
])