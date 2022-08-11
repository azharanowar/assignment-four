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