import React, { FC } from 'react';
import { Cell } from 'react-table';
import { GrafanaTableColumn, TableFilterActionCallback } from './types';
import { TableStyles } from './styles';

export interface Props {
  cell: Cell;
  tableStyles: TableStyles;
  onCellFilterAdded?: TableFilterActionCallback;
  columnIndex: number;
  columnCount: number;
}

export const TableCell: FC<Props> = ({ cell, tableStyles, onCellFilterAdded, columnIndex, columnCount }) => {
  const cellProps = cell.getCellProps();
  const field = (cell.column as any as GrafanaTableColumn).field;

  if (!field.display) {
    return null;
  }

  if (cellProps.style) {
    cellProps.style.minWidth = cellProps.style.width;
    cellProps.style.justifyContent = (cell.column as any).justifyContent;
  }

  let innerWidth = ((cell.column.width as number) ?? 24) - tableStyles.cellPadding * 2;

  // last child sometimes have extra padding if there is a non overlay scrollbar
  if (columnIndex === columnCount - 1) {
    innerWidth -= tableStyles.lastChildExtraPadding;
  }

  return cell.render('Cell', {
    field,
    tableStyles,
    onCellFilterAdded,
    cellProps,
    innerWidth,
  }) as React.ReactElement;
};
