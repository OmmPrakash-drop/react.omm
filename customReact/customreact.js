function customRender(reactElement, container){
// const domElement = document.createElement(reactElement.type)  //create element from reactElement and find it's type also
// domElement.innerHTML = reactElement.children  //set a childen 
// domElement.setAttribute('href', reactElement.props.href)  // add attributes to the children
// domElement.setAttribute('target', reactElement.props.target)  // add attribute of target

// container.appendChild(domElement)

    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: "Click me to visit google"
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
