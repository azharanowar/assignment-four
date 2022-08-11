/*
    1. The function name will be exact radianToDegree
    2. The function will have one perameter that recieve radian value
    3. The function will return degree with 2 floating point number only
*/

function radianToDegree( radian ) {
    if ( typeof radian !== 'number' ) {
        return "Please provide a valid number as radian value!";
    }

    const radianToDegreeResult = radian * ( 180 / Math.PI );
    return radianToDegreeResult.toFixed(2);
}

// console.log( radianToDegree( 25 ) );





/*
    1. The function name will be exact isJavaScriptFile
    2. The function perameter will be a string of a file name.
    3. The function will return true if that is a Javascript file. Otherwise, return false.
 */

function isJavaScriptFile( fileName ) {
    if ( typeof fileName !== 'string' ) {
        return "Please enter a valid file name!";
    }

    if ( fileName.endsWith( '.js' ) ) {
        return true;
    } else {
        return false;
    }
}

// console.log( isJavaScriptFile( "image.jpg.js" ) );





/*
    1. The function name will be exact oilPrice
    2. The function will have 3 perameters, 
*/

function oilPrice( dieselQuantity, petrolQuantity, octaneQuantity ) {

    if ( typeof dieselQuantity !== 'number' || typeof petrolQuantity !== 'number' || typeof octaneQuantity !== 'number' ) {
        return "Please enter valid quantity of diesel, petrol, and octane! The quantity must be in number.";
    }

    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;

    const dieselTotalPrice = dieselPrice * dieselQuantity;
    const petrolTotalPrice = petrolPrice * petrolQuantity;
    const octaneTotalPrice = octanePrice * octaneQuantity;

    const totalPrice = dieselTotalPrice + petrolTotalPrice + octaneTotalPrice;

    return totalPrice;
}

// console.log( oilPrice( 1, 0, 2 ) );





/*
    1. The function name most be publicBusFare
    2. The bus and cars quantity will depends on how many people are going.
    3. A private bus will go if 50 peoples are there. No more than 50 and no less than 50 people.
    4. And a private car will go if 11 peoples are there. No more than 11 and no less than 11 people.
    5. The rest have to go by public bus. And a public bus ticket price will be 250tk.
    6. The function will return the ticket cost of people going on public buses.

*/

function publicBusFare( peoplesGoing ) {

    if ( typeof peoplesGoing !== 'number' ) {
        return "Please enter a valid number of people.";
    }

    const publicBusTicketPrice = 250;
    let totalPriceOfPublicBusTicket = 0;
    let restPeopleWantToGo = peoplesGoing;
    if ( restPeopleWantToGo >= 50 ) {
        let privateBusNeed = Math.floor( restPeopleWantToGo / 50 );
        restPeopleWantToGo -= privateBusNeed * 50;
    }

    if( restPeopleWantToGo >= 11 ) {
        let privateCarNeed = Math.floor( restPeopleWantToGo / 11 );
        restPeopleWantToGo -= privateCarNeed * 11;
    }

    totalPriceOfPublicBusTicket = restPeopleWantToGo * publicBusTicketPrice;
    return totalPriceOfPublicBusTicket;
}

console.log(publicBusFare( 365 ));