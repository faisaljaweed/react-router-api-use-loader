import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ContactsPage, { Contactloader } from "./pages/Contacts";
import NotFoundPage from "./pages/NotFound";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ContactDetailPage, { ContactDetailLoader } from "./pages/ContactDetail";
import { ContactNotFound } from "./ContactNotFound";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<RootLayout />} errorElement={<NotFoundPage />}>
      <Route index={true} element={<HomePage />} />

      <Route
        path="contacts"
        element={<ContactsPage />}
        loader={Contactloader}
      />

      <Route
        path="contacts/:contactId"
        element={<ContactDetailPage />}
        loader={ContactDetailLoader}
        errorElement={<ContactNotFound />}
      />
    </Route>
  )
);

export default appRouter;
