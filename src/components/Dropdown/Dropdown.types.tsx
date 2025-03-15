import React from 'react';
export type DropdownProps = {
  options: string[];
  selectedOption?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};
