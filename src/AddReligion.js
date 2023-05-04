import React from "react";
import "./AddReligion.css";
import Sidebar2 from "./Sidebar2";

function AddReligion() {
  return (
    <div>

      <Sidebar2/>
      <main className="cn">
      <select class="form-select mb-1 sc" aria-label="Default select example">
  <option selected>Select</option>
  <option value="1">Religion</option>
  <option value="2">Caste</option>
  <option value="3">Sub Caste</option>
  <option value="3">City</option>
  <option value="3">State</option>
</select>
        <div className="accontainer mt-4 ck">
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="acard indigo form-white">
                <div className="acard-body">
                  <h5 className="default-text">All Religions</h5>
                  <div class="table-responsive">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                          <th scope="col">Options</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Cell</td>
                          <td>
                            <ul class="d-flex ">
                              <li class="list-inline-item">
                                <button
                                  class="btn btn-success btn-sm btn-floating"
                                  type="button"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Edit"
                                >
                                  <i class="fa fa-edit"></i>
                                </button>
                              </li>
                              <li class="list-inline-item">
                                <button
                                  class="btn btn-danger btn-sm btn-floating"
                                  type="button"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Delete"
                                >
                                  <i class="fa fa-trash"></i>
                                </button>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>Cell</td>
                          <td>
                            <ul class="d-flex ">
                              <li class="list-inline-item">
                                <button
                                  class="btn btn-success btn-sm btn-floating"
                                  type="button"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Edit"
                                >
                                  <i class="fa fa-edit"></i>
                                </button>
                              </li>
                              <li class="list-inline-item">
                                <button
                                  class="btn btn-danger btn-sm btn-floating"
                                  type="button"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Delete"
                                >
                                  <i class="fa fa-trash"></i>
                                </button>
                              </li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>Cell</td>
                          <td>
                            <ul class="d-flex ">
                              <li class="list-inline-item">
                                <button
                                  class="btn btn-success btn-sm btn-floating"
                                  type="button"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Edit"
                                >
                                  <i class="fa fa-edit"></i>
                                </button>
                              </li>
                              <li class="list-inline-item">
                                <button
                                  class="btn btn-danger btn-sm btn-floating"
                                  type="button"
                                  data-toggle="tooltip"
                                  data-placement="top"
                                  title="Delete"
                                >
                                  <i class="fa fa-trash"></i>
                                </button>
                              </li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-4">
              <div className="acard">
                <div className="acard-body">
                  <h5 className="default-text">Add New Religion</h5>
                  {/*Body*/}
                  <div className="md-form">
                    <label htmlFor="defaultForm-email">Name</label>
                    <input
                      type="text"
                      id="defaultForm-email"
                      className="form-control"
                    />
                  </div>
                  <div className="text-center mt-2 rk">
                    <button type="button" class="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AddReligion;
