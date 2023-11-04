export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const roleName = searchParams.get('name')

    let data = [
        "sales","c++","c#","Gain expertise of product offerings","Learn company policies and procedures","Follow the guidelines set in the employee handbook",
        "Measure project performance against goals","Report project progress to stakholders","Establish relationships with third-party vendors"
    ];

    if(roleName){
        data = data.filter((word) => word.toLowerCase().includes(roleName.toLowerCase()));
    }

    return Response.json({ data })
}
