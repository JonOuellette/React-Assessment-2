### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  React Router is a library used to manage navigation in React apps.  It allows for the creation of single page aplications by linking the URL in the browswer to the application components thus allowing for dynamic content changes without page reloads.  

- What is a single page application?
  A single page application is one that interacts with the users by dynamically rewriting the current page rather than loading entire new pages.  

- What are some differences between client side and server side routing?
  Some of the key differences between client-side and server-side routing is that server side routing will reload a new page (by makinga  request to the server) with every url change where as client side is able to update the url and page content without loading a new page.
  As such client-side routing generally provides a faster and smoother user experience after the initial page load.  Due to how client side and server side routing function, server side routing handles Search Engine Optimzations(SEO) considerably better than client-side routing.

- What are two ways of handling redirects with React Router? When would you use each?
  The 2 ways to handle redirects are by calling the .push mehtod on the istory object or by using the Redirect componnent - at least as of the time of this video.  In the current v6 version the Navigage component is used to redirect and will use the push logic as a default versus the replace logic that Redirect used by default.
      in v6 to redirect one would use <Navigate to = ""/> or <Navigate to= "" replace />

- What are two different ways to handle page-not-found user experiences using React Router? 
  The 2 different wayts to handle a page-not-found using react router woudl be to use the catch all route path to a Page not found component.  i.e  <Route path="*" component={NotFoundPage} />.  In v6 there is now a useRouteError hook with the isRouteErrorResponse utility

- How do you grab URL parameters from within a component using React Router?
    By useing the useParams hook which stores info on the URL parameters. 

- What is context in React? When would you use it?
  Context in React allows components to pass infromation deep down without explicitly passing props thus allowing to share state in your applications.  

- Describe some differences between class-based components and function components in React.
  The syntax between the two is a major difference between cass and functional components.  With that comes with how state is handled.  In class components, hooks are not used, instead state is managed by the class constructor, the use of this and having to bind functions.  Class based functions did not modularize code well as it did not share logic easily among components and often time had repaiting code and logic in the lifecycle of a component.  Function components initially could not use state but with the creation of hooks that changed and fixes a lot of the issues that class based components had.

- What are some of the problems that hooks were designed to solve?
  Hooks were disgned to reduce the complexity that was required in class based componenets when reusing stateful logic across multiple componenets.  Hooks allowed to reuse state without changing the component heirarchy making it easier to share hooks among components. Class components use of lifecycle methods lead to large components that performed multiple tasks.  Hooks made it easier to modulize/split components into smaller functions. Hooks were also to allow function compnoents to be able to use state and use effect which was not possible prior to hooks.  