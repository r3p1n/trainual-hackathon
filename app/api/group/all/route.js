export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    let data = [];
    if (process.env.mock)
        data = [
            {
                "id" : 1,
                "name" : "Account Executive",
                "members": [
                    {
                        "id": 239206,
                        "name": "Andrii Holovan",
                        "title": "work",
                        "__typename": "User",
                        "avatar": null
                    }
                ],
                "type" : "Role",
                "subjects" : 2
            },
            {
                "id" : 2,
                "name" : "Marketing",
                "members": [],
                "type" : "Role",
                "subjects" : 0
            }
        ];

    if (!process.env.mock){
        const res = await fetch(process.env.url_trainual+'/'+process.env.account_trainual+'/ajax/groups/fetch_groups', {
            method: 'GET',
            headers: {
              'Accept-Encoding': 'gzip, deflate, br',
              'Cookie': process.env.cookie
            },
          });
    
        let data_response = await res.json();
        data_response = data_response.data;

        data_response.forEach(el => {
            data.push({id : el.id, name : el.name, type : el.__typename, subjects : el.user_count, members : el.users});          
        });
    }


    if(id){
        data = data.find(el => el.id == id);
    }
    
    return Response.json({ data })
    
}
