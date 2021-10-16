import BaseOperation from "./base_operation";
import RefinedOperationAbstraction from "./refined_operation_abstraction";

let firstNumber = 100,
  secondNumber = 20;

let baseOperation = new BaseOperation();

let operationAbstraction = new RefinedOperationAbstraction(baseOperation);

console.log(`${firstNumber} + ${secondNumber} = ${operationAbstraction.add(firstNumber, secondNumber)}`);
console.log(`${firstNumber} - ${secondNumber} = ${operationAbstraction.substract(firstNumber, secondNumber)}`);

let refinedOperationAbstraction = operationAbstraction;
console.log(`sqrt(${firstNumber}) =  ${refinedOperationAbstraction.sqrt(firstNumber)}`);
console.log(`pow(10, 2)= ${refinedOperationAbstraction.pow(10, 2)}`);
