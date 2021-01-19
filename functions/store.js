const admin = require('firebase-admin')

module.exports = async function store (data, fileName) {
  const bucket = admin.storage().bucket()

  const file = bucket.file(`conferences/${fileName}`)
  const stringData = JSON.stringify(data, null, 2)

  const exists = (await file.exists())[0]
  if (exists) {
    const oldStringData = (await file.download())[0]
    try {
      const oldData = JSON.stringify(JSON.parse(oldStringData), null, 2)
      if (oldData === stringData) {
        console.log('Data unchanged, skipping')
        return
      }
    } catch (error) {
      console.log(`Error parsing old file: ${error.message}`)
    }
  }

  console.log('Storing conference data')
  await file.save(stringData)
  await file.makePublic()
  await file.setMetadata({ contentType: 'application/json', cacheControl: 'public, max-age=0, must-revalidate' })
}
