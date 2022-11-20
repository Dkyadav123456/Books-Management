const mongoose = require("mongoose");


//*************************[Request-Validation-Function's]************************//
// request body (required: true)
const isValidReqBody = function (reqbody) {
  if (!Object.keys(reqbody).length) {
    return false;
  }
  return true;
};


//************************[Category-Validation-Function's]************************//
// string (required: true)
const isValid = function (value) {
  if (typeof value === "undefined" || typeof value === null) return false;
  if (typeof value === "string" && value.trim().length == 0) return false;
  if (typeof value === "string") return true;
};

//**********************[Subcategory-Validation-Function's]***********************//
// subcategory (required: true)
const isValidSubcategory = function (value) {
  if (typeof value === "undefined" || typeof value === null) return false;
  if (typeof value === "string" && value.trim().length == 0) return false;
  if (typeof value == "object" && Array.isArray(value) == true) return true;
};


//************************[EmailId-Validation-Function's]*************************//
const isValidEmail = function (email) {
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return pattern.test(email); // returns a boolean
};

//*********************[PhoneNumber-Validation-Function's]************************//
const isValidPhone = function (phone) {
  const pattern = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
  return pattern.test(phone); // returns a boolean
};


//************************[Pincode-Validation-Function's]*************************//
const isValidPincode = function (pincode) {
  const pattern = /^[1-9]{1}[0-9]{2}\s?[0-9]{3}$/;
  return pattern.test(pincode); // returns a boolean
};


//***********************[Password-Validation-Function's]*************************//
const isValidPassword = function (password) {
  if (password.length >= 8 && password.length <= 15) {
    return true;
  }
  return false;
};


//***********************[ObjectId-Validation-Function's]*************************//
const isValidObjectId = function (objectId) {
  return mongoose.Types.ObjectId.isValid(objectId); // returns a boolean
};


//**************************[ISBN-Validation-Function's]**************************//
const isValidISBN = function (ISBN) {
  const pattern = /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/;
  return pattern.test(ISBN); // returns a boolean
};


//*********************[ReleasedAt-Validation-Function's]*************************//
const isValidRelAt = function (releasedAt) {
  const pattern = /^\d{4}-\d{2}-\d{2}$/;
  return pattern.test(releasedAt); // returns a boolean
};


//*********************[ReviewedBy-Validation-Function's]*************************//
const isValidName = function (value) {
  const pattern = /^[a-zA-Z,'.\-\s]*$/;
  return pattern.test(value);
};

//******************[Review-Rating-Validation-Function's]*************************//
const isValidRating = function (value) {
  if (value < 1) {
    return false;
  } else if (value > 5) {
    return false;
  } else {
    return true;
  }
};

//****************************[All-Function's-Publically]*************************//
module.exports = {
  isValidReqBody,
  isValid,
  isValidSubcategory,
  isValidEmail,
  isValidPhone,
  isValidPincode,
  isValidPassword,
  isValidObjectId,
  isValidISBN,
  isValidRelAt,
  isValidRating,
  isValidName,
};
