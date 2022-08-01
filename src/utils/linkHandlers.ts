import {ChangeEvent} from 'react';

export const handleAddLink = (
  state: string[],
  setState: (state: string[]) => void
) => {
  const values = [...state];
  values.push('');
  setState(values);
};

export const handleRemoveLink = (
  index: number,
  state: string[],
  setState: (state: string[]) => void
) => {
  const values = [...state];
  values.splice(index, 1);
  setState(values);
};

export const handleInputChange = (
  index: number,
  event: ChangeEvent<HTMLInputElement>,
  state: string[],
  setState: (state: string[]) => void
) => {
  const values = [...state];
  values[index] = event.target.value;

  setState(values);
};
