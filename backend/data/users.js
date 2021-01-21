import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@rgtechcafe.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Sonit',
    email: 'sonit@rgtechcafe.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Eshant',
    email: 'ishu@rgtechcafe.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
