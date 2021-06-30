import React from 'react';
import './styles/app.css';
import MainView from './views/MainView';
import DataProvider from './state/context/DataContext'

const App = () => {
    return (
        <DataProvider>
            <MainView />
        </DataProvider>
    )
}

export default App
