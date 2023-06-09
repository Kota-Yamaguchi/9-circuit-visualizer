import { ChangeEvent, useState } from "react";
import { sampleCircuit0, sampleCircuit1, sampleCircuit2, sampleCircuit3 } from "./features/circuit/input";
import { Select, Flex, Box } from "@chakra-ui/react";
const circuits = {
    'sampleCircuit1': sampleCircuit1,
    'sampleCircuit3': sampleCircuit3,
    'sampleCircuit0': sampleCircuit0,
    'sampleCircuit2': sampleCircuit2,
};

export const Index = () => {
    const [selectedCircuit, setSelectedCircuit] = useState<QuantumCircuit | null>(null);

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const circuitKey = event.target.value as keyof typeof circuits;
        setSelectedCircuit(circuits[circuitKey]);
    };

    return (
        <Flex flexDirection="column" align="center" justify="center" height="100vh">
            <Box width="10%">
                <Select placeholder="Select circuit" onChange={handleChange}>
                    <option value="sampleCircuit0">Sample Circuit 0</option>
                    <option value="sampleCircuit1">Sample Circuit 1</option>
                    <option value="sampleCircuit2">Sample Circuit 2</option>
                    <option value="sampleCircuit3">Sample Circuit 3</option>
                </Select>
            </Box>
            {
                (!selectedCircuit) && (
                    <Box marginTop="4">
                        回路を選択してください。
                    </Box>
                )
            }
            {
                (selectedCircuit) && (
                    <Box marginTop="4">
                        <QuantumCircuitVisualizer circuit={selectedCircuit} />
                    </Box>
                )
            }
        </Flex>
    )
}
