import React from 'react'

function Table() {
  return (
    <div style={{marginTop:"60px"}}>
  <div className="table-responsive text-nowrap">
    {/*Table*/}
    <table className="table table-striped">
      {/*Table head*/}
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Country</th>
          <th>City</th>
          <th>Position</th>
          <th>Age</th>
        </tr>
      </thead>
      {/*Table head*/}
      {/*Table body*/}
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Kate</td>
          <td>Moss</td>
          <td>USA</td>
          <td>New York</td>
          <td>Web Designer</td>
          <td>23</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Anna</td>
          <td>Wintour</td>
          <td>USA  </td>
          <td>New York City </td>
          <td>Web Designer </td>
          <td>36</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Tom</td>
          <td>Bond</td>
          <td>USA  </td>
          <td>New York City </td>
          <td>Web Designer </td>
          <td>25</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Jerry</td>
          <td>Horwitz</td>
          <td>USA  </td>
          <td>New York City </td>
          <td>Web Designer </td>
          <td>41</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Janis</td>
          <td>Joplin</td>
          <td>USA  </td>
          <td>New York City </td>
          <td>Web Designer </td>
          <td>39</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Gary</td>
          <td>Winogrand</td>
          <td>USA  </td>
          <td>New York City </td>
          <td>Web Designer </td>
          <td>37</td>
        </tr>
        <tr>
          <th scope="row">7</th>
          <td>Angie</td>
          <td>Smith</td>
          <td>USA  </td>
          <td>New York City </td>
          <td>Web Designer </td>
          <td>52</td>
        </tr>
        <tr>
          <th scope="row">8</th>
          <td>John</td>
          <td>Mattis</td>
          <td>USA  </td>
          <td>New York City </td>
          <td>Web Designer </td>
          <td>28</td>
        </tr>
        <tr>
          <th scope="row">9</th>
          <td>Otto</td>
          <td>Morris</td>
          <td>USA  </td>
          <td>New York City </td>
          <td>Web Designer </td>
          <td>35</td>
        </tr>
      </tbody>
      {/*Table body*/}
    </table>
    {/*Table*/}
  </div>
</div>

  )
}

export default Table
