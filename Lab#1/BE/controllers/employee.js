const employee = [
  { id: '1', name: 'Mohamed Sayed' },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {

  const id = req.params.id;
for (let i = 0; i < employee.length; i++) {
  if (employee[i].id === id) {
    employee.splice(i, 1);
    return;
  }
}

};

// TODO
exports.createEmployee = async (req, res, next) => {
  for (let i = 0; i < employee.length; i++) {
    if (employee[i].id === req.body.id) {
      return;}
    }
employee.push({ id: req.body.id, name: req.body.name });
};
