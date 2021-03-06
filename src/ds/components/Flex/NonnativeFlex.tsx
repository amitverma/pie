import * as React from 'react';

import { ds, useWindowResize } from '../../lib';
import { dsTheme } from '../../theme';

import { FlexProps } from './Flex';
import { NonnativeFlexContainer } from './Flex.styles';

export const getGaps = (
  rows: Record<string, number[]>,
  gap: number,
): Record<number, Record<string, number>> => {
  let gaps = {};

  if (!gap) {
    return gaps;
  }

  const rowsIndex = Object.keys(rows);

  if (!rowsIndex) {
    return gaps;
  }

  if (rowsIndex.length === 1) {
    rows[1].forEach((rowIndex: number, i: number) => {
      gaps = {
        ...gaps,
        [rowIndex]: {
          marginRight: rows[1].length === i + 1 ? 0 : gap,
        },
      };
    });
  } else {
    rowsIndex.forEach((rowIndex: string) => {
      rows[rowIndex].forEach((index: number, i: number) => {
        gaps = {
          ...gaps,
          [index]: {
            marginRight: rows[rowIndex].length === i + 1 ? 0 : gap,
            marginBottom: parseInt(rowIndex, 10) === rowsIndex.length ? 0 : gap,
          },
        };
      });
    });
  }

  return gaps;
};

const NonnativeFlex = ds<FlexProps>(
  ({
    wrap,
    gap,
    direction,
    alignItems,
    alignContent,
    justify,
    children,
    ...props
  }) => {
    const containerRef =
      React.useRef<HTMLDivElement | null>() as React.MutableRefObject<HTMLDivElement>;

    const windowSize = useWindowResize();

    const [rows, setRows] = React.useState({});

    const gaps = React.useMemo(() => getGaps(rows, gap!!), [rows]);

    React.useEffect(() => {
      if (!gap!!) {
        return;
      }

      if (!containerRef.current) {
        return;
      }

      const { width } =
        containerRef?.current?.getBoundingClientRect() as DOMRect;

      const newRows = {};

      let rowsCount = 1;

      let childsWidth = 0;

      const containerChildrens = Array.from(
        containerRef?.current?.children ?? [],
      );

      // @ts-ignore
      containerChildrens.forEach((child: HTMLDivElement, i: number) => {
        const childRect = child.getBoundingClientRect();

        const nextChildRect =
          containerChildrens?.[i + 1]?.getBoundingClientRect();

        childsWidth += childRect?.width + dsTheme.spacing(gap);

        if (!newRows[rowsCount]) {
          newRows[rowsCount] = [i + 1];
        } else {
          newRows[rowsCount] = [...newRows[rowsCount], i + 1];
        }

        if (direction?.includes('column')) {
          rowsCount += 1;
          return;
        }

        if (
          wrap !== 'nowrap' &&
          (childsWidth > width || childsWidth + nextChildRect?.width > width)
        ) {
          rowsCount += 1;
          childsWidth = 0;
        }
      });

      setRows(newRows);
    }, [containerRef.current, windowSize]);

    return (
      <NonnativeFlexContainer
        ref={containerRef}
        $alignItems={alignItems}
        $alignContent={alignContent}
        $direction={direction}
        $gaps={gaps}
        $justify={justify}
        $wrap={wrap}
        {...props}
      >
        {children}
      </NonnativeFlexContainer>
    );
  },
);

NonnativeFlex.displayName = 'NonnativeFlex';

export default NonnativeFlex;
