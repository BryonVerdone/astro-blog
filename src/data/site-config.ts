export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Bryon Verdone',
    subtitle: 'IT Professional',
    description: 'My personal blog site',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        // {
        //     text: 'About',
        //     href: '/about'
        // },
        {
            text: 'Contact',
            href: '/contact'
        }
        // {
        //     text: 'Terms',
        //      href: '/terms'
        // },
        // {
        //     text: 'Download theme',
        //     href: 'https://github.com/JustGoodUI/dante-astro-theme'
        // }
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/bryon-verdone/'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/bryonverdone'
        }
    ],
    hero: {
        title: 'Thanks for stopping by',
        text: "I'm **Bryon**, an IT professional with the ability to breakdown problems and communicate effectively to both technical and non technical individuals. When talking with individuals I’m able to ask the right questions to better understand what they need and how to implement technology into their current workflows to increase their performance. I have experience in many different IT domains including end user support, virtualization and network troubleshooting. I’ve worked with many different enterprise platforms such as Microsoft 365, Jamf, and Google workspaces. On these platforms I’ve managed and created various policies to configure and promote efficient workflows for end users and secure and maintain systems.",
        image: {
            src: '/portfolio-small.JPG',
            alt: 'A person sitting at a desk in front of a computer'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },

    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
