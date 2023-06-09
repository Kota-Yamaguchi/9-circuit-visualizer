export type QuantumGateType = "X" | "Y" | "Z" | "H" | "S" | "T" | "CNOT" | "SWAP" | "RX" | "RY" | "RZ" | "CUSTOM";

export interface QuantumGate {
    type: QuantumGateType;
    qubits: number[];
    order: number;
    theta?: number;
    customMatrix?: [[number, number], [number, number]];
}

export interface QuantumCircuit {
    numQubits: number;
    gates: QuantumGate[];
}

