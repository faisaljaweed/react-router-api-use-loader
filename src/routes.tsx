import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import ContactsPage from "./pages/Contacts";
import NotFoundPage from "./pages/NotFound";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ContactDetailPage from "./pages/ContactDetail";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path=""
      element={<RootLayout />}
      errorElement={<NotFoundPage />}>
        
      <Route path="" element={<HomePage />} />

      <Route path="contacts" element={<ContactsPage />} />
      
      <Route path="contacts/:contactId" element={<ContactDetailPage />} />

    </Route>
  )
);

export default appRouter;
