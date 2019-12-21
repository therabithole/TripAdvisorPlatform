import React, { Component } from "react";
import { paginate } from "./_commonFuncs/paginate";
import Pagination from "./_commonFuncs/Pagination";
class Products extends Component {
  state = {
    products: [],
    sidebars: [],
    pageSize: 10,
    currentPage: 1
  };

  /* SideBar Functions*/

  /* Handle Individual SideBar */

  handleSelectedSideBar = name => {
    this.setState({ selectedSideBar: name }, () => {
      console.log(this.state.selectedSideBar, "Selected Sidebar");
    });
  };

  /* Handle Individual Item*/

  handleSelectedItems = item => {
    this.setState({ selectedItem: item }, () => {
      console.log(this.state.selectedItem, "Selected item");
    });
  };

  /* Products Functions - SUPPLIERS*/

  handleProductAdd = product => {
    console.log("Added", product);
  };

  handleProductChange = product => {
    console.log("Changed", product);
  };

  handleProductDeletion = product => {
    console.log("Deleted", product);

    const products = this.state.products.filter(d => d._id !== products._id);
    this.setState({ products });
  };

  /* Product Functions - USERS */

  handleProductBookmark = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = { ...products[index] };
    products[index].bookmarked = !products[index].bookmarked;
    this.setState({ products });
  };

  handleProductReservation = product => {
    console.log("You have reserved", product);
  };
  /* Pagination*/

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    return null;
  }
}

export default Products;
