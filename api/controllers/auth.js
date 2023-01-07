import { db } from "../db";

export const register = (req, res) => {
  // CHECK EXISTING USER
  const q = "SELECT * FROM users WHERE email = ? OR username = ?";

  db.quer(q, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
