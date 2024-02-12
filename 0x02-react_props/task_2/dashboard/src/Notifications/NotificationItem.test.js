import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  // Test rendering without crashing
  it('renders without crashing', () => {
    render(<NotificationItem />);
  });

  // Test rendering with dummy type and value props
  it('renders with dummy type and value props', () => {
    render(<NotificationItem type="default" value="test" />);
    const notificationElement = screen.getByText('test');
    expect(notificationElement).toBeInTheDocument();
    expect(notificationElement).toHaveAttribute('data-notification-type', 'default');
  });

  // Test rendering with dummy html prop
  it('renders with dummy html prop', () => {
    render(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    const notificationElement = screen.getByText('test');
    expect(notificationElement).toBeInTheDocument();
    expect(notificationElement).toContainHTML('<u>test</u>');
  });
});
