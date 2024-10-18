import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomePage,
  AboutPage,
  BlogPage,
  ContactPage,
  Root,
  BlogPostPage,
  ErrorPage,
  ArchivedBlogPage,
  blogPostLoader,
} from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/about",
            element: <AboutPage />,
          },
          {
            path: "/blog",
            element: <BlogPage />,
            children: [
              {
                index: true,
                element: <BlogPage />,
              },
            ],
          },
          {
            path: "/contact",
            element: <ContactPage />,
          },
          {
            path: "/blog/:blogId",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            loader: blogPostLoader as any,
            element: <BlogPostPage />,
          },
          {
            path: "/blog/archived",
            element: <ArchivedBlogPage />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router} />
);
