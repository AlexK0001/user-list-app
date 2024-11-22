let users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(users);
  } else if (req.method === 'POST') {
    const { name, email } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }
    const newUser = { id: users.length + 1, name, email };
    users.push(newUser);
    return res.status(201).json(newUser);
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
