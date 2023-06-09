import { useEffect } from 'react';
import { QuantumCircuit } from './types';
import { drawQuantumCircuit } from './visualize';

interface QuantumCircuitVisualizerProps {
  circuit: QuantumCircuit;
}

export const QuantumCircuitVisualizer: React.FC<QuantumCircuitVisualizerProps> = ({ circuit }) => {

  useEffect(() => {
    const cleanup = drawQuantumCircuit(circuit);
    return cleanup;
  }, [circuit]);

  return <div id="circuitContainer"></div>;
};
