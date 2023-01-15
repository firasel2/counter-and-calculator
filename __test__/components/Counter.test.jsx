const { render, screen, fireEvent } = require("@testing-library/react")
import Counter from "../../src/app/counter/page";

test("Counter components",()=>{
    render(<Counter/>);

    const display = screen.getByTestId('display');
    const increment = screen.getByTestId('increment');
    const decrement = screen.getByTestId('decrement');

    fireEvent.click(increment);
    fireEvent.click(increment);
    expect(display).toHaveTextContent("2");

    fireEvent.click(decrement);
    expect(display).toHaveTextContent("1");


})