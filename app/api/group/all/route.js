export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    let data = [
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

    if(id){
        data = data.find(el => el.id == id);
    }
    
    return Response.json({ data })
}
