import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from '../SearchBox';
import mockRouter from 'next-router-mock';

jest.mock('next/navigation', () => ({
  useRouter() {
    return mockRouter;
  },
}));

describe('SearchBox', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('submits a search term and navigates', () => {
    render(<SearchBox />);

    const input = screen.getByPlaceholderText(/search keywords/i);
    fireEvent.change(input, { target: { value: 'batman' } });

    const form = input.closest('form');
    fireEvent.submit(form);

    expect(mockRouter.push).toHaveBeenCalledWith('/search/batman');
  });

  it('does not submit when search is empty', () => {
    render(<SearchBox />);
    const button = screen.getByRole('button', { name: /search/i });
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(mockRouter.push).not.toHaveBeenCalled();
  });
});
