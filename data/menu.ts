export interface MenuItem {
    name: string
    href: string
    lg?: boolean
    description?: string
    children?: MenuItem[]
}

export const services: MenuItem[] = [
    {
        name: 'Corporate photography and videography',
        href: '/services/corporate-photography-and-videography',
        description:
            'We specialize in corporate photography and videography. We are a team of professional photographers and videographers who work together to create stunning visuals for corporate clients.',
    },
    {
        name: 'Ecommerce photography',
        href: '/services/ecommerce-photography',
        description:
            'We specialize in ecommerce photography. We are a team of professional photographers who work together to create stunning visuals for ecommerce clients.',
    },
    {
        name: 'Products photography and videography',
        href: '/services/products-photography-and-videography',
        description:
            'We specialize in products photography and videography. We are a team of professional photographers and videographers who work together to create stunning visuals for products clients.',
    },
    {
        name: 'Corporate headshot and corporate profile shoot',
        href: '/services/corporate-headshot-and-corporate-profile-shoot',
        description:
            'We specialize in corporate headshot and corporate profile shoot. We are a team of professional photographers who work together to create stunning visuals for corporate clients.',
    },
    {
        name: 'Interior photography and videography',
        href: '/services/interior-photography-and-videography',
        description:
            'We specialize in interior photography and videography. We are a team of professional photographers and videographers who work together to create stunning visuals for interior clients.',
    },
    {
        name: "Model's Portfolio shoot",
        href: '/services/model-s-portfolio-shoot',
        description:
            "We specialize in model's portfolio shoot. We are a team of professional photographers who work together to create stunning visuals for model's clients.",
    },
    {
        name: 'Products ad shoot',
        href: '/services/products-ad-shoot',
        description:
            'We specialize in products ad shoot. We are a team of professional photographers who work together to create stunning visuals for products ad clients.',
    },
    {
        name: 'Outdoor fashion shoot',
        href: '/services/outdoor-fashion-shoot',
        description:
            'We specialize in outdoor fashion shoot. We are a team of professional photographers who work together to create stunning visuals for outdoor fashion clients.',
    },
    {
        name: '360 video shoot',
        href: '/services/360-video-shoot',
        description:
            'We specialize in 360 video shoot. We are a team of professional photographers who work together to create stunning visuals for 360 video clients.',
    },
    {
        name: 'Event shoot',
        href: '/services/event-shoot',
        description:
            'We specialize in event shoot. We are a team of professional photographers who work together to create stunning visuals for event clients.',
    },
    {
        name: 'Wedding photography and videography',
        href: '/services/wedding-photography-and-videography',
        description:
            'We specialize in wedding photography and videography. We are a team of professional photographers and videographers who work together to create stunning visuals for wedding clients.',
    },
    {
        name: 'Video production',
        href: '/services/video-production',
        description:
            'We specialize in video production. We are a team of professional videographers who work together to create stunning visuals for video clients.',
    },
]

export const work: MenuItem[] = [
    {
        name: 'Photography',
        href: '/work/photography',
        description:
            'We specialize in photography. We are a team of professional photographers who work together to create stunning visuals for clients.',
    },
    {
        name: 'Videography',
        href: '/work/videography',
        description:
            'We specialize in videography. We are a team of professional videographers who work together to create stunning visuals for clients.',
    },
    {
        name: 'Campaigns',
        href: '/work/campaigns',
        description:
            'We specialize in campaigns. We are a team of professional photographers and videographers who work together to create stunning visuals for clients.',
    },
]

export const mainMenu: MenuItem[] = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'Work',
        href: '/work',
        children: work,
    },
    {
        name: 'Services',
        href: '/services',
        lg: true,
        children: services,
    },
    {
        name: 'About',
        href: '/about',
    },
    {
        name: 'Clients',
        href: '/clients',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
]
