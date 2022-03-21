import React, { PureComponent } from "react";
import ReactPaginate from "react-paginate";
import { Container, Grid } from "@mui/material";
import astro from "./images/astro.png";
import { Link } from "react-router-dom";
import { referData } from "../data";

class Cards extends PureComponent {
  constructor(props) {
    console.log(props);
    super(props);

    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: this.props.card,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };

  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice,
    });
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    // axios
    //     .get('https://jsonplaceholder.typicode.com/users')
    //     .then(res => {
    const data = this.props.data;
    console.log(data);

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );

    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      orgtableData: this.props.data,
      tableData: slice,
    });
    // })
  }
  render() {
    return (
      <>
        <Grid container spacing={3}>
          {this.state.tableData.map((tdata, i) => (
            <Grid item xs={12} sm={6} md={3} sx={{ padding: 10, height: 450 }}>
              <div className="card-container">
                <div className="img-container">
                  <img src={astro} />
                </div>
                <div className="text-container">
                  <div className="top">
                    <span>Date:</span>
                    <span>Tag/Catogary</span>
                  </div>
                  <div className="bottom">
                    <h4>Lorem</h4>
                    <p>{tdata.desc}</p>
                  </div>
                  <Link to={`/topic/${tdata.id}`}>
                    <div>Read More</div>
                  </Link>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
        {/* Pagination  */}
        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </>
    );
  }
}

export default Cards;
