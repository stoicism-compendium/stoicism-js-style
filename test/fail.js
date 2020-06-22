const {spawn} = require('child_process')
const fs = require('fs')
const path = require('path')

async function run() {
  const dir = './test/fail'
  const files = await fs.promises.readdir(dir)
  for (const file of files) {
    const filePath = path.join(dir, file)
    // Every run should fail. In case there is a success, print the output and
    // exit with an error.
    spawn('eslint', ['--no-ignore', filePath]).on('exit', (exitCode) => {
      if (exitCode === 0) {
        console.error('Error:', filePath, '\n')
        process.exit(1)
      }
    })
  }
}

run()
