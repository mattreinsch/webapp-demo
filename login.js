const query = `SELECT * FROM users WHERE username = '${req.body.username}' AND password = '${req.body.password}'`;
db.execute(query, (err, result) => { ... });
