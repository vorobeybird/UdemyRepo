// console.log(document.querySelector('#current').parentNode);

// console.log(document.querySelector('[data-current="4"]').innerHTML);

// console.log(document.body.firstChild); // Will catch a text node, because we have a break
// console.log(document.body.firstElementChild); //Will catch an element node

for (let node of document.body.childNodes) {
    if(node.nodeName =="#text"){
        continue;
    }
    console.log(node);
}