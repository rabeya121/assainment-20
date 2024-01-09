const express = require("express");
const {
  calculateTotal,
  quantityByProduct,
  topProducts,
  avgPrice,
  revenueByMonth,
  highestQtySold,
  departmentSalaryExp,
} = require("../controller/salesController");
const router = express.Router();

router.get("/sales/total-revenue", calculateTotal);

// Endpoint to find and return the total quantity sold for each product
router.get("/sales/quantity-by-product", quantityByProduct);

// Endpoint to retrieve the top 5 products with the highest total revenue
router.get("/sales/top-products", topProducts);

// Endpoint to calculate and return the average price of products sold
router.get("/sales/average-price", avgPrice);

// Endpoint to group the sales data by month and year and calculate the total revenue for each month-year combination
router.get("/sales/revenue-by-month", revenueByMonth);

// Endpoint to find and return the product that had the highest quantity sold on a single day
router.get("/sales/highest-quantity-sold", highestQtySold);

// Endpoint to calculate and return the total salary expense for each department
router.get("/sales/department-salary-expense", departmentSalaryExp);

module.exports = router;
