import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
  describe('When isHeader is true', () => {
    it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
      render(<CourseListRow isHeader={true} textFirstCell="Header" />);
      const headerCell = screen.getByText('Header');
      expect(headerCell).toBeInTheDocument();
      expect(headerCell).toHaveAttribute('colSpan', '2');
    });

    it('renders two cells when textSecondCell is present', () => {
      render(<CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />);
      const firstCell = screen.getByText('First');
      const secondCell = screen.getByText('Second');
      expect(firstCell).toBeInTheDocument();
      expect(secondCell).toBeInTheDocument();
    });
  });

  describe('When isHeader is false', () => {
    it('renders two td elements within a tr element', () => {
      render(<CourseListRow isHeader={false} textFirstCell="Data 1" textSecondCell="Data 2" />);
      const firstDataCell = screen.getByText('Data 1');
      const secondDataCell = screen.getByText('Data 2');
      expect(firstDataCell.tagName).toBe('TD');
      expect(secondDataCell.tagName).toBe('TD');
    });
  });
});
