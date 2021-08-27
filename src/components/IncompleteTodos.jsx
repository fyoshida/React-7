import React from "react";

export const IncompleteTodos = (props) => {
  // 引数
  const {
    incompleteTodos,
    completeTodos,
    setIncompleteTodos,
    setCompleteTodos
  } = props;

  // イベント
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  // 表示
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key="{todo}" className="list-row">
              <li>{todo}</li>
              <button
                onClick={() => {
                  onClickComplete(index);
                }}
              >
                完了
              </button>
              <button
                onClick={() => {
                  onClickDelete(index);
                }}
              >
                削除
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
