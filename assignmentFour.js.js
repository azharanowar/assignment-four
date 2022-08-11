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

console.log( radianToDegree( 25 ) );