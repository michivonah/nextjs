# React
React is a descriptive way to define UI elements and things, which would produce repetive code in plain JS.

React uses JSX is a extension of JavaScript. To render JSX a compiler like babel is required.

React has some core concepts
- Components
- Props
- States

React does manipulate the DOM via JS. Before you can do this, you have to define the app's root. This can be done like this:
```jsx
const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);
```

Now you can render HTML in the DOM:
```jsx
root.render(<h1>Develop. Preview. Ship.</h1>);
```

## Components
Components are reusable building blocks.

React components are defined as a function which returns a DOM element. The name of react components are capitalized. To use a react component it needs to be in angel brackets <> like a HTML tag.

Example component:
```jsx
function Header(){
    return (<h1>Develop. Preview. Ship.</h1>);
}
```

Usage of a component:
```jsx
root.render(<Header />);
```

The trailing slash / before > is required for the component to be rendered.
React components can be nested inside each other. Example:
```jsx
function HomePage(){
    return (
    <div>
        <Header />
    </div>
    );
}
```

## Props
Props is a short form of properties. Props are inherited to children inside the hierarchy.
The ability to accept props is added via the parameter props to the component:
```jsx
function Component(props){
    // Definition of the component
}
```

The props are stored as an JS object. The content of the props can be access via object destruction inside the function parameters of a component.
```jsx
function Component({ title }){
    // Definition of the component
}
```

To use a property inside a component it has to be written in curly braces. Inside of curly braces normal JavaScript can be written and executed. Since a prop is just a JS variable you can access from inside the curly braces.
```jsx
function Component({ title }){
    return (<h1>{title}</h1>);
}
```

But its also possible to access a variable through the props object.
```jsx
function Component(props){
    return (<h1>{props.title}</h1>);
}
```

Normal JS like conditions & iterations can also be used inside of a component.
```jsx
function createTitle(title){
    if(title){
    return title;
    }
    else{
    return "Default createTitle";
    }
}

function Header({ title }){
    return (<h1>{createTitle(title)}</h1>);
}
```

Its also possible to iterate through lists as following example shows:
```jsx
function HomePage(){
    const names = ['Max Meier', 'Josef Berchtold', 'Margrit Barmettler'];

    return (
    <div>
        <ul>
        {names.map((name) => (
            <li>{name}</li>
        ))}
        </ul>
    </div>
    );
}
```

When iterating over an object the items should have a unique `key`, so they can be manipulated by React.
```jsx
<ul>
{names.map((name) => (
    <li key={name}>{name}</li>
))}
</ul>
```

## States
Currently the page is very static and information is not saved.
To make a element interactive an event like `onClick` can be added. THe event names are `camelCase`.

Example:
```jsx
function Component(){
    function handleClick(){
    console.log("increment like count");
    }

    return (
    <div>
        <button onClick={handleClick}>Like</button>
    </div>
    );
}
```

Reacts has some functions that are called `hooks`. A `hook` adds some logic like a state to a component. A state is an information about an componennt which can change over time. Like the value of a toggle switch or a counter. The hook to save a state is named `useState()`. It can be access by using `React.useState()`.

States are saved as an JS array containig of the values and a function for updating the current value.

```jsx
const [likes, setLikes] = React.useState();
```

Commonly the function is named with the prefix `set` followed by the name of the state. A default value can be set in the parentheses of `useState()`.

```jsx
const [likes, setLikes] = React.useState(0);
```

The value of a state can afterwards be accessed via JS.
```jsx
<button onClick={handleClick}>Like ({likes})</button>
```

By calling the `set`-function the value of the state can be updated.
```jsx
setLikes(likes + 1);
```

full example of states
```jsx
function HomePage(){
    const [likes, setLikes] = React.useState(0);

    function handleClick(){
    setLikes(likes + 1);
    }

    return (
    <div>
        <button onClick={handleClick}>Like ({likes})</button>
    </div>
    );
}
```

## Migrate project from React to Next.js
Install React & Next.js
```zsh
npm install react@latest react-dom@latest next@latest
```

Dependencies in package.json:
```json
{
  "dependencies": {
    "next": "^15.3.1",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  }
}
```

## Ressources
- [React Foundations course from Next.js](https://nextjs.org/learn/react-foundations)