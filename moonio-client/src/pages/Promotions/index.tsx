import React, { Component } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "../../store/reducers";
import {
  fetchPromotions,
  initPromotions,
} from "../../store/promotions/actions";
import { FetchPromotionsParams, Promotion } from "../../store/promotions/types";
import { fetchConfig } from "../../store/config/actions";
import { PromotionsPageProps, PromotionsPageState } from "./types";
import { ScrollEventData } from "react-virtualized";

import Button from "react-bootstrap/Button";
import Header from "../../components/Header";
import PromotionsList from "../../components/PromotionsList";

import "./style.css";

class PromotionsPage extends Component<
  PromotionsPageProps,
  PromotionsPageState
> {
  componentDidMount(): void {
    this.fetchPromotions();
    this.props.fetchConfig();
  }

  render() {
    const { rowHeight, headerHeight, columns } = this.props.config;

    return (
      <div>
        <Header loading={this.props.loading} />
        {this.props.loaded && this.props.promotions.length ? (
          <PromotionsList
            data={this.props.promotions}
            rowHeight={rowHeight}
            headerHeight={headerHeight}
            columns={columns}
            onScroll={this.onScroll}
            onEdit={this.onEditRow}
            onDuplicate={this.onDuplicateRow}
            onRemove={this.onRemoveRow}
            onSelect={this.onSelectRow}
          />
        ) : (
          <div className="text-center p-5">
            <h1>The database is empty</h1>
            <Button
              variant="dark"
              disabled={this.props.loading}
              onClick={this.props.initPromotions}
            >
              {this.props.loading ? "Loading…" : "Load Data"}
            </Button>
          </div>
        )}
      </div>
    );
  }

  onEditRow(data: Promotion): void {
    console.log("Editing", data);
  }

  onRemoveRow(data: Promotion): void {
    console.log("Removing", data);
  }

  onDuplicateRow(data: Promotion): void {
    console.log("Duplicating", data);
  }

  onSelectRow(data: Promotion, index: number): void {
    console.log("Selecting", index, data);
  }

  onScroll = (data: ScrollEventData): void => {
    const shouldFetchNextPage =
      data.scrollTop + data.clientHeight > data.scrollHeight * 0.9;
    if (
      !shouldFetchNextPage ||
      this.props.loading ||
      this.props.page >= this.props.totalPages
    ) {
      return;
    }

    this.fetchPromotions({
      page: this.props.page + 1,
      pageSize: this.props.pageSize,
    });
  };

  fetchPromotions(data: FetchPromotionsParams = {}) {
    const { page = this.props.page, pageSize = this.props.pageSize } = data;
    this.props.fetchPromotions({ pageSize, page });
  }
}

function mapStateToProps(state: RootState) {
  return {
    loading: state.promotions.loading || state.config.loading,
    loaded: state.promotions.loaded,
    error: state.promotions.error || state.config.error,
    promotions: state.promotions.rows,
    loadedPromotions: state.promotions.loaded,
    config: state.config.data,
    page: state.promotions.page,
    pageSize: state.promotions.pageSize,
    totalPages: state.promotions.totalPages,
  };
}
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    fetchPromotions: (data: FetchPromotionsParams) =>
      dispatch(fetchPromotions(data)),
    fetchConfig: () => dispatch(fetchConfig()),
    initPromotions: () => dispatch(initPromotions()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PromotionsPage);
