# Higher-Order Components

* A higher-order component, or HOC, is a simply a function that takes a React component
as an argument and returns another React component. 

* Typically, HOCs wrap the incoming component with a class that maintains state or has functionality.

* Higher-order components are the best way to reuse functionality across React components.

An HOC allows us to wrap a component with another component. The parent component can hold state or contain functionality that can be passed down to the composed component as properties. The composed component does not need to know anything about the implementation of an HOC other than the names of the properties and methods that it makes available.