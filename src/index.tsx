import './index.css';
import React from "react";
import ReactDOM from "react-dom/client";
import { registerSW } from 'virtual:pwa-register';
import { App } from "./App";

registerSW({
	immediate: true,
});

const rootElement = document.getElementById('root');

if (!rootElement) {
	throw new Error('Root element not found');
}

ReactDOM.createRoot(rootElement).render(<App />);