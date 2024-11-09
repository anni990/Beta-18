import React from "react";
import { Card, Table } from "react-bootstrap";
import './InventaryManagament.css'; // Ensure you include the CSS for highlighting

const inventoryData = [
  { foodItem: "Rice 🍚", bestUseBefore: "2024-12-31", quantityLeft: "20kg (Low)" },
  { foodItem: "Vegetables 🥦🥕", bestUseBefore: "2024-11-15", quantityLeft: "50kg" },
  { foodItem: "Spices 🌶️", bestUseBefore: "2024-11-10", quantityLeft: "10kg" },
  { foodItem: "Bread 🍞", bestUseBefore: "2024-11-20", quantityLeft: "15kg" },
  { foodItem: "Milk 🥛", bestUseBefore: "2024-11-15", quantityLeft: "30L" },
  { foodItem: "Eggs 🥚", bestUseBefore: "2024-11-05", quantityLeft: "200 units" },
  { foodItem: "Chicken 🍗", bestUseBefore: "2024-11-03", quantityLeft: "25kg" },
  { foodItem: "Fish 🐟", bestUseBefore: "2024-11-02", quantityLeft: "18kg" },
  { foodItem: "Pasta 🍝", bestUseBefore: "2024-12-01", quantityLeft: "40kg" },
  { foodItem: "Tomatoes 🍅", bestUseBefore: "2024-11-30", quantityLeft: "22kg" },
  { foodItem: "Onions 🧅", bestUseBefore: "2024-11-15", quantityLeft: "35kg" },
  { foodItem: "Potatoes 🥔", bestUseBefore: "2024-11-20", quantityLeft: "60kg" },
  { foodItem: "Cheese 🧀", bestUseBefore: "2024-11-20", quantityLeft: "10kg" },
  { foodItem: "Yogurt 🥄", bestUseBefore: "2024-11-07", quantityLeft: "25kg" },
  { foodItem: "Butter 🧈", bestUseBefore: "2024-11-12", quantityLeft: "15kg" },
  { foodItem: "Apples 🍎", bestUseBefore: "2024-11-18", quantityLeft: "30kg" },
  { foodItem: "Bananas 🍌", bestUseBefore: "2024-11-05", quantityLeft: "25kg" },
  { foodItem: "Oranges 🍊", bestUseBefore: "2024-11-15", quantityLeft: "20kg" },
  { foodItem: "Grapes 🍇", bestUseBefore: "2024-11-08", quantityLeft: "15kg" },
  { foodItem: "Lettuce 🥬", bestUseBefore: "2024-11-04", quantityLeft: "10kg" },
  { foodItem: "Peppers 🌶️", bestUseBefore: "2024-11-10", quantityLeft: "12kg" },
  { foodItem: "Cucumbers 🥒", bestUseBefore: "2024-11-10", quantityLeft: "14kg" },
  { foodItem: "Carrots 🥕", bestUseBefore: "2024-11-12", quantityLeft: "18kg" },
  { foodItem: "Spinach 🍃", bestUseBefore: "2024-11-03", quantityLeft: "12kg" },
  { foodItem: "Beans 🫘", bestUseBefore: "2024-11-20", quantityLeft: "20kg" },
  { foodItem: "Lentils 🍛", bestUseBefore: "2024-12-20", quantityLeft: "15kg" },
  { foodItem: "Beef 🥩", bestUseBefore: "2024-11-05", quantityLeft: "25kg" },
  { foodItem: "Pork 🍖", bestUseBefore: "2024-11-07", quantityLeft: "20kg" },
  { foodItem: "Tofu 🥣", bestUseBefore: "2024-11-09", quantityLeft: "10kg" },
  { foodItem: "Peas 🟢", bestUseBefore: "2024-11-11", quantityLeft: "30kg" },
];

function InventoryManagement() {
  const today = new Date().toISOString().split('T')[0];
  const nearestDate = "2024-09-30"; // You can directly specify the nearest date here

  return (
    <div className="fade-in p-4" style={{ backgroundColor: 'var(--primary-light)', borderRadius: '8px' }}>
      <h2>Inventory Management</h2>
      <p>Today's Date: {today}</p>
      <Card className="p-3">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Food Item</th>
              <th>Best Use Before</th>
              <th>Quantity Left</th>
            </tr>
          </thead>
          <tbody>
            {inventoryData.map((item, index) => (
              <tr key={index} className={item.bestUseBefore === nearestDate ? 'highlight' : ''}>
                <td>{item.foodItem}</td>
                <td>{item.bestUseBefore}</td>
                <td>{item.quantityLeft}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </div>
  );
}

export default InventoryManagement;
