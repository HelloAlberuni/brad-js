/**
 * azHTTPLibrary Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 **/

 class azHTTPLibrary{
    // Make an HTTP GET reuest
    get( url ){
        return new Promise( (resolvee, rejectt) => {
            fetch( url )
            .then( res => res.json() )
            .then( data => resolvee(data) )
            .catch( err => rejectt(err) );
        });
    }

    // Make an HTTP POST reuest
    post( url, user ){
        return new Promise( (resolvee, rejectt) => {
            fetch( url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then( res => res.json() )
            .then( data => resolvee(data) )
            .catch( err => rejectt(err) );
        });
    }

    // Make an HTTP PUT reuest
    put( url, user ){
        return new Promise( (resolvee, rejectt) => {
            fetch( url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then( res => res.json() )
            .then( data => resolvee(data) )
            .catch( err => rejectt(err) );
        });
    }

    // Make an HTTP DELETE reuest
    delete( url, user ){
        return new Promise( (resolvee, rejectt) => {
            fetch( url, {
                method: 'DELETE'
            })
            .then( res => res.json() )
            .then( () => resolvee('User deleted') )
            .catch( err => rejectt(err) );
        });
    }
}