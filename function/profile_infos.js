const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET'
};

exports.handler = async function () {
    let resObj = {
        statusCode: 200,
        headers,
        body: {
            name: 'Bob Ross',
            imgLink: 'https://s3-alpha-sig.figma.com/img/49cf/00e4/cb4613017bd10e2cc8f3e52bff78b2d9?Expires=1608508800&Signature=SgHuBbRVy73E2kh1lz8~M2hnU1UnsS8Uv8Yij8dwNdkwbveXC9UlUgGCUVPwG5F-iO4nNERH0u1FXSxLOUqlbg0fY4GHLN~bWQvTAa46OQj66Nt~PHeqcIBd0IwKpvTadO5yT3j4-~QVvwsDi3GXTncD4piETejbA9zLoj5a5PV7TlxDlyuMyfPgtJDrBzvXaG3wWNdXhuKgQmrsUVgRI9BcEzOfIoZC1VFaiSusvv11vBYBp15H5Ffnw-wf088m3RnczDnN3wgn2R8LeXNcXP8FPLkGQhUbueJlLPJsg1Lm-LQKXqxydpiWX8g5JoPUbeTj-bUBQ~6qwdyhW7rpMw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
            level: 'pro',
            jobPosition: 'Marketing specialiist',
            national: '美國',
            mediaLinks: [
                {
                    type: 'github',
                    link: ''
                },
                {
                    type: 'linkedin',
                    link: ''
                },
                {
                    type: 'medium',
                    link: ''
                },
                {
                    type: 'fb',
                    link: ''
                }
            ],
            quotes: '這個世界到處充滿著不公平，我們能做的不僅僅是接受，還要試著做一些反抗',
            counts: [
                {
                    helpedStudents: 569,
                    comments: 1273,
                    applause: 2077,
                    contributedHR: 157
                }
            ],
            since: [
                {
                    yyyy: 2018,
                    mm: 2
                }
            ]
        }
    };


    try {
        return JSON.stringify(resObj);
    } catch(err) {
        return {
            statusCode: 500,
            headers,
            body: 'Internal Server Error'
        }
    }
}