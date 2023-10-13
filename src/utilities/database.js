import sqlite3 from "sqlite3";

const db = new sqlite3.Database('../database/transactions.db');

const tableData = [
    {
      id: 1,
      date: "2022-06-09",
      coin: "ETH",
      amount: 250.81,
      status: "completed",
      information: "Address: bhjgfAhdgf2124df24df587dfs4sdf44s2dd2f5s"
    },
    {
      id: 2,
      date: "2022-06-09",
      coin: "ETH",
      amount: 250.81,
      status: "completed",
      information: "Address: bhjgfAhdgf2124df24df587dfs4sdf44s2dd2f5s"
    },
    {
      id: 3,
      date: "2022-06-09",
      coin: "ETH",
      amount: 250.81,
      status: "completed",
      information: "Address: bhjgfAhdgf2124df24df587dfs4sdf44s2dd2f5s"
    },
    {
      id: 4,
      date: "2022-06-09",
      coin: "ETH",
      amount: 250.81,
      status: "completed",
      information: "Address: bhjgfAhdgf2124df24df587dfs4sdf44s2dd2f5s"
    },
    {
      id: 5,
      date: "2022-06-09",
      coin: "ETH",
      amount: 250.81,
      status: "completed",
      information: "Address: bhjgfAhdgf2124df24df587dfs4sdf44s2dd2f5s"
    },
    {
      id: 6,
      date: "2022-06-09",
      coin: "ETH",
      amount: 250.81,
      status: "completed",
      information: "Address: bhjgfAhdgf2124df24df587dfs4sdf44s2dd2f5s"
    },
    {
      id: 7,
      date: "2022-06-09",
      coin: "ETH",
      amount: 250.81,
      status: "completed",
      information: "Address: bhjgfAhdgf2124df24df587dfs4sdf44s2dd2f5s"
    },
    {
      id: 8,
      date: "2022-06-09",
      coin: "ETH",
      amount: 250.81,
      status: "completed",
      information: "Address: bhjgfAhdgf2124df24df587dfs4sdf44s2dd2f5s"
    }
  ];

db.serialize(() => {
  db.run('CREATE TABLE transactions (id INT, date TEXT, coin TEXT, amount REAL, status TEXT, information TEXT)');

  // Insert your data into the table
  const stmt = db.prepare('INSERT INTO transactions VALUES (?, ?, ?, ?, ?, ?)');
  tableData.forEach((data) => {
    stmt.run(data.id, data.date, data.coin, data.amount, data.status, data.information);
  });
  stmt.finalize();
});

db.close();
