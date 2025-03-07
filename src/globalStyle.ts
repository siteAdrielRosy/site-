import styled, { createGlobalStyle } from "styled-components";

// import ReactLoading from 'react-loading';
// import { Children } from 'react'

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Louis', 'Montserrat', sans-serif;
	font-weight: 400;
  }
	/* @media screen and (max-width: 768px) { */
		
		
	/* } */
	/* rgba(255, 0, 0, 0.2); */
	/* D4A845 */
	/* 393839 */
`;

export const Input = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 8px;
  text-align: center;
  outline-color: rgb(0, 217, 89);
`;

export const InputSearch = styled.input`
  height: 40px;
  width: 100%;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #c1c1c1;
  outline-color: #c1c1c1;
`;

export const PageContainer = styled.div`
  margin-top: 5rem;
  padding: 0.5rem;
`;

export const PageAdminContainer = styled.div`
  padding: 0.5rem;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;
export const MainHeading = styled.h1`
  font-size: clamp(2.3rem, 6vw, 4.5rem);
  margin-bottom: 2rem;
  color: "#fff";
  width: 100%;
  letter-spacing: 4px;
  text-align: center;
`;

export const Heading = styled.h2`
  font-size: clamp(1.3rem, 13vw, 3.1rem);

  color: "#fff";
  letter-spacing: 0.4rem;
  line-height: 1.06;
  text-align: center;
`;
export const TextWrapper = styled.span`
  color: ${({ color }) => (color ? color : "")};
`;

export const Button = styled.button`
  border-radius: 8px;
  /* background: none; */
  white-space: nowrap;
  padding: 6px 20px;
  backgroud-color: #E50046;
  font-size: 16px;
  color: black;
  outline: none;
  /* min-height: 40px; */
  cursor: pointer;
  overflow: hidden;
  position: relative;
  font-weight: 500;

  &:before {
    background: #fff; 
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    /* height: 500%;
    background-color: #7f7f7f; */
  }

  &:hover {
    color: black;
  }

  &:disabled {
    background-color: #c1c1c1;
    border: 1px solid #7f7f7f;
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
export const CanceledButton = styled.button`
  border-radius: 4px;
  /* background: none; */
  background-color: transparent;
  white-space: nowrap;
  padding: 6px 20px;
  /* font-size: 16px; */
  outline: none;
  /* min-height: 60px; */
  cursor: pointer;
  overflow: hidden;
  position: relative;
  font-weight: 400;

  &:before {
    background: #fff;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    /* height: 500%; */
    background-color: #7f7f7f;
  }

  &:hover {
    /* color: black; */
  }
`;
export const SpecialButton = styled.button`
  border-radius: 16px;
  /* background: none; */
  background-color: #d4a845;
  white-space: nowrap;
  padding: 0px;
  padding: 5px 10px;
  /* font-size: 16px; */
  color: #fff;
  outline: none;
  /* min-height: 60px; */
  border: 2px solid #d4a845;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  font-weight: 400;

  &:before {
    background: #fff;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &:hover:before {
    /* height: 500%; */
    background-color: #7f7f7f;
  }

  &:hover {
    /* color: black; */
  }
`;

export const Row = styled.div``
// 	display: flex;
// 	justify-content: ${({ justify }) => (justify ? justify : '')};
// 	align-items: ${({ align }) => (align ? align : '')};
// 	gap: ${({ gap }) => (gap ? gap : '')};
// 	padding: ${({ padding }) => (padding ? padding : '')};
// 	margin: ${({ margin }) => (margin ? margin : '')};
// 	position: ${({ position }) => (position ? position : '')};
// 	width: ${({ width }) => (width ? width : 'auto')};
// 	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
// 	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
// 	height: ${({ height }) => (height ? height : 'auto')};
// 	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
// 	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};
// 	flex-wrap: ${({ wrap }) => (wrap ? wrap : '')};
// `;

export const ContainerWeb = styled.div`
  display: none;
  @media screen and (min-width: 769px) {
    display: flex;
    height: calc(100vh);
  }
`;

export const FormComponent = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 5px;
  min-width: 300px;

`;

export const InputPassword = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  text-align: center;

  input {
    width: 100%;
    /* height: 40px; */
    border-radius: 8px;
    padding: 0.5rem;
    text-align: start;
    ::placeholder {
      text-align: start;
      padding: 0.5em;
      font-size: 18px;
    }
    :focus {
      ::placeholder {
        opacity: 0;
        border: 1px solid #f7eeda;
      }
    }
    :disabled {
      background-color: #f3f3f3;
      border: 1px solid #e5e5e5;
    }
    @media (max-width: 700px) {
    
      border-radius: 8px;
      height: 40px;
      font-size: 14px;
    }
  }
  .eyes {
    position: absolute;
    /* margin-right: 10; */
    cursor: pointer;
    right: 0;
    bottom: 10%;
    padding-right: 10px;
    z-index: 11;
  }

  @media (max-height: 580px) {
    height: 40px;
  }
`;

export default GlobalStyle;
