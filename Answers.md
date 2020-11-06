1. What problem does the context API help solve?
   We use the Context API when we have global data that lots of components share, Context provides a way to share values between components without having to explicitly pass a prop through every level of the tree.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   In Redux, all components ’ state is placed in a central location called “store”, makes it accessible to all components without requiring a parent/child relationship; a reducer is a function that takes two parameters(state &action) and returns the current state of the application. Actions are JavaScript objects that contains type property and payload property and they are dispatched or used as arguments by the Redux’s store’s dispatch API method.the store known as a 'single source of truth' in a redux application because the global state of the application is stored in an object tree within a single store.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   Application state is global and component state is local, as the number of components increases, we should use Application state over component state, whereas the Application state is stored in a central location which is accessible to any component.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   Redux-Thunk is middleware that allows us to write action creators that return a function.

1. What is your favorite state management system you've learned and this sprint? Please explain why!
   I would choose React Context over other state management system because it is eady to set up, it doen't require any third-party library.
