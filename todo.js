// html is used to create the visiual element on the  wwb pages
let todo1="get the groceries";
let todo ="get the charger";
let todo2="wash the car";
let todo3="learn the lessons.";
console.log(todo);
let button="click me."
// javaScript is the case sensitive .


// we can create the div using javaScript
let element=document.createElement('div');// busing document.createElement().
element.innerText=todo;// todo variable will be added
document.body.appendChild(element);//adding this div to this page.
// body is parent and div are the child.



let element1=document.createElement('div');
element.innerText=button;
document.body.appendChild('button');


// title.document -----> will chande the title of the document


let todo5="reading the books";
let todo6="writing the essay.";
let todo7="making the project.";
function call(print)
{
    let element=document.createElement('div');
    element.innerText=print;
    Document.body.appendChild(element);

}
function call(todo7);
//forEach function:
let names=["Anjali","geeta","Bhanu"];
names.forEach(function(para)
{
    let element=document.createElement('div');
    element.innerText=print;
    Document.body.appendChild(element);
});