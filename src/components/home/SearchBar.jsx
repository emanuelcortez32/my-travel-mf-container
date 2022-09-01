import React, { useState, useRef } from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector } from 'react-redux';

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: #90A1C4;
  width: 50%;
  padding: 2rem;
  height: 2rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: "1rem";
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  line-height: 1;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;

export const SearchBar = () => {
  const [input, setInput] = useState("");

  const { microfronts } = useSelector((state) => state.root)

  const formRef = useRef();
  const inputFocus = useRef();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const { container } = microfronts.find(mf => mf.name === "trackerFlights");
    const eventData = new CustomEvent('microfrontContainerEvent', { detail: { flightNumber: input }});
    container.dispatchEvent(eventData);
  };

  return (
    <div>
      <Form
        barOpened={true}
        onFocus={() => {
          inputFocus.current.focus();
        }}
        onSubmit={onFormSubmit}
        ref={formRef}
      >
        <Button type="submit" barOpened={true}>
          <SearchIcon />
        </Button>
        <Input
          onChange={(e) => setInput(e.target.value)}
          ref={inputFocus}
          value={input}
          barOpened={true}
          placeholder="Search for a flight..."
        />
      </Form>
    </div>
  );
};
