import React from 'react';
import base from './base';
import colored from './colored';

const ThemeContext = React.createContext(base);

export default ThemeContext;

export { base, colored };
