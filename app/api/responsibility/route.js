export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const roleNames = searchParams.get('name')

    let responsibilies = [];

    let data = {
        "PM" : [
            "Understand users and market",
            "Develop product strategy",
            "Plan and manage development",
            "Interact with teams",
            "Launch and adopt product",
            "Gather feedback and make changes"
        ],

        "frontend" : [
            "Develop UI code",
            "Use HTML, CSS, and JS",
            "Implement wireframes",
            "Test user interface"
        ],
        "backend" : [
            "Develop back-end code",
            "Use Java, Python, or Go",
            "Ensure interaction with FE",
            "Test back-end",
        ],
        "designer" : [
            "Develop wireframes",
            "Use graphic design software",
            "Collaborate with PM, FE, and BE",
            "Test design"
        ],
        "BA" : [
            "Gather business requirements",
            "Develop requirements documentation",
            "Collaborate with all teams",
            "Test requirements"
        ],
        "QA" : [
            "Test product for errors",
            "Use a variety of testing methods",
            "Collaborate with all teams to fix defects"
        ]

    };


    roleNames.split(',').forEach(el => {
        let responsibilie = data[el];
        if (responsibilie)
            responsibilies = responsibilies.concat(responsibilie);
    });

    return Response.json({ responsibilies })
}
