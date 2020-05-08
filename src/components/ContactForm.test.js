import React from'react';
import {render, fireEvent} from '@testing-library/react';
import ContactForm from './ContactForm';

test('renders correctly', () => {
    render(<ContactForm/>)
})

test('names are added to inputs properly', () => {
    const {getByPlaceholderText, getByAltText, getByText, findAllByText} = render(<ContactForm/>)

const firstNameInput = getByPlaceholderText(/first name/i)
const lastNameInput = getByPlaceholderText(/last name/i)
const emailInput = getByPlaceholderText(/email/i)
const messageInput = getByPlaceholderText(/message/i)
const submitButton = getByAltText(/submit/i)

fireEvent.change(firstNameInput, {target : {name: 'firstName', value:' first name test'}})
fireEvent.change(lastNameInput, {target : {name: 'lastName', value:'last name test'}})
fireEvent.change(emailInput, {target : {name: 'email', value:'email test'}})
fireEvent.change(messageInput, {target : {name: 'message', value:'message test'}})



console.log(firstNameInput.value)
console.log(lastNameInput.value)
console.log(emailInput.value)
console.log(messageInput.value)

fireEvent.click(submitButton);


})