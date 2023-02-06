let instance = new azHTTPLibrary();

// Make get HTTP request
// instance.get('https://jsonplaceholder.typicode.com/posts')
// .then( res => console.log(res) )
// .catch( err => console.log(err) );

// Make post HTTP request
// instance.post('https://jsonplaceholder.typicode.com/users', { name: 'azadd', username: 'ab_azad' } )
// .then( res => console.log(res) )
// .catch( err => console.log('something wrong') );

// Make PUT HTTP request
// instance.put('https://jsonplaceholder.typicode.com/users/2', { name: 'azadd', username: 'ab_azad' } )
// .then( res => console.log(res) )
// .catch( err => console.log('something wrong') );

// Make Delete HTTP request
instance.delete('https://jsonplaceholder.typicode.com/users/2' )
.then( res => console.log(res) )
.catch( err => console.log('something wrong') );