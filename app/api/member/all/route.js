export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const membersName = searchParams.get('name')

    let data = [];
    if (process.env.mock)
        data = [
            {
                "id" : 1,
                "name" : "Andrii Holova",
                "avatar" : null,
                "title": "QA",
            },
            {
                "id" : 2,
                "name" : "Kalinin Kostyantin",
                "avatar" : null,
                "title": "Designer",
            },
            {
                "id" : 3,
                "name" : "Oleksandr Vatskovskyi",
                "avatar" : null,
                "title": "PM",
            },
            {
                "id" : 4,
                "name" : "Repin Dima",
                "avatar" : null,
                "title": "Back Dev",
            },
        ];

    if (!process.env.mock){
        const res = await fetch(process.env.url_trainual+'/'+process.env.account_trainual+'/ajax/users/fetch_users', {
            method: 'GET',
            headers: {
              'Accept-Encoding': 'gzip, deflate, br',
              'Cookie': process.env.cookie
            },
          });
    
        let data_response = await res.json();
        data_response = data_response.data.users;

        data_response.forEach(el => {
            data.push({id : el.id, name : el.name, title : el.title, avatar : el.avatar});          
        });
    }

    if(membersName){
        data = data.filter((word) => word.name.toLowerCase().includes(membersName.toLowerCase()));
    }

    return Response.json({ data })
}
