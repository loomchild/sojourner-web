const admin = require('firebase-admin')
const { hashUid } = require('./common')

async function listUsers (users = {}, token = undefined) {
  const result = await admin.auth().listUsers(1000, token)
  result.users.forEach(user => {
    users[hashUid(user.uid)] = {
      createdAt: new Date(user.metadata.creationTime).toISOString(),
      isRegistered: !!user.email
    }
  })

  if (result.pageToken) {
    await listUsers(users, result.pageToken)
  }

  return users
}

module.exports = async function () {
  return listUsers()
}
