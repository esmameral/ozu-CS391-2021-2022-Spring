# reactjs-hooks

In this lab, you will learn and use `React Hooks`.

### What is React Hooks?
Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class. It solves the problem of class and stateless functions. For more [detail](https://reactjs.org/docs/hooks-intro.html).

- [reactjs-hooks](#reactjs-hooks)
    - [What is React Hooks?](#what-is-react-hooks)
  - [1. Hook](#1-hook)
  - [2. useState](#2-usestate)
  - [3. Component with Hooks](#3-component-with-hooks)
  - [4. useEffect](#4-useeffect)
  - [5. useReducer](#5-usereducer)

<br/>

****

<a name="hook"></a>

## 1. Hook

A Hook component is look like `Stateless Function` component but it can be use state on it. Let's create a simple `Hook`.

```javascript
import React from 'react';
 
const Home = () => {
    return (
        <p>Hello World</p>
    )
}

export default Home;
```

It looks good and super easy. Let's continue with `state management`, it means `useState`.


<br/>

****

<a name="usestate"></a>

## 2. useState

First and easy feature is `useState`. It is the same with react `state`. 

Import `useState` to your Home screen.

```javascript
import React, { useState } from 'react';
```

**Creating state:**

```javascript
const Home = () => {
    const [name, setName] = useState('John Doe')

    // return etc.
}
```

When you look at the top, something different from the normal `state` usage. We were defining state in `constructor`. But now, we are creating with `const` and we use `useState()` function. Something different in here but more easy than the `class type`.

- `name` is equal to `this.state.name`
- `setName` is equal to `this.setState({ name: 'John Doe' })`
- `useState` is equal to `constructor state`. "John Doe" is a default state.

**Call state:**

```javascript
const Home = () => {
    return (
        <p>Username: {name}</p> // Just change "John Doe" with {name}
    )
}
```

When you run your application, you will see the `John Doe` text on the screen.


**Update State:**

We will create a new function to update text with input. To update state, we used `setName` as a `function`.

```javascript
const changeName = (text) => {
    text === "" ? setName('John Doe') : setName(text)
}
```

Call the `changeName()` function in render section inside the `<Input />` component like that.

```javascript
<form>
    <label>
        Name:
        <input
            type="text"
            placeholder="Username"
            className="input"
            onChange={(event) => { changeName(event.target.value) }}
        />
    </label>
</form>
```

Now, we are ready to use it on our app. Run your app and see the changes. Type your name, update the `username: John Doe` text.


<br/>

****

<a name="component"></a>

## 3. Component with Hooks

Hooks component looks like `stateless function` component. Just something is different in `Hooks`. You learn the details and see the differences between `hooks` and `stateless`.

Create a new folder under `/src/components` with name `UserInfo`. Create a `index.js` file under this folder. 

```javascript
import React from 'react';
import styles from './styles';

const UserInfo = () => {
    return <p className="username-text">Username: "John Doe"</p>;
}

export default UserInfo;
```

And now, add the `props` for get the info from parent component.

```javascript
const UserInfo = (props) => { // Add props like this
    return <p className="username-text">Username: {props.name}</p>; // Use props in here
}
```

> Note: `props.name` is equal to `this.props.name`.


Call the component in `Home` screen.

```javascript
import UserInfo from '../../components/UserInfo';
```

In render:

```xml
<div className="container">

    <UserInfo name={name} /> <!-- Add this line -->

    <form>
        <label>
            Name:
            <input
                type="text"
                placeholder="Username"
                className="input"
                onChange={(event) => { changeName(event.target.value) }}
            />
        </label>
    </form>
</div>
```

As you see, components with hooks is very simple.

<br/>

****

<a name="useeffect"></a>

## 4. useEffect

If you’re familiar with React class `lifecycle methods`, you can think of `useEffect` Hook as `componentDidMount, componentDidUpdate, and componentWillUnmount` combined. Well, how we will use it.

Open `LifeCycles` file from under `/src/containers`. And create some states for the follow `useEffect` how works. We are going to create new `setInterval` example so that create three states. These are:

- To keep `count`.
- To keep `intervalActive` and `internalPassive` state.
- To change button text, we will use `buttonText`. 

Import `useState` and `useEffect`. We are going to use them.

```javascript
import React, { useState, useEffect } from 'react';
```

```javascript
const LifeCycles = () => {
    const [count, setCount] = useState(0);
    const [intervalActive, setIntervalActive] = useState(false);
    let [buttonText, setButtonText] = useState('Activate Intervals');

    // render etc.
}
```

Show `count` and `buttonText` on screen.

```javascript
    return (
        <div className="container">
            <p className="count-text">{count}</p>
            <button onClick={() => ()} type="button">
                {buttonText}
            </button>
        </div>
    )
```

We showed `count` and `buttonText` on screen. Now, we should use `useEffect` to create `interval`.

```javascript
useEffect(() => {
    const interval = setInterval(() => {
        setCount(count => count + 1)
    }, 1000);
}, [])
```

Our `useEffect` is ready but we must remove listener while component `unmount`. That's why we will `unmount` to interval. If your effect returns a function, React will run it when it is time to clean up. Unmount process is defined in `useEffect`'s `return` like this.

```javascript
useEffect(() => {
    const interval = setInterval(() => {
        // console.log('interval executes');
        setCount(count => count + 1)
    }, 1000)
    return () => {
        // console.log('unmounts');
        clearInterval(interval)
    }
}, []);
```

To manage `start/stop` of `setInterval`. We should create a new function.

```javascript
const manageInterval = () => {
    setButtonText(intervalActive ? buttonText = 'Activate Intervals' : buttonText = 'Deactivate intervals');

    setIntervalActive(!intervalActive);
}
```

We created `intervalActive` situation in container, but we didn't set it in `useEffect`.

```javascript
useEffect(() => {
    if (intervalActive) { // Add this if block
        const interval = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    } // Close if block
}, [intervalActive]) // Set the intervalActive state
```

And finally, we will call the `managementInterval` function in `onPress` of `<Button>` component.

```xml
<button onClick={manageInterval} type="button">
    {buttonText}
</button>
```

You are ready to run project.


<br/>

****

<a name="usereducer"></a>

## 5. useReducer

An alternative to `useState`. Accepts a reducer of type `(state, action) => newState`, and returns the current state paired with a `dispatch` method. (If you’re familiar with Redux, you already know how this works.)

We will create a new counter and will use `useReducer`. Open `ReducerHook` file which is under the path `setup/src/containers`. Import `useReducer` like this.

```javascript
import React, { useReducer } from 'react';
```

After importing create a new `initialState` and `counterReducer` like below before the `ReducerHook` function. You are familiar with `redux`.

```javascript
const initialState = { count: 0 };

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
};
```

We are ready to define `useReducer` function.

```javascript
const ReducerHook = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState); // Add this line

    // ....
}
```

Create a new two function to `increase` and `decrease` counter data. It must be define in `ReducerHook` function because of to access state.

```javascript
const handleIncrease = () => {
    dispatch({ type: 'INCREMENT' });
};

const handleDecrease = () => {
    dispatch({ type: 'DECREMENT' });
};
```

Final touch of our `ReducerHook` component. Call the function with `<Button />` component like that.

```xml
<div className="container">
    <h1 className="counter-title">Counter</h1>
    <p className="counter">Count: {state.count}</p>

    <div className="buttons">
        <button className="btn" onClick={handleIncrease}>Increase +</button>
        <button className="btn" onClick={handleDecrease}>Decrease -</button>
    </div>
</div>
```

Run your project and test it.


<br />

In this lab, we learned how to use hooks and implement it to our project. We used most using hooks method and developed an app. 
