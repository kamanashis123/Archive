// models/userModel.js
const db = require('../db');

const User = {
  getAll: (callback) => {
    const query = 'SELECT * FROM infor'; // Changed to 'info'
    db.query(query, (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  create: (userData, callback) => {
    const query = 'INSERT INTO infor (name, age) VALUES (?, ?)'; // Changed to 'info'
    db.query(query, [userData.name, userData.age], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results.insertId);
    });
  },
  delete: (id, callback) => {
    const query = 'DELETE FROM infor WHERE id = ?';
    db.query(query, [id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },

  rename: (id, newName, callback) => {
    const query = 'UPDATE infor SET name = ? WHERE id = ?';
    db.query(query, [newName, id], (err, results) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, results);
    });
  },
};


module.exports = User;