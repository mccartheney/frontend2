// src/components/Button.jsx
import { useState } from "react";

export default function Button() {
    const [text, setText] = useState("Clique aqui");

    return <button onClick={() => setText("Clicado!")}>{text}</button>;
}
