import React from 'react';
import { render } from 'react-dom';

// styles
import css from './styles/styles.styl';

// components
import Main from './components/Main';

const router = (
    <Main></Main>
)

render( router , document.getElementById('root'));
