import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with correct text', () => {
    const { getByText } = render(<Button>Click me!</Button>);
    expect(getByText('Click me!')).toBeInTheDocument();
  });

  it('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button onClick={handleClick}>Click me!</Button>);
    fireEvent.click(getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('changes style when selected prop is true', () => {
    const { rerender, getByRole } = render(<Button selected={false}>Not Selected</Button>);
    expect(getByRole('button')).toHaveStyle('background-color: #F8F8F8');
    rerender(<Button selected={true}>Selected</Button>);
    expect(getByRole('button')).toHaveStyle('background-color: #c1dff7');
  });
});
