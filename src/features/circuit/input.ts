import { QuantumCircuit } from "./types";

export const sampleCircuit0: QuantumCircuit = {
    numQubits: 4,
    gates: [
        { type: "H", qubits: [0], order: 1 },
        { type: "H", qubits: [1], order: 1 },
        { type: "CNOT", qubits: [0, 2], order: 2 },
        { type: "CNOT", qubits: [1, 3], order: 2 },
        { type: "X", qubits: [2], order: 3 },
        { type: "H", qubits: [3], order: 3 },
        { type: "CNOT", qubits: [2, 3], order: 4 },
        { type: "H", qubits: [2], order: 5 },
        { type: "H", qubits: [3], order: 5 },
        { type: "CNOT", qubits: [2, 3], order: 6 },
        { type: "H", qubits: [2], order: 7 },
        { type: "H", qubits: [3], order: 7 },
        { type: "CNOT", qubits: [0, 2], order: 8 },
        { type: "CNOT", qubits: [1, 3], order: 8 },
        { type: "H", qubits: [0], order: 9 },
        { type: "H", qubits: [1], order: 9 },
    ]
};
export const sampleCircuit1: QuantumCircuit = {
    numQubits: 3,
    gates: [
        { type: 'H', qubits: [0], order: 0 },
        { type: 'CNOT', qubits: [0, 1], order: 1 },
        { type: 'X', qubits: [2], order: 2 },
        { type: 'H', qubits: [1], order: 3 },
        { type: 'CNOT', qubits: [0, 2], order: 4 },
        { type: 'H', qubits: [2], order: 5 },
    ],
};

export const sampleCircuit2: QuantumCircuit = {
    numQubits: 4,
    gates: [
        { type: 'H', qubits: [0], order: 0 },
        { type: 'H', qubits: [1], order: 1 },
        { type: 'CNOT', qubits: [2, 3], order: 2 },
        { type: 'X', qubits: [3], order: 3 },
        { type: 'CNOT', qubits: [0, 1], order: 4 },
        { type: 'H', qubits: [2], order: 5 },
        { type: 'CNOT', qubits: [1, 2], order: 6 },
        { type: 'X', qubits: [0], order: 7 },
    ],
};

export const sampleCircuit3: QuantumCircuit = {
    numQubits: 5,
    gates: [
        { type: 'H', qubits: [0], order: 0 },
        { type: 'X', qubits: [1], order: 1 },
        { type: 'CNOT', qubits: [0, 1], order: 2 },
        { type: 'H', qubits: [2], order: 3 },
        { type: 'CNOT', qubits: [2, 3], order: 4 },
        { type: 'X', qubits: [4], order: 5 },
        { type: 'CNOT', qubits: [3, 4], order: 6 },
        { type: 'H', qubits: [0], order: 7 },
        { type: 'CNOT', qubits: [2, 1], order: 8 },
        { type: 'X', qubits: [3], order: 9 },
    ],
};
