import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import reactRefresh from '@vitejs/plugin-react-refresh'
import dts from 'vite-plugin-dts'
import path from 'path'
export default defineConfig({
  plugins: [react(), reactRefresh(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/features/circuit/QuantumCircuit.tsx'),
      name: 'QuantumCircuitVisualizer',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    }
  }
})
