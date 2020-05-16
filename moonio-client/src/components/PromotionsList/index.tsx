import React, { Fragment, Component } from "react";
import {
  AutoSizer,
  Column,
  Table,
  TableCellProps,
  TableHeaderProps,
} from "react-virtualized";
import "react-virtualized/styles.css";
import "./style.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import * as Icons from "react-bootstrap-icons";
import { PromotionsListProps, PromotionsListState } from "./types";
import { Promotion } from "../../store/promotions/types";

export default class PromotionsList extends Component<
  PromotionsListProps,
  PromotionsListState
> {
  render() {
    const { data, columns, headerHeight, rowHeight } = this.props;
    return (
      <div className="wrapper">
        <AutoSizer>
          {({ width, height }) => (
            <Table
              width={width}
              height={height}
              headerHeight={headerHeight}
              rowHeight={rowHeight}
              rowCount={data.length}
              rowGetter={({ index }) => data[index]}
              onScroll={this.props.onScroll}
            >
              <Column
                cellRenderer={this.checkboxCellRenderer}
                dataKey="checkbox"
                width={0.04 * width}
              />
              {columns.map((column, index) => (
                <Column
                  key={index}
                  headerRenderer={this.headerRenderer}
                  cellRenderer={this.cellRenderer}
                  dataKey={column.dataKey}
                  label={column.label}
                  width={column.width * width}
                />
              ))}
              <Column
                cellRenderer={this.actionsCellRenderer}
                dataKey="actions"
                width={0.09 * width}
              />
            </Table>
          )}
        </AutoSizer>
      </div>
    );
  }

  handleEdit(item: Promotion): void {
    this.props.onEdit && this.props.onEdit(item);
  }

  handleRemove(item: Promotion): void {
    this.props.onRemove && this.props.onRemove(item);
  }

  handleDuplicate(item: Promotion): void {
    this.props.onDuplicate && this.props.onDuplicate(item);
  }

  handleSelect(item: Promotion, index: number): void {
    this.props.onSelect && this.props.onSelect(item, index);
  }

  actionsCellRenderer = ({ rowData, dataKey }: TableCellProps) => {
    return (
      <Fragment key={dataKey}>
        <ButtonGroup size="sm">
          <Button variant="secondary" onClick={() => this.handleEdit(rowData)}>
            <Icons.Pencil />
          </Button>
          <Button
            variant="secondary"
            onClick={() => this.handleDuplicate(rowData)}
          >
            <Icons.Files />
          </Button>
          <Button
            variant="secondary"
            onClick={() => this.handleRemove(rowData)}
          >
            <Icons.Trash />
          </Button>
        </ButtonGroup>
      </Fragment>
    );
  };

  checkboxCellRenderer = ({ rowData, rowIndex }: TableCellProps) => {
    return (
      <Fragment key={rowIndex}>
        <Form.Check onClick={() => this.handleSelect(rowData, rowIndex)} />
      </Fragment>
    );
  };

  headerRenderer = ({ dataKey, label }: TableHeaderProps) => {
    return (
      <Fragment key={dataKey}>
        <div>{label}</div>
      </Fragment>
    );
  };

  cellRenderer = ({ cellData, columnIndex }: TableCellProps) => {
    return (
      <Fragment key={columnIndex}>
        <span className="small">{cellData}</span>
      </Fragment>
    );
  };
}
