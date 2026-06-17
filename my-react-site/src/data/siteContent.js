export const siteContent = {
  nav: {
    homeLabel: 'Jeffrey Lim',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  hero: {
    eyebrow: 'Biomedical Engineer | Machine Learning',
    title: 'Jeffrey Lim',
    subtitle:
      "Hi! I'm Jeff, and I'm a biomedical engineer based in Guelph, Ontario, with a background in biomechanics, medical devices, and machine learning. My interets lie in integrating my machine learning knowledge to solve real-world problems in the biomechanics and/or medical devices spaces. I am currently finishing up my MASc program at the University of Guelph in Biomedical Engineering with a specialization in Artificial Intelligence (with the Vector Institute). ",
    secondaryCta: 'See Work' ,
    },
  features: {
    title: 'Portfolio',
    items: [
      {
        title: 'Clear Message',
        description:
          'Write one sentence explaining what your site does and who it is for.',
      },
     
    ],
  },
  portfolioHeader: {
    title: 'Portfolio',
    subtitle:
      "Here are some of my personal and academic projects I have worked on. Click on each for more details!",
    eyebrow: '',
    ctaLabel: 'See all projects',
    ctaHref: '/projects.html',
  },
  portfolioItems: [
    { title: 'Hand-Arm Vibration Identification', description: 'Model using regression and classification techniques to predict which tool is being used and total vibration exposure according to ISO-5349-1', link: 'https://github.com/jefflim201/handarmvibration' },
    { title: 'Bioplastics Research Article', description: 'Published journal article in material science journal on corn-based fillers in biocomposite plastics', link: 'https://doi.org/10.1016/j.jcomc.2022.100301' },
    { title: 'Low-Profile Ankle Brace', description: 'Biomedical Undergraduate capstone project, developing a 3D-printed low-profile ankle brace', link: '/capstonePoster.jpg' },
    { title: 'A-Maize-Ing BioBlisters', description: 'Biodegradable, plant-based alternative to difficult-to-recycle blister packs', link: 'https://sites.google.com/view/maizebioblister/home' },
    { title: 'Tootyr (Tootor) Website Project', description: 'Developed new onboarding and subscription functionality using Javascript and HTML for education charity website', link: 'https://www.tootor.ca/' },
    { title: 'Lego Solidworks Project', description: 'Video showing assembly of a LEGO model built using SolidWorks.', link: 'https://youtu.be/YyBHEdJhO60' },
    { title: 'Ontario Biomechanics Conference Presentation', description: 'Poster detailing a machine learning approach to analyze pre-collected riveting hammer vibration data from NIOSH.', link: '' },
    { title: 'World Congress of Biomechanics Presentation', description: 'In-progress work looking at statistical correlations between tool vibration, wrist vibration, and applied forces while using common power tools', link: '' },
  ],
  contact: {
    eyebrow: 'Biomedical Engineer | Machine Learning',
    title: 'Contact Info',
    subtitle: "Feel free to contact me using the info below or click the buttons",
    Resume: '/Lim_Jeffrey_Resume_PortfolioVersion.pdf',
    GitHub: 'https://github.com/jefflim201',
    linkedin: 'https://www.linkedin.com/in/jeffreylim201',
    primaryCtaLabel: 'Resume',
    secondaryCtaLabel: 'GitHub',
  },
  footer: {
    text: 'Built by Jeffrey Lim using React and Vite',
  },
  cssSections: [

  ],
}
