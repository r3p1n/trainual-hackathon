export async function GET(request: Request) {
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
            "Type" : "Role",
            "Subjects" : 2
        },
        {
            "name" : "Marketing",
            "members": [],
            "Type" : "Role",
            "Subjects" : 0
        }
    ];


    return Response.json({ data })
}
