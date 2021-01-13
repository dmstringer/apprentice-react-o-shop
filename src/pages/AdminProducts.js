import React from 'react';
import { Link } from 'react-router-dom';

function AdminProducts() {
  return (
    <div>
      <Link to="/admin-products/new" type="button" className="btn btn-primary">
        New Product
      </Link>
    </div>
  );
}

export default AdminProducts;
