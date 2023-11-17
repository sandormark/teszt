// server.js
import express from 'express';
import cors from 'cors';
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import { db } from './db.js';
import cookieParser from 'cookie-parser';



const app = express();
const port = 5000;
// Engedélyezd a CORS-t
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);

// Middleware beállítása a JSON adatok kezeléséhez
// Kapcsolódás az adatbázishoz
db.connect((err) => {
  if (err) {
    console.error('Hiba az adatbázishoz való kapcsolódás során:', err);
  } else {
    console.log('Sikeres adatbáziskapcsolat');
  }
});

// API végpont az adatok lekéréséhez
app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM users';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Hiba az adatok lekérése során:', err);
      res.status(500).json({ error: 'Hiba az adatok lekérése során' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`A szerver fut a ${port}-es porton.`);
});
