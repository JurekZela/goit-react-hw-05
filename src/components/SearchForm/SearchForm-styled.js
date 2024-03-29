import { Form } from 'formik';
import {  styled } from 'styled-components';

export const FormStyles = styled(Form)`
display: flex;
  align-items: center;
  width: 100%;
  max-width: 200px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  `;

  export const Button = styled.button`
   display: inline-block;
   margin-left: auto;
 
  border: 0;
  background-size: 20%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
  `;

  export const Input = styled.input`
   display: inline-block;
  width: 100%;
  font: inherit;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

 & ::placeholder {
  font: inherit;
  font-size: 18px;
}
  `;