import sqlite3 from "sqlite3";
const db = new sqlite3.Database('../database/transactions.db');

export const getTransactions = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM transactions';
    db.all(query, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};
