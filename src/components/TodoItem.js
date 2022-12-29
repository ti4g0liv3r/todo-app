import styled, { css } from "styled-components";
import {
  AiFillCheckSquare,
  AiOutlineBorder,
  AiFillFile,
  AiOutlineDelete,
} from "react-icons/ai";

const StyleUl = styled.ul`
  padding: 0px 10px;
  margin: 0;
`;

const StyleLi = styled.li`
  display: flex;
  justify-content: space-between;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  > div {
    margin: 10px;
  }
`;

const TodoGroup = styled.div`
  display: flex;

  > div {
    margin: 10px;
  }
`;

const TodoIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -1px 0px 16px -6px rgba(0, 0, 0, 0.2);

  > svg {
    color: lightgray;
    width: 30px;
    height: 30px;
  }
`;

const TodoTaskTitle = styled.h4`
  font-size: 18px;
  font-family: system-ui;
  margin: 0px;
  margin-bottom: 12px;

  ${({ isCheck }) =>
    isCheck &&
    css`
      text-decoration: line-through;
    `}
`;

const TodoDescription = styled.p`
  margin: 0px;
  ${({ isCheck }) =>
    isCheck &&
    css`
      text-decoration: line-through;
    `}
`;

const TodoControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    width: auto;
    height: 25px;
    margin: 10px;

    &:first-child {
      height: 20px;
    }
  }
`;

export const TodoItem = ({ items, handleClick, removeItem }) => {
  return (
    <StyleUl>
      {items.length ? (
        items.map(({ name, description, date, isCheck, id }) => {
          return (
            <StyleLi key={`item${id}`}>
              <TodoGroup>
                <TodoIcon>
                  <AiFillFile />
                </TodoIcon>
                <div>
                  <TodoTaskTitle isCheck={isCheck}>{name}</TodoTaskTitle>
                  <TodoDescription isCheck={isCheck}>
                    {description}
                  </TodoDescription>
                </div>
              </TodoGroup>
              <TodoControls>
                {isCheck ? (
                  <AiFillCheckSquare onClick={() => handleClick(id)} />
                ) : (
                  <AiOutlineBorder onClick={() => handleClick(id)} />
                )}
                <AiOutlineDelete onClick={() => removeItem(id)} />
              </TodoControls>
            </StyleLi>
          );
        })
      ) : (
        <StyleLi>
          <p>There's no item in your list</p>
        </StyleLi>
      )}
    </StyleUl>
  );
};
