All workdone in src and public folder 
_______________________________________________________

01 basic react application

load page which is index.html
It is called Single page application 

    DOM  :: All elements comes from dom 
    dom manipulation 

manifest.json for metatags 
 index.html
    <noscript> 
    <div>

in src folder entry file is index.js file
    library 
     react :: core foundational library
     react-dom :: To manipulate dom , it is implementation on web 

    react create their own dom called virtual dom , it compare with main dom , and change only specific elements 
    dom :: Tree like structure 
   const root =  ReactDOM.createRoot(document.getElementById('root'))
   root.render(
    <React.StrictMode>
        <App /> //:: html in javascript called jsx;
    </React.StrictMode>
   );
   give fascility to build custom tags 


React.StrictMode :: It is developement specific mode 
    
    App is a function which return a tag 

01 vite react application
______________________________________________________________________________________

    what is virtual dom 
        : React uses a virtual DOM to optimize rendering performance. Instead of directly manipulating the browser's DOM, React creates a lightweight copy (virtual DOM) and updates it first. Then, it efficiently calculates the minimal set of changes needed to update the actual DOM, reducing the number of direct DOM manipulations and improving performance.     
    what is state management 

    what is state 
        State: State is an object that holds data that may change over time and affects the rendering of a component. When the state changes, the component re-renders.
    what is props
        Props: Props (short for properties) are read-only attributes passed from a parent component to a child component. They allow data to flow from one component to another.

    =================
    
    1. introduction to react   vsc, nodejs
        Components: Reusable, self-contained pieces of UI.
        JSX: A syntax extension that allows you to write HTML-like code in JavaScript.
        Virtual DOM: Improves performance by minimizing direct DOM manipulations.
        State and Props: Manage data and pass it between components.
        Hooks: Enable state and lifecycle features in functional components (e.g., useState, useEffect).
        React: Frontend library for building UIs.
        VS Code: Code editor for writing and debugging.
        Node.js: Backend runtime for server-side logic.

    2. class and functional component & jsx  REAct application flow 
        Class Components: Older, more verbose, use lifecycle methods.
        Functional Components: Modern, simpler, use hooks.
        JSX: HTML-like syntax for writing React components.
        React Flow: Components → JSX → State/Props → Virtual DOM → Re-rendering.


    3. what is state and props
     State: State is an object that holds data that may change over time and affects the rendering of a component. When the state changes, the component re-renders.
    
     Props: Props (short for properties) are read-only attributes passed from a parent component to a child component. They allow data to flow from one component to another.

    4. event handling 
        Event Handling: Respond to user interactions like clicks, input changes, etc.
        Synthetic Events: React's wrapper around native browser events.
        Functional Components: Use hooks like useState for state management.
        Class Components: Require binding this for event handlers.
        Passing Arguments: Use arrow functions or bind to pass additional data.

    5. how to fetch data from server and display in react (console log) ?
    Use useState to manage the fetched data, loading state, and errors.
    Use useEffect to perform the data fetching when the component mounts.
    Use fetch or axios to make HTTP requests.
    Handle loading and error states to improve the user experience.


    6. dynamically rendering data in the view 
        
    7.  React.Fragment 
    8. React (client) + fetching data from external API  (Axios) (fetch)- Ajax
    09. React Routing  (React-Router-Dom )
    10. reusable components
    11. passing the data between components 3 ways 
    12. context API
    13.life cycle method in class components (10) - hooks -3
    14. list maps keys 
    15. conditional rendering 
    16. Integrate with other library (bootstrap , react-router-dom, axios, redux )
    18. redux in react 
    19. React + redux(client) + fetching    Data External Api
    20 . introduction to hooks in in reactjs    
    21.useState()
    22. useEffect()
    23.useRef()
    24.useReducer()
    25. useContext()
    26.React Hooks client + fetching data external api  
    27. redux using  react hooks
    28. github search project    


=========================================================
another questions 
        
    what is library 
    react is lib or framework 
    what is react and purpose of react 
    what is component 
    in how many ways u can create components
    what is state and how to update state 
    what happens when useState() is called?
    how to create parent child relations 
    what is props   and why we used props 
    what is application flow 
    what is diff between    render  in react and render in react dom    
    in how many ways we can pass the data  from parent to child  
    in how many ways u can manage state in react application        
    what is context api  and why do we use context api 
    which kind problem will be solve using context api  
    what is Axios anaything alternate  to axios     ? fetch ()  
    how to implement routinig the react application 
    what is the diff between anchor tag and link components 
    how to show page not found component
    what are life-cycle method 
    how many phases
    can u explain life cycle method 
    what is redux 
    why we have to use redux 
    what is reducer
    how redux store is available  to reacte app ?
    what pattern ur connect () is going to the follow  (HOC) ?
    what is redux Logger How to call the reducer
    can u explain redux flow 
    what are hooks
    why hooks were introduced 
    what is use effect or how it will  maintain 3 lifecycle method 
    what is the use of use context()
    how can u create  reference for element in the functional component ? (useRef())
    what is diff between useState and useReducer
    what is the use of useCallback() and useMemo() 
    What is HOC(Higher Order component)
    what are lisft and keys ()?
    How to use redux in functional components 
    what is redux thunk and redux saga 
    how to test ur components ? 


