import { useState } from "react";
function Calculator() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [operation, setOperation] = useState("add");
    const [result, setResult] = useState([]);

    const handleCalculate = () => {
        const a = Number(num1);
        const b = Number(num2);
        let result = 0;

        if (operation === "add") {
            result = a + b;
        } else if (operation === "subtract") {
            result = a - b;
        } else if (operation === "multiply") {
            result = a * b;
        } else if (operation === "divide") {
            result = b !== 0 ? a / b : "Error: Division by zero";
        }
        setResult([...results, result]);
    };

    return (
        <div>
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <select value={operation} onChange={(e) => setOperation(e.target.value)}>
                <option value="add">Add</option>
                <option value="subtract">Subtract</option>
                <option value="multiply">Multiply</option>
                <option value="divide">Divide</option>
            </select>
            <button onClick={handleCalculate}>Calculate</button>
        </div>
    );
}
export default Calculator;