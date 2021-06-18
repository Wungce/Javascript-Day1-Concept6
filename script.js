const MyInput = document.createElement('input');
document.body.appendChild(MyInput);

const MyButton = document.createElement('button');
document.body.appendChild(MyButton);
MyButton.innerHTML="Button";


 MyInput.addEventListener('input' ,doit);

 function doit(event){

    console.log(event.target.value)
 }