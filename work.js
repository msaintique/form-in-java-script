let body=document.getElementsByTagName("body")[0];
 console.log(body);

//create form
let form=document.createElement("form");
form.classList.add("for");
form.setAttribute("id","form");
body.appendChild(form);
console.log(form);

//put an input type
let fnamef=document.createTextNode("FirstName:");
form.appendChild(fnamef);
let fname=document.createElement("input");
fname.classList.add("firstname");
fname.setAttribute("type","text");
fname.setAttribute("placeholder","your First Name");
form.appendChild(fname);

//br
let brf=document.createElement("br");
form.appendChild(brf);
let brff=document.createElement("br");
 form.appendChild(brff);

// lastname
let lnamef=document.createTextNode("LastName:");
form.appendChild(lnamef);
let lname=document.createElement("input");
lname.classList.add("lastname");
lname.setAttribute("type","text");
lname.setAttribute("placeholder","your Last Name");
form.appendChild(lname);
// br2
let br2=document.createElement("br");
form.appendChild(br2);
let br22=document.createElement("br");
form.appendChild(br22);

//email
let emailf=document.createTextNode("YourEmail:");
form.appendChild(emailf);
let email=document.createElement("input");
email.classList.add("email");
email.setAttribute("type","email");
email.setAttribute("placeholder","type ur email here");
form.appendChild(email);
// br3
let br3=document.createElement("br");
form.appendChild(br3);
let br33=document.createElement("br");
form.appendChild(br33);

//password
let passf=document.createTextNode("Password :");
form.appendChild(passf);
let password=document.createElement("input");
password.setAttribute("type","password");
password.classList.add("password");
password.setAttribute("placeholder","ur password");
form.appendChild(password);
// br4
let br4=document.createElement("br");
form.appendChild(br4);
let br44=document.createElement("br");
form.appendChild(br44);

//button
let button=document.createElement("input");
button.setAttribute("type","submit");
button.classList.add("button");
form.appendChild(button);

function Object(fname,lname,email,password){
 this.fname=fname;
   this.lname=lname;
   this.email=email;
    this.password=password;
}
button.addEventListener("click",function(m){
    m.preventDefault();
    let address=new Object(fname.value,lname.value,email.value,password.value);
    for(let id in address){
        console.log(`${id}:${address[id]}`);
    }
 
})



// console.log(myObject);

// for(let id in myObject){
// console.log(`${id}:${myObject[id]}`);
// }
// button.addEventListener("click",function(m){
//  m.preventDefault();
// })

 





