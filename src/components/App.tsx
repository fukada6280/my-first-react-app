import { VFC, useState, ChangeEvent } from "react";
import { Todo } from "../lib/todo";
import { NewTodo } from "./newTodo";
import { TodoList } from "./TodoList";

// componentははじめを大文字にする　普通の関数ではないため
// VFC型は(ctrlキー+クリックで詳細が見れる)
// VoidFunctionComponentはpropsとcontextを引数に、JSXを返す
const App: VFC = () => {
    const [todoList, setTodoList] = useState<Todo[]>([]);

    const addTodo = (title: string) => {
        const newTodo = {
            title,
            done: false,
            id: Math.random().toString(),
        };
        setTodoList((oldTodoList) => [...oldTodoList, newTodo]);
    };

    const handleChangeDone = (todoId: Todo["id"], done: boolean) => {
        setTodoList((oldTodoList) => 
            oldTodoList.map((todo) => {
                if (todo.id !== todoId) {
                    return todo;
                }
                return { ...todo, done };
            })
        );
    };

    const handleRemove = (todoId: Todo["id"]) => {
        setTodoList((oldTodoList) =>
        oldTodoList.filter((todo) => todo.id !== todoId)
        );
    };

    return (
        <div className="App">
            <NewTodo onAdd={addTodo} />
            <TodoList 
            todoList={todoList} 
            onChangeDone={handleChangeDone}
            onRemove={handleRemove} />
        </div>
    );
};

export default App;