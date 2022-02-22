export const pass_validator = (input, pattern,input_type = "") => {
  let error = null;
  let status = false;

  if (input === "") {
    error = input_type + " Required";
    status = false;
  } else if (!pattern.test(input)) {
    if(input_type === "Password"){
      error = input_type + " should contain 8 characters,at least a number and a capital letter";
    }else{
      error = "Enter Valid " + input_type;
    }
    status = false;
  } else {
    status = true;
  }

  return { error: error, status: status };
};

export const input_required = (input,input_type = "") => {
  let error = null;
  let status = false;

  if (input === "" || input.length === 0) {
    error = input_type + " is required";
    status = false;
  } else {
    status = true;
  }

  return { error: error, status: status };
};

export const upload_validate = (input,input_type = "") => {
  let error = null;
  let status = false;

  if (input === "") {
    error = input_type + " Required";
    status = false;
  }
  if (input.size >= 2000000) {
    error = input_type + " size cannot exceed more than 2MB";
    status = false;
  }
  // if (input.type !== "image/jpeg") {
  //   error = "supported jpeg only";
  //   status = false;
  // }  
  else {
    status = true;
  }

  return { error: error, status: status };
};

export const password_matcher = (password1,password2) => {
  let error = null
  let isMatching = false
  if(password1 === ""){
      error = "Password is empty"
  }else if(password1 === password2){
      isMatching = true
  }else{
      error = "Password is not matching"
  }
  return {error,isMatching}
}

