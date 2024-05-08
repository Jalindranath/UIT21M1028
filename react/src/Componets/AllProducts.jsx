import React, { useEffect, useState } from 'react';
import './AllProducts.css';
function Allproduct() {
  const [product, setDetails] = useState([]);



 const [company, setCompany] = useState('SNP'); // Default value
  const [category, setCategory] = useState('Laptop'); // Default value
  const [min, setmin] = useState(1); // Default value
  const [max, setmax] = useState(10000); // Default value
  const [discount, getdiscount] = useState(0); // Default value
  const [currentPage, setPage] = useState(1);
const [productPerPage] = useState(5);
  const [sortOrder, setSortOrder] = useState('asc'); // Default value
  const [sortBy, setSortBy] = useState('price'); // Default value

  useEffect(() => {
    fetchproduct();
  }, [company, category, min, max, discount, currentPage, sortOrder, sortBy]);

  const fetchproduct = () => {
    const startIndex = (currentPage - 1) * productPerPage;
    const endIndex = startIndex + productPerPage;
    
    fetch(`http://127.0.0.1:8000/api/categories/${category}/product?company=${company}&top=${endIndex}&min=${min}&max=${max}&discount=${discount}&sort=${sortBy}&order=${sortOrder}`)
      .then(response => response.json())

      .then(data => setDetails(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleCompanyChange = (event) => 
    {

    setCompany(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleminChange = (event) => {
    setmin(event.target.value);
  };

  const handlemaxChange = (event) => {
    setmax(event.target.value);
  };

  const handleDiscountChange = (event) => {


    getdiscount(event.target.value);

  };

  const handleSortChange = (event) => {

    setSortBy(event.target.value);
  };

  const handleOrderChange = (event) => {
    setSortOrder(event.target.value);

  };

  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  // Pagination logic
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(product.length / productPerPage); i++) {

    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="filter">
        <label htmlFor="company">Company:</label>
        <select id="company" value={company}    onChange={handleCompanyChange}>
          <option value="AMZ">AMZ</option>
          <option value="FLP">FLP</option>

          <option value="SNP">SNP</option>
          <option value="MYN">MYN</option>

          <option value="AZO">AZO</option>

        </select>
        <label htmlFor="category">Category:</label>
        <select id="category" value={category}      onChange={handleCategoryChange}>
          <option value="Phone">Phone</option>
          <option value="Computer">Computer</option>

          <option value="TV">TV</option>


          <option value="Earphone">Earphone</option>
          <option value="Tablet">Tablet</option>
       <option value="Charger">Charger</option>
          <option value="Keypad">Keypad</option>
           <option value="Pendrive">Pendrive</option>
        <option value="Remote">Remote</option>


          <option value="Speaker">Speaker</option>
          <option value="Headset">Headset</option>

          <option value="Laptop">Laptop</option>
          <option value="PC">PC</option>
          
        </select>
        <label htmlFor="min">Minimum Price:</label>
        <input id="min" type="number" value={min} onChange={handleminChange} />
        <label htmlFor="max">Maximum Price:</label>
        <input id="max" type="number" value={max} onChange={handlemaxChange} />
        <label htmlFor="discount">Discount:</label>
        <input id="discount" type="number" value={discount} onChange={handleDiscountChange} />
        <label htmlFor="sortBy">Sort By:</label>
        <select id="sortBy" value={sortBy} onChange={handleSortChange}>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          {/* Add other options */}
        </select>
        <label htmlFor="sortOrder">Sort Order:</label>
        <select id="sortOrder" value={sortOrder} onChange={handleOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <ul className="product">
        {product.map(product => (
          <li key={product.product_id} className="product">
              <h2>{product.productName}</h2>
            <p>Price: ${product.price}</p>
            <p>Rating: {product.rating}</p>
            <p>Discount: {product.discount}%</p>
            <p>Availability: {product.availability}</p>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {pageNumbers.map(number => (
          <button key={number} className={currentPage === number ? 'active' : ''} onClick={() => handlePageChange(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Allproduct;
