// vite.config.js
import { defineConfig } from "file:///Users/damlayilmaz/Desktop/game-project/node_modules/vite/dist/node/index.js";
import react from "file:///Users/damlayilmaz/Desktop/game-project/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  optimizeDeps: {
    include: [
      "@emotion/react",
      "@emotion/styled",
      "@mui/material/Tooltip"
    ]
  },
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      babel: {
        plugins: ["@emotion/babel-plugin"]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZGFtbGF5aWxtYXovRGVza3RvcC9nYW1lLXByb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9kYW1sYXlpbG1hei9EZXNrdG9wL2dhbWUtcHJvamVjdC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZGFtbGF5aWxtYXovRGVza3RvcC9nYW1lLXByb2plY3Qvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgb3B0aW1pemVEZXBzOiB7XG4gICAgaW5jbHVkZTogW1xuICAgICAgJ0BlbW90aW9uL3JlYWN0JywgXG4gICAgICAnQGVtb3Rpb24vc3R5bGVkJywgXG4gICAgICAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJ1xuICAgIF0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCh7XG4gICAgICBqc3hJbXBvcnRTb3VyY2U6ICdAZW1vdGlvbi9yZWFjdCcsXG4gICAgICBiYWJlbDoge1xuICAgICAgICBwbHVnaW5zOiBbJ0BlbW90aW9uL2JhYmVsLXBsdWdpbiddLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXVTLFNBQVMsb0JBQW9CO0FBQ3BVLE9BQU8sV0FBVztBQUdsQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixjQUFjO0FBQUEsSUFDWixTQUFTO0FBQUEsTUFDUDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxNQUNKLGlCQUFpQjtBQUFBLE1BQ2pCLE9BQU87QUFBQSxRQUNMLFNBQVMsQ0FBQyx1QkFBdUI7QUFBQSxNQUNuQztBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
