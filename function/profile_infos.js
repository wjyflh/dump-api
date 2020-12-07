function showPersonalInfos() {

    return {
        statusCode: 200,
        headers,
        body: ''
    }

}

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET'
};

exports.handler = async function () {
    try {
        await showPersonalInfos()
    } catch(err) {
        return {
            statusCode: 500,
            headers,
            body: 'Internal Server Error'
        }
    }
}