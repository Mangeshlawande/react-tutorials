function cusRender (element, container){
    cusDom = document.createElement(element.type);
    cusDom.innerHTML = element.child;
    for(let props in element.props){
        if(props==="child")continue;
        cusDom.setAttribute(props,element.props[props]);
    }
    container.appendChild(cusDom);
}

const ele = {
    type:"a",
    props:{
    href: 'https://google.com',
    target: "_blank",
    },
    child :"visit Google",
};



 let container =  document.getElementById('root');
// function that connect element in container ;

cusRender(ele, container);


// function customRender(reactElement, container){
//     /*
//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)

//     container.appendChild(domElement)
//     */

//     const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML = reactElement.children
//     for (const prop in reactElement.props) {
//         if (prop === 'children') continue;
//         domElement.setAttribute(prop, reactElement.props[prop])
//     }
//     container.appendChild(domElement)
// }

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

// const mainContainer = document.querySelector('#root')

// customRender(reactElement, mainContainer)