const data = [
    {
        name: 'Alberuni',
        email: 'azad.bbc@gmail.com',
        address: 'Dhaka, Bangladesh',
        phone: '(950) 640-7114',
        image: 'https://randomuser.me/api/portraits/men/86.jpg'
    },
    {
        name: 'Alma Soto',
        email: 'alma.soto@example.com',
        address: '1966 Green Rd',
        phone: '(740) 607-7594',
        image: 'https://randomuser.me/api/portraits/women/86.jpg'
    },
    {
        name: 'Lorraine Austin',
        email: 'lorraine.austin@example.com',
        address: '2128 Railroad St',
        phone: '(987) 842-4590',
        image: 'https://randomuser.me/api/portraits/women/87.jpg'
    }
]

const profiles = profileIterator( data );

// On load
window.addEventListener('DOMContentLoaded', renderProfile);

// On click next button
document.querySelector('#next').addEventListener('click', renderProfile);

/**
 * It used to display the profile of the user
 * 
 * @returns void
 */
function renderProfile(){
    let currentProfile = profiles.next().value;

    // I there is no profile
    if( currentProfile == undefined ){
        alert("No more profiles");
        window.location.reload();
        return;
    }

    // Iterator through the data and show the first user info then 2nd ans so on    
    document.querySelector('#imageDisplay').innerHTML = `<img src="${currentProfile.image}" />`;
    

    let html = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Email: ${currentProfile.email}</li>
        <li class="list-group-item">Address: ${currentProfile.address}</li>
        <li class="list-group-item">Phone: ${currentProfile.phone}</li>
    </ul>
    `;
    document.querySelector('#profileDisplay').innerHTML = html;
}

/**
 * It takes an array and iterate through it
 * 
 * @param profiles - an array of profiles
 * @returns An object with a next method.
 */
function profileIterator( profiles ){
    let count = profiles.length;

    return {
        next: function(){
            if( count > 0 ){
                count--;

                return {
                    done: false,
                    value: profiles[count]
                }
            } else {
                return {
                    done: true,
                }
            }
        }
    }
}