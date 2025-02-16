function customRender(reactElement, container){
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement) 
    */
   // This is more optimized approach in this section 
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
    if(prop === 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop])        
    }
    container.appendChild(domElement)
   
}

const reactElement = {
    type : 'a',
    props: {
        href: 'https://www.google.com',    // Ye bta raha hai k react me actually me tree structure kese bnta hai jab hum html elements ko kese dekhta hai
        target: '_blank'                 // pehle ye type deta hai k obj kis type ka hai then ye props deta hai joke ek obj hota hai
    },                                  // Phir ye children deta hai
    children: 'Click Me To Visit Google' // Asa hota mhi hai ye just terminologies hai . To ye sab apko react k through milta hai
}


const mainContainer = document.querySelector('.root')

// Ab ek method banate hai jisme me ye render krde means ye uper react element ko root me add krde. Jese ReactDom me hota hai

customRender(reactElement, mainContainer)

