import { renderHook, act } from '@testing-library/react-hooks';

import useWindowResize from './useWindowResize';

test('returns correct initial value', () => {
  const { result } = renderHook(() => useWindowResize());
  expect(result.current.width).toEqual(window.innerWidth);
  expect(result.current.height).toEqual(window.innerHeight);
});

test('returns correct value on resize', () => {
  window.resizeTo = () => null;

  const { result } = renderHook(() => useWindowResize());

  act(() => {
    window.resizeTo(500, 500);
  });

  setTimeout(() => {
    expect(result.current.width).toBe(500);
    expect(result.current.height).toBe(500);
  }, 500);
});
