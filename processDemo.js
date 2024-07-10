// argv
console.log(process.argv)

// process.env
console.log(process.env)

// process.pid
console.log(process.pid)

// process.cwd()
console.log(process.cwd());

// title
console.log(process.title)

//memoryUsage()
console.log(process.memoryUsage());

// uptimee
console.log(process.uptime());  // process uptime

process.on('exit', (code)=> {
    console.log(`About to exit with code ${code}`)
})

// exit()
process.exit(1);

