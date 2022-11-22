const form = document.getElementById('shippingDetails');
const uname = document.getElementById('inputFirstName');
const surname = document.getElementById('inputSurname');
const date = document.getElementById('deliveryDate');
const street = document.getElementById('street');
const hNum = document.getElementById('houseNumber');
const fNum = document.getElementById('flatNumber');
const input = document.getElementsByTagName('input');

const submitBtn = document.getElementById("submit");
const summary = document.getElementById('summary');

let failures = [];

const validate =(e)=>{
e.preventDefault();
const intext = e.target.value;
if(intext ===""  || intext== null || intext.length <4 ){
        console.log('failure');
        failures.push({input:`${e.target.id}`})
}else{
    failures.splice(indexOf( {input:`${e.target.id}`}), 1)
}
        console.log(failures);

if(failures.length > 0){
        failures.forEach(obj => {
        let field = document.getElementById(`${obj.input}`);
        console.log(field.id)
        field.classList.add('error');
        console.log(field.nextElementSibling)
        field.nextElementSibling.removeAttribute('hidden');
            })}else{
                submitBtn.removeAttribute('disabled');
            };
}

uname.addEventListener('blur', validate);
surname.addEventListener('blur', validate);
street.addEventListener('blur', validate);

const ready =(e)=>{
    e.target.classList.remove("error");
    console.log(e.target.nextElementSibling);
    e.target.nextElementSibling.setAttribute('hidden', 'hidden');
}

uname.addEventListener('focus', ready);
surname.addEventListener('focus', ready);
street.addEventListener('focus', ready);

if(failures.length === 0){
    submitBtn.removeAttribute('disabled');
}

const send =(e)=>{
    e.preventDefault();
summary.removeAttribute('hidden');
}
if(!submitBtn.hasAttribute('disabled')){
submitBtn.addEventListener('click', send);
}




let gifts = document.getElementById('gifts');
    let checkBoxGroup = document.getElementById('gifts').getElementsByTagName('input');

    const checkCountFunc= (e)=>{
        let checkCount =0;
            for(let i =0; i<checkBoxGroup.length; i++){
            if(e.target.checked){
                console.log(e);
        checkCount += checkBoxGroup[i].checked? 1:0;
            }
        }
        if (checkCount>2) {
            alert('You can choose only two free gifts');
        }
    };
    gifts.addEventListener('click', checkCountFunc);

