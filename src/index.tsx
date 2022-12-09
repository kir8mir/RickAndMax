import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './app/store';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CharactersList } from './components/Characters/CharactersList';
import { LocationList } from './components/Locations/LocationList';
import { EpisodeList } from './components/Episodes/EpisodesList';
import { CardId } from './components/CardId/CardId';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <h1>HELLO WORLD</h1>
);

