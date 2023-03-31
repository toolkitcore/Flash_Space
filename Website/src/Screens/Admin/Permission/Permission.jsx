import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/Admin/Footer/Footer";
import TopNav from "../../../components/Admin/TopNav/TopNav";
import Pagination from "../../../components/Pagination/Pagination";

const Tables = () => {
  const posts = [
    {
      id: 1,
      name: "meo",
    },
    {
      id: 2,
      name: "meo",
    },
    {
      id: 3,
      name: "meo",
    },
    {
      id: 4,
      name: "meo",
    },
    {
      id: 5,
      name: "meo",
    },
    {
      id: 6,
      name: "meo",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <TopNav />
      <div className="container-scroller">
        <div className=" page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">
              <div className=" grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">
                      Bảng danh sách quyền hiền có trong hệ thống
                    </h4>
                    <div className="form-group">
                      {/* <label for="exampleInputName1">Tìm kiểm theo tên</label> */}
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputName1"
                        placeholder="Tìm theo tên của thể loại"
                      />
                    </div>
                    <div className="form-group">
                      {/* <label for="exampleInputName1">Sắp xếp</label> */}
                      <select
                        class="form-select w-75"
                        aria-label="Default select example"
                      >
                        <option selected>Chọn cách sắp xếp</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                    </div>
                    <Link
                      to={"/detailaccount"}
                      className="btn btn-outline-primary btn-fw mb-4"
                    >
                      Thêm mới
                    </Link>
                    <h5 className="card-title">Bảng danh sách</h5>
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>User</th>
                            <th>First name</th>
                            <th>Progress</th>
                            <th>Amount</th>
                            <th>Deadline</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentPosts.map((post) => (
                            <tr>
                              <td className="py-1">
                                <img
                                  src="../../images/faces/face1.jpg"
                                  alt="image"
                                />
                              </td>
                              <td>{post.id}</td>
                              <td>
                                <div className="progress">
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "25%" }}
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </td>
                              <td>$ 77.99</td>
                              <td>May 15, 2015</td>
                              <td>
                                <Link
                                  to={"/detailpermission"}
                                  className="btn btn-outline-success btn-fw m-1"
                                >
                                  Chi tiết
                                </Link>
                                <Link className="btn btn-outline-danger btn-fw m-1">
                                  Xóa
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={posts.length}
                        paginate={paginate}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tables;
