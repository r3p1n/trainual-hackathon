export async function GET(request) {
    let data = [
        {
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
            "name" : "Marketing",
            "members": [],
            "type" : "Role",
            "subjects" : 0
        }
    ];


    return Response.json({ data })
}
