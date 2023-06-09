import * as d3 from 'd3';
import { QuantumCircuit } from './types';


export function drawQuantumCircuit(circuit: QuantumCircuit): () => void {
    const width = 800;
    const height = 400;

    const svg = d3.select("#circuitContainer")
        .append("svg")
        .attr("width", width)
        .attr("height", height).classed('quantum-circuit', true);

    // 量子ビットのラインを描画
    for (let i = 0; i < circuit.numQubits; i++) {
        svg.append("line")
            .attr("x1", 50)
            .attr("y1", (height / (circuit.numQubits + 1)) * (i + 1))
            .attr("x2", width - 50)
            .attr("y2", (height / (circuit.numQubits + 1)) * (i + 1))
            .style("stroke", "black")
            .style("stroke-width", 1);
    }

    // 量子ゲートの描画
    circuit.gates.forEach(gate => {
        switch (gate.type) {
            //hとxはおなじ
            case "H":
            case "X":
                svg.append("circle")
                    .attr("cx", 50 + (width - 100) * (gate.order / circuit.gates.length))
                    .attr("cy", (height / (circuit.numQubits + 1)) * (gate.qubits[0] + 1))
                    .attr("r", 15)
                    .style("fill", "none")
                    .style("stroke", "black")
                    .style("stroke-width", 1);

                svg.append("text")
                    .attr("x", 50 + (width - 100) * (gate.order / circuit.gates.length))
                    .attr("y", (height / (circuit.numQubits + 1)) * (gate.qubits[0] + 1))
                    .attr("dy", ".35em")
                    .attr("text-anchor", "middle")
                    .text(gate.type)
                    .style("font-family", "Arial")
                    .style("font-size", 14);
                break;

            case "CNOT":
                svg.append("line")
                    .attr("x1", 50 + (width - 100) * (gate.order / circuit.gates.length))
                    .attr("y1", (height / (circuit.numQubits + 1)) * (gate.qubits[0] + 1))
                    .attr("x2", 50 + (width - 100) * (gate.order / circuit.gates.length))
                    .attr("y2", (height / (circuit.numQubits + 1)) * (gate.qubits[1] + 1))
                    .style("stroke", "black")
                    .style("stroke-width", 1);

                svg.append("circle")
                    .attr("cx", 50 + (width - 100) * (gate.order / circuit.gates.length))
                    .attr("cy", (height / (circuit.numQubits + 1)) * (gate.qubits[0] + 1))
                    .attr("r", 5)
                    .style("fill", "black");

                svg.append("circle")
                    .attr("cx", 50 + (width - 100) * (gate.order / circuit.gates.length))
                    .attr("cy", (height / (circuit.numQubits + 1)) * (gate.qubits[1] + 1))
                    .attr("r", 15)
                    .style("fill", "none")
                    .style("stroke", "black")
                    .style("stroke-width", 1);

                svg.append("line")
                    .attr("x1", 50 + (width - 100) * (gate.order / circuit.gates.length) - 10)
                    .attr("y1", (height / (circuit.numQubits + 1)) * (gate.qubits[1] + 1) + 10)
                    .attr("x2", 50 + (width - 100) * (gate.order / circuit.gates.length) + 10)
                    .attr("y2", (height / (circuit.numQubits + 1)) * (gate.qubits[1] + 1) - 10)
                    .style("stroke", "black")
                    .style("stroke-width", 1);

                svg.append("line")
                    .attr("x1", 50 + (width - 100) * (gate.order / circuit.gates.length) - 10)
                    .attr("y1", (height / (circuit.numQubits + 1)) * (gate.qubits[1] + 1) - 10)
                    .attr("x2", 50 + (width - 100) * (gate.order / circuit.gates.length) + 10)
                    .attr("y2", (height / (circuit.numQubits + 1)) * (gate.qubits[1] + 1) + 10)
                    .style("stroke", "black")
                    .style("stroke-width", 1);
                break;

            default:
                console.error("Unknown gate type:", gate.type);
        }
    });
    return () => {
        d3.select('.quantum-circuit').remove();
    };
}


