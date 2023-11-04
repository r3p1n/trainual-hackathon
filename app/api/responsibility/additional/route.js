export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const roleName = searchParams.get('name')

    let data = [
        "Mentoring and coaching other employees",
        "Participating in cross-functional teams and projects",
        "Representing the company at industry events and meetups",
        "Writing blog posts and articles about the company's products or services",
        "Giving talks and presentations at industry events",
        "Contributing to open source projects",
        "Volunteering for company-sponsored community service events",
        "Participating in employee resource groups",
        "Attending training and development programs",
        "Staying up-to-date on the latest trends and technologies in the industry",
        "Networking with other professionals in the field"
    ];

    if(roleName){
        data = data.filter((word) => word.toLowerCase().includes(roleName.toLowerCase()));
    }

    return Response.json({ data })
}
