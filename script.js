/* Given the 'id' attribute of a form element, 
   this will return the value entered by the user 
	 into that form element. */
function formValue(id) {
  // makes a var that stores the id in formElement.
  let formElement = document.getElementById(id);
  
  // checks if the id exists in the html.
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

	// ???
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 
   'className', this will add that class to
   the HTML element. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time
   that the form button is clicked. */
function generate() {

  let relativeName = formValue("relativeName");
  let adjective1 = formValue("adjective1");
  let adjective2 = formValue("adjective2");
  let adjective3 = formValue("adjective3");
  let famousPerson = formValue("famousPersonName");;
  let noun = formValue("noun");;
  let dessert = formValue("dessert");;
  let petName = formValue("petName");;

  let result = (`Dear ${relativeName},


  I have been having a really ${adjective3} time 
  at camp. The counselour is ${adjective1} and 
  the food is ${adjective2}. I met ${famousPerson} 
  and we quickly became ${noun}. Talk soon!
    
  Your ${dessert},
    
  ${petName}.`);
    
  console.log(`Dear ${relativeName},
  
  
  I have been having a really ${adjective1} time 
  at camp. The counselour is ${adjective2} and 
  the food is ${adjective3}. I met ${famousPerson} 
  and we quickly became ${noun}. Talk soon!
    
  Your ${dessert},
    
  ${petName}.`);
  
  alert(result);

}