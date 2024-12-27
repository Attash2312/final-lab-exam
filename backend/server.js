const express = require('express');
const mongoose = require('mongoose');
const attractionRoutes = require('./routes/attractionRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const visitorRoutes = require('./routes/visitorRoutes');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb+srv://attash2312:admin112233@cluster0.vdmn8.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });

  app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Tourism Management System API!</h1><p>Use the following endpoints to interact with the system:</p><ul><li>/attractions</li><li>/visitors</li><li>/reviews</li></ul>');
  });
  

app.use(express.json());
app.use('/attractions', attractionRoutes);
app.use('/reviews', reviewRoutes);
app.use('/visitors', visitorRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
