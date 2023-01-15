const { render, screen, fireEvent } = require("@testing-library/react")
import Calculator from "../../src/app/calculator/page";

test("Counter components",()=>{
    render(<Calculator/>);

    const calculatorDisplay = screen.getByTestId('calculatorDisplay');
    const input1st = screen.getByTestId('input1st');
    const input2nd = screen.getByTestId('input2nd');
    const addBtn = screen.getByTestId('addBtn');

    
    fireEvent.change(input1st, {target: {value: '20'}});
    fireEvent.change(input2nd, {target: {value: '10'}});

    fireEvent.click(addBtn);
    expect(calculatorDisplay).toHaveTextContent("30");

})