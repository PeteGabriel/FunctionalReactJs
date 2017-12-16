# Passing Properties Down the Component Tree
----

The joy of using React comes from building scalable applications that are easy to understand. The most important thing that you can do to make your application easy to understand is limit the number of components that use state as much as possible.


In many React applications, it is possible to group all state data in the root component. State data can be passed down the component tree via properties, and data can be passed back up the tree to the root via two-way function binding. The result is that all of the state for your entire application exists in one place. This is often referred to as having a “single source of truth”.