import React from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import { DnDProvider } from "react-dnd";
import Backend from 'react-dnd-html5-backend';

const App = () => {
    return (
        <DnDProvider backend={Backend}>
            <Header />
            <Homepage />
        </DnDProvider>
    );
};

export default App;