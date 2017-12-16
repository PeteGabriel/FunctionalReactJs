# The component mounting lifecycle

|ES6 class | React.createClass()|
|---------|-------------------|
|getDefaultProps()| |
|constructor(props) | getInitialState()|
|componentWillMount() | componentWillMount()|
|render() | render()|
|componentDidMount() | componentDidMount()|
|componentWillUnmount() | componentWillUnmount()|


## Mounting Lifecycle


The mounting lifecycle consists of methods that are invoked when a component is
mounted or unmounted. In other words, these methods allow you to initially set up
state, make API calls, start and stop timers, manipulate the rendered DOM, initialize
third-party libraries, and more. These methods allow you to incorporate JavaScript to
assist in the initialization and destruction of a component.

The mounting lifecycle is slightly different depending upon whether you use ES6
class syntax or React.createClass to create components. When you use
createClass, getDefaultProps is invoked first to obtain the component’s properties.
Next, getInitialState is invoked to initialize the state.


ES6 classes do not have these methods. Instead, default props are obtained and sent
to the constructor as an argument. The constructor is where the state is initialized.
Both _ES6 class constructors_ and _getInitialState_ have access to the properties and,
if required, can use them to help define the initial state.

