console.log("sidd");

const mask_password=(password)=>{
  
  let store="";
  for(let i=0;i<password.length;i++)
  {

    store+= "*";
  }
  return store;


}
const show_table=()=>{

  console.log("table");
  let data=JSON.parse(localStorage.getItem("passwords"));
  document.querySelector("table").innerHTML="";
  let str="";

 
Array.from(data).forEach((data_value,index)=>{

   str+=`
  <tr>
  <td class="web"> ${data_value.website}</td>
  <td> ${data_value.user_name} </td>
  <td > ${ mask_password(data_value.password) }   <img src="copy.png" alt="" id="copy" class="img"> </td>
  <td><button class="but" id="${data_value.website}" onclick="delete_data('${data_value.website}')  ">Delete</button>   </td>
  </tr>
  
  `

})
document.querySelector("table").innerHTML=`
<tr>
<th>Website </th>
<th>User Name</th>
<th>Password</th>
<th>Delete</th>
</tr>`;
document.querySelector("table").innerHTML+=str;

}

const delete_data=(website)=>{

  console.log("delete");
let data=JSON.parse(localStorage.getItem("passwords"));
 let new_data=data.filter((e)=>{
  return (e.website!==website);
})
localStorage.setItem("passwords",JSON.stringify(new_data));
console.log(new_data);
show_table();
}

show_table();

document.getElementById("submit").addEventListener("click",()=>{

  console.log("clicked");
  document.getElementById("submit").innerText="Submitted";
  let json=[];
  let password=localStorage.getItem("passwords");

  if(password==null)
  {

    console.log("Empty data");
    json.push({"website":website.value,"user_name":user_name.value,"password":Password.value});
    localStorage.setItem("passwords",JSON.stringify(json));
    
  }
  else{
    let json=JSON.parse(localStorage.getItem("passwords"));

    console.log("data is there");
    json.push({"website":website.value,"user_name":user_name.value,"password":Password.value});
    localStorage.setItem("passwords",JSON.stringify(json));
        
  }
  website.value="";
  user_name.value="";
  Password.value="";

show_table();

})
let input=Array.from(document.getElementsByClassName("input"));
input.forEach((i)=>{

  i.addEventListener("click",()=>{

    console.log("cliked");
  document.getElementById("submit").innerText="Submit";
document.getElementById("pass").innerHTML="";


  })
})

function copyPassword(password) {
  // Create a temporary textarea
  const textarea = document.createElement("textarea");
  textarea.value = password;

  // Append the textarea to the document
  document.body.appendChild(textarea);

  // Select the text within the textarea
  textarea.select();

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(textarea);

  // Optionally, provide visual feedback (e.g., change the image source)
  const copyImage = document.getElementById("copy");
  // if (copyImage) {
  //   copyImage.src = "copied.png"; // Replace with the path to your copied image
  // }
}
let copy=Array.from((document.getElementsByClassName("img")));
let data=JSON.parse(localStorage.getItem("passwords"));
copy.forEach((c,index)=>{

  c.addEventListener('click',()=>{
console.log("copied");

copyPassword(data[index].password);
document.getElementById("pass").innerHTML="copyed";

})

})
