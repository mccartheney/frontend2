// src/tests/Button.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./button";

test("O botão muda de texto ao ser clicado", () => {
    render(<Button/>);
    const button = screen.getByText("Clique aqui");

    fireEvent.click(button);

    expect(screen.getByText("Clicado!")).toBeInTheDocument();
});
