<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script setup>
/* eslint-disable */
const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log('Prepearing data...')
        const backendData = {
            server: 'aws',
            port: 2000,
            status: 'working'
        }
        resolve(backendData)
    }, 2000)
})

p.then(data => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            data.modified = true
            resolve(data)
        }, 2000)
    }).then(clientData => {
        console.log('Data received', clientData)
        clientData.edited = true
        return clientData
    }).then(data => {
        console.log('final chain', data)
    })
})
//////////////async/////////

async function func() {
    const resp = await p()

}
</script>