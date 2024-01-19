import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ExcelData() {
  const [file, setFile] = useState(null);
  const [deals, setDeals] = useState([]);
  const [filteredDeals, setFilteredDeals] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchDeals();
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append("excel_file", file);

    axios
      .post("http://localhost:8000/api/upload_deals/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        console.log("File uploaded successfully");
        fetchDeals(); // Fetch new data after upload
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
      });
  };

  const fetchDeals = () => {
    axios
      .get("http://localhost:8000/api/get_deals/")
      .then((response) => {
        const dealsData = JSON.parse(response.data.deals);
        setDeals(dealsData);
        setFilteredDeals(dealsData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const searchItems = (searchValue) => {
    setSearchQuery(searchValue);
    if (searchValue !== "") {
      const filteredData = deals.filter((item) => {
        return Object.values(item.fields)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      });
      setFilteredDeals(filteredData);
    } else {
      setFilteredDeals(deals);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredDeals.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="mt-20">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>

      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => searchItems(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Deal No</th>
            <th>Brand</th>
            <th>Model</th>
            <th>New State</th>
            <th>Location</th>
            <th>Deal Date</th>
            <th>Customer Name</th>
            <th>Registration No</th>
            <th>RC Available</th>
            <th>Repo Date</th>
            <th>Segment</th>
            <th>Parked At</th>
            <th>Yard City</th>
            <th>Valuation Amount</th>
            <th>Valuation Report Link</th>
            <th>Manufacturing Year</th>
            <th>Base Rate</th>
          </tr>
        </thead>
        <tbody>
          {deals.map((deal, index) => (
            <tr key={index}>
              <td>{deal.fields.deal_no}</td>
              <td>{deal.fields.brand}</td>
              <td>{deal.fields.model}</td>
              <td>{deal.fields.new_state}</td>
              <td>{deal.fields.location}</td>
              <td>{deal.fields.deal_date}</td>
              <td>{deal.fields.customer_name}</td>
              <td>{deal.fields.registration_no}</td>
              <td>{deal.fields.rc_available}</td>
              <td>{deal.fields.repo_date}</td>
              <td>{deal.fields.segment}</td>
              <td>{deal.fields.parked_at}</td>
              <td>{deal.fields.yard_city}</td>
              <td>{deal.fields.valuation_amount}</td>
              <td>{deal.fields.valuation_report_link}</td>
              <td>{deal.fields.manufacturing_year}</td>
              <td>{deal.fields.base_rate}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Component */}
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredDeals.length}
        paginate={paginate}
      />
    </div>
  );
}

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
