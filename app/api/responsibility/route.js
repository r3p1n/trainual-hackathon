export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const roleNames = searchParams.get('name') || '';

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
        ],
        "Architect": [
            "Designs buildings and other structures",
            "Ensures that projects meet building codes and regulations",
            "Oversees the construction process"
        ],
        "Superintendent": [
            "Manages the construction process",
            "Coordinates the work of subcontractors",
            "Ensures that projects are completed on time and within budget"
        ],
        "Foreman": [
            "Supervises a team of workers",
            "Ensures that workers follow safety procedures and complete their tasks according to the plan"
        ],
        "Worker": [
            "Performs construction tasks as directed by the foreman",
            "Follows safety procedures and completes tasks efficiently and accurately"
        ],
        "Civil engineer": [
            "Designs and constructs civil infrastructure projects",
            "Oversees the construction process and ensures that projects meet all safety and engineering standards"
        ],
        "Accountant": [
            "Maintains financial records and prepares financial statements",
            "Tracks income and expenses",
            "Pays bills and invoices",
            "Prepares tax returns"
        ],
        "Sales manager": [
            "Generates leads and develops relationships with potential clients",
            "Makes presentations and negotiates contracts",
            "Oversees the sales process and ensures that clients are satisfied"
        ],
        "Administrator": [
            "Provides administrative support to the sales team and other departments",
            "Answers and directs phone calls",
            "Schedules appointments and meetings",
            "Processes paperwork and maintains files"
        ],
    };

    let additional_data = [
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
        "Networking with other professionals in the field",
        "Safety",
        "Quality control",
        "Sustainability",
        "Innovation",
    ];


    roleNames.split(',').forEach(el => {
        let responsibilie = data[el];
        if (responsibilie)
            responsibilies = responsibilies.concat(responsibilie);
    });

    responsibilies = responsibilies.concat(additional_data);

    return Response.json({ responsibilies })
}
