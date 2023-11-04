export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const membersName = searchParams.get('name')

    let data = [
        {
            "name" : "Andrii Holova"
        },
        {
            "name" : "Kalinin Kostyantin"
        },
        {
            "name" : "Oleksandr Vatskovskyi"
        },
        {
            "name" : "Repin Dima"
        },
    ];

    if(membersName){
        data = data.filter((word) => word.name.toLowerCase().includes(membersName.toLowerCase()));
    }

    return Response.json({ data })
}
