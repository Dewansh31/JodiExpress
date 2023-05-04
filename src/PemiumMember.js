import React from 'react'
import "./FreeMember.css"
import Sidebar2 from './Sidebar2'

function PemiumMember() {
  return (
    <div>
      <Sidebar2/>
      <div className="main-content mc">
        <h5>Premium Members</h5>
         <div className="records table-responsive">
          <div className="record-header">
            {/* <div className="add">
              <span>Entries</span>
              <select name id>
                <option value>ID</option>
              </select>
              <button>Add record</button>
            </div> */}
            <div className="browse">
              <input type="search" placeholder="Search" className="record-search" />
              {/* <select name id>
                <option value>Status</option>
              </select> */}
            </div>
          </div>
          <div>
            <table width="100%">
              <thead>
                <tr>
                  <th>S.No.</th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Member Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg)'}} />
                      {/* <div className="client-info">
                        <h4>Andrew Bruno</h4>
                        <small>bruno@crossover.org</small>
                      </div> */}
                    </div>
                  </td>
                  <td>
                    Ram
                  </td>
                  <td>
                    Male
                  </td>
                  <td>
                    abc@gmail.com
                  </td>
                  <td>
                    Active
                  </td>
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
                  <td>2</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg)'}} />
                      {/* <div className="client-info">
                        <h4>Exty Bruno</h4>
                        <small>exty@crossover.org</small>
                      </div> */}
                    </div>
                  </td>
                  <td>
                    Dhoni
                  </td>
                  <td>
                   Male
                  </td>
                  <td>
                    abc@gmail.com
                  </td>
                  <td>
                    Active
                  </td>
                
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
                  <td>3</td>
                  <td>
                    <div className="client">
                      <div className="client-img bg-img" style={{backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg)'}} />
                      {/* <div className="client-info">
                        <h4>Exty Bruno</h4>
                        <small>exty@crossover.org</small>
                      </div> */}
                    </div>
                  </td>
                  <td>
                    Raju
                  </td>
                  <td>
                    Male
                  </td>
                  <td>
                    abc@gmail.com
                  </td>
                  <td>
                    Active
                  </td>
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
  )
}

export default PemiumMember
