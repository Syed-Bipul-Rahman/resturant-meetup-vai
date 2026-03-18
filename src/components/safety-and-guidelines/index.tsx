const sections = [
    {
        number: "01",
        title: "Be Authentic",
        intro:
            "Glicen is a place for real people and real connections.",
        points: [
            "Use your real name, age, and accurate information.",
            "Upload your own photos—no fake images, AI-generated faces, or impersonation.",
            "Do not create multiple accounts or pretend to be someone else.",
        ],
        footer: "Authenticity builds trust and keeps the community safe.",
    },
    {
        number: "02",
        title: "Be Respectful",
        intro: "Treat others the way you want to be treated.",
        points: [
            "No harassment, bullying, threats, or hate speech.",
            "No discrimination based on race, gender, sexuality, religion, disability, or appearance.",
            "No unwanted sexual content, explicit messages, or pressure for intimacy.",
            "Respect boundaries—if someone isn't interested, move on gracefully.",
        ],
        footer: "Respect is the foundation of meaningful connections.",
    },
    {
        number: "03",
        title: "Keep Conversations Safe",
        intro:
            "Glicen encourages open, friendly conversation—but safety comes first.",
        points: [
            "Do not request or share sensitive personal information (address, financial info, passwords).",
            "Do not send spam, scams, or misleading content.",
            "Do not attempt to move conversations off the app in ways that feel pressured or unsafe.",
            "Report suspicious behavior immediately.",
        ],
        footer: "Healthy communication helps everyone feel comfortable.",
    },
    {
        number: "04",
        title: "Meet Responsibly",
        intro: "Glicen is designed to bring people together in real life—safely.",
        points: [
            "Meet in public places, especially for first-time meetups.",
            "Share your plans with a friend or family member.",
            "Trust your instincts—if something feels off, cancel or leave.",
            "Use Glicen's reservation and payment tools to keep plans organized and transparent.",
        ],
        footer: "Your safety matters more than any date or meetup.",
    },
    {
        number: "05",
        title: "Use Photos & Content Appropriately",
        intro: "Profiles and messages must follow community standards.",
        points: [
            "No nudity, sexual content, or sexually suggestive photos.",
            "No violent, graphic, or disturbing images.",
            "No photos of children alone or in compromising contexts.",
            "No copyrighted or stolen content.",
        ],
        footer: "Keep your profile welcoming and safe for all users.",
    },
    {
        number: "06",
        title: "Zero Tolerance for Harmful Behavior",
        intro: "The following behaviors are strictly prohibited:",
        points: [
            "Violence, threats, or intimidation.",
            "Stalking or persistent unwanted contact.",
            "Fraud, scams, or financial manipulation.",
            "Hate speech or extremist content.",
            "Human trafficking, exploitation, or illegal activity.",
            "Using the app while under the age of 18.",
        ],
        footer:
            "We take these violations seriously and may involve law enforcement when necessary.",
    },
    {
        number: "07",
        title: "Respect Restaurants & Partners",
        intro:
            "Glicen connects people with restaurants and hospitality partners.",
        points: [
            "Honor your reservations—cancel responsibly.",
            "Follow restaurant policies, dress codes, and etiquette.",
            "Do not use reservations to harass, prank, or inconvenience businesses.",
            "Treat staff with respect at all times.",
        ],
        footer: "Your behavior reflects on the entire Glicen community.",
    },
    {
        number: "08",
        title: "Protect Your Account",
        intro: "Help keep your account secure.",
        points: [
            "Use strong passwords and keep them private.",
            "Do not share your account with others.",
            "Report unauthorized access immediately.",
        ],
        footer: "Security is a shared responsibility.",
    },
    {
        number: "09",
        title: "Reporting & Enforcement",
        intro: "We encourage users to report:",
        points: [
            "Fake profiles.",
            "Harassment or abusive behavior.",
            "Safety concerns.",
            "Suspicious or fraudulent activity.",
            "Violations of these guidelines.",
        ],
        footer:
            "Our team reviews reports and takes appropriate action, which may include warnings, content removal, temporary restrictions, or permanent bans.",
    },
    {
        number: "10",
        title: "Building a Positive Community",
        intro: "Glicen thrives when users:",
        points: [
            "Approach others with kindness.",
            "Communicate clearly and respectfully.",
            "Show up for reservations and meetups.",
            "Use the app with genuine intentions.",
            "Help keep the community safe by reporting issues.",
        ],
        footer: "Together, we create a space where real connections can grow.",
    },
];

export default function SafetyAndGuidelinesContent() {
    return (
        <div className="lg:w-[55%] mx-auto py-6 lg:py-12 bg-white px-4">
            <p className="text-gray-600 mb-4 leading-relaxed">
                Glicen is built to help people connect, meet, and enjoy realworld experiences with confidence. To keep our community safe, respectful, and welcoming, all users must follow these Community & Safety Guidelines. These apply to all interactions on the app, including profiles, messages, invitations, reservations, and inperson meetups.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
                Violations may result in warnings, content removal, or account suspension.
            </p>
            <div className="space-y-4">
                {sections.map((section) => (
                    <div
                        key={section.number}
                    >
                        {/* Header */}
                        <div className="flex items-center gap-5 mb-5">
                            <h2 className="text-xl font-semibold text-gray-900 mt-2.5">
                                {section.number}. {section.title}
                            </h2>
                        </div>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                            {section.intro}
                        </p>

                        <ul className="space-y-2 mb-5">
                            {section.points.map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-600">
                                    <span className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-black" />
                                    <span className="leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>

                        <p className="text-sm font-medium text-black italic border-t border-gray-100 pt-4">
                            {section.footer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
