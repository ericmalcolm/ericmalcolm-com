import { render, screen } from '@testing-library/react';
import App from './App';

test('renders name', () => {
  render(<App />);
  const name = screen.getByText(/Eric Malcolm/i);
  expect(name).toBeInTheDocument();
});

test('renders main description', () => {
  render(<App />);
  const mainDescription = screen.getByText(
    'Front-End Developer / Architect specializing in UX and Accessibility, based in Michigan.',
  );
  expect(mainDescription).toBeInTheDocument();
});

test('renders secondary description', () => {
  render(<App />);
  const secondaryDescription = screen.getByText(
    'I help architect and develop solutions to create usable, human-friendly and accessible websites, interfaces, and apps.',
  );
  expect(secondaryDescription).toBeInTheDocument();
});

test('renders LinkedIn link', () => {
  render(<App />);
  const linkElement = screen.getByText(/LinkedIn/i);
  expect(linkElement).toBeInTheDocument();
});
