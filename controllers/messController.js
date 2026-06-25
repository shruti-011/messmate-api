const messes = require("../data/messData");

// GET all
exports.getAllMesses = (req, res) => {
  res.json(messes);
};

// GET by id
exports.getMessById = (req, res) => {
  const messId = parseInt(req.params.id);
  const mess = messes.find((m) => m.id === messId);

  if (!mess) {
    return res.status(404).json({ message: "Mess not found" });
  }

  res.json(mess);
};

// CREATE
exports.createMess = (req, res) => {
  const { name, location, price } = req.body;

  if (!name || !location || !price) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const newMess = {
    id: messes.length + 1,
    name,
    location,
    price,
  };

  messes.push(newMess);
  res.status(201).json(newMess);
};

// UPDATE
exports.updateMess = (req, res) => {
  const messId = parseInt(req.params.id);
  const mess = messes.find((m) => m.id === messId);

  if (!mess) {
    return res.status(404).json({ message: "Mess not found" });
  }

  const { name, location, price } = req.body;

  if (name) mess.name = name;
  if (location) mess.location = location;
  if (price) mess.price = price;

  res.json({ message: "Updated successfully", mess });
};

// DELETE
exports.deleteMess = (req, res) => {
  const messId = parseInt(req.params.id);
  const index = messes.findIndex((m) => m.id === messId);

  if (index === -1) {
    return res.status(404).json({ message: "Mess not found" });
  }

  const deleted = messes.splice(index, 1);

  res.json({ message: "Deleted successfully", deleted });
};
