import { FormEvent, VFC, useState } from "react";

type Props = {
    onAdd: (title: string) => void;
}

export const NewTodo: VFC<Props> = ({ onAdd }) => {
    const [title, setTitle] = useState<string>("");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault(); // Formの送信を止めている
        if (title === "") {
            return;
        }
        onAdd(title);
        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit} className="NewTodo">
            <input 
            className=".NewTodo__inputTitle"
            type="text"
            name="title"
            // ↓ inputが変更されたら`title`stateを変更する
            onChange={(event) => setTitle(event.currentTarget.value)}
            // valueを title state に
            value={title}
            />
            <button type="submit">追加</button>
        </form>
    );
};