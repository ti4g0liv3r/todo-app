import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import styled, { css } from "styled-components";

const StyleForm = styled.form`
  position: absolute;
  margin: auto;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: white;
  height: 300px;
  width: 300px;
  box-shadow: -1px 0px 26px -1px rgb(0 0 0 / 75%);
  padding: 20px;
  border-radius: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 10px;
  margin-bottom: 20px;
  align-items: flex-end;
`;

const StyledLabel = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  margin-bottom: 15px;
`;

const StyledButton = styled.button`
  height: 35px;
  color: white;
  background-color: teal;
  border: none;
  border-radius: 10px;
  margin: 10px 0px;
  max-width: 100px;
  min-width: 80px;

  ${({ disabled }) =>
    disabled &&
    css`
      background: gray;
    `}
`;

const StyledInput = styled.input`
  border: none;
  height: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const StyledTextArea = styled.textarea`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const AddNewItemContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: flex-end;
  padding: 15px;

  > svg {
    width: 45px;
    height: auto;
    color: teal;
    margin-right: 25px;
  }
`;

const NewItemContainer = styled.div`
  ${({ addItem }) =>
    addItem &&
    css`
      height: 100%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      position: absolute;
      top: 0px;
    `}
`;

export const NewItem = ({ addNewItem }) => {
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
  });
  const [addItem, setAddItem] = useState(false);

  const handleChange = (e) => {
    const newState =
      e.target.name === "name"
        ? { ...newItem, name: e.target.value }
        : { ...newItem, description: e.target.value };

    setNewItem(newState);
  };

  const saveAndCleanState = () => {
    addNewItem(newItem);
    setNewItem({
      name: "",
      description: "",
    });
    setAddItem(false);
  };

  const disableButton =
    newItem.name.length === 0 || newItem.description.length === 0;

  return (
    <NewItemContainer addItem={addItem}>
      {addItem ? (
        <StyleForm onSubmit={(e) => e.preventDefault()}>
          <h4>Add Item</h4>

          <InputContainer>
            <StyledLabel>
              Title
              <StyledInput
                name="name"
                type="text"
                id="input"
                value={newItem.name}
                onChange={(e) => handleChange(e)}
              />
            </StyledLabel>
            <StyledLabel>
              Description
              <StyledTextArea
                name="description"
                type="text"
                id="textarea"
                value={newItem.description}
                onChange={(e) => handleChange(e)}
              />
            </StyledLabel>
            <StyledButton
              disabled={disableButton}
              type="submit"
              onClick={() => saveAndCleanState()}
            >
              Add
            </StyledButton>
          </InputContainer>
        </StyleForm>
      ) : (
        <AddNewItemContainer>
          <AiOutlinePlusCircle onClick={() => setAddItem(true)} />
        </AddNewItemContainer>
      )}
    </NewItemContainer>
  );
};
