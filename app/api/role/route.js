export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const roleName = searchParams.get('name')

    let data = [
        "PM", "frontend", "backend", "designer", "BA", "QA"
    ];

    if(roleName){
        data = data.filter((word) => word.toLowerCase().includes(roleName.toLowerCase()));
    }

    return Response.json({ data })
}
