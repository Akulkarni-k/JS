let HiAnuja= document.querySelector('button');
HiAnuja.addEventListener('click', inputMsg);

function inputMsg(){
    let name =prompt('enter name student');
    HiAnuja.textContent='Roll No. 1:'+ name;
}