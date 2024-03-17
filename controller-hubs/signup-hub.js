import { signupController } from "../mvc-signup/signup-controller.js";

const signupForm = document.querySelector('#signup-form')
signupController(signupForm)