import React from 'react';
import ThemeToggle from './ThemeToggle';
import { WithClassName } from '../types';

const MainActions = ({ className }: WithClassName) => {
  return (
    <div className={`${className} rounded-md bg-inherit p-3`}>
      Main Actions
      <ThemeToggle />
    </div>
  );
};

export default MainActions;
