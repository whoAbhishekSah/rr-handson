import React from "react";
import ReactDOM from "react-dom/client";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";
import ErrorPage from "./error-page";
import Contact, { loader as contactLoader } from "./routes/contacts";
import EditContacts, { action as editAction } from "./routes/edit";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SendMessage, { action as sendMessageAction } from "./routes/sendMessage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContacts />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/send_message",
        element: <SendMessage />,
        loader: contactLoader,
        action: sendMessageAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
