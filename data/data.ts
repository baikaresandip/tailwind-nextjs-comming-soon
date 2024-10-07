const currentYear = new Date().getFullYear();
const data = {
    sitename: "Sweat It Out",
    sitetagline: "✨ AI powered workout wingman! ✨",
    siteurl: "https://trysweat.fit",
    sitelogo: "",
    title: "Coming Soon!",
    description: "gearing up to be your smart fitness co-pilot 🚀 crush your goals with balanced workouts 🏋️‍♂️ and perfect meal plans. get ready to sweat smarter, not harder✨",
    newsletterheading: "Stay tuned for our live updates!",
    copyrightText: `Copyright © ${currentYear} | Design and Developed By &nbsp;<a target="_blank" class="no-underline md:underline" href="https://techyaditya.xyz">Aditya Kaushik</a>`,
    socialIconsHeading: "Follow Us 📣",
    hideSubscribeForm: false, // make true to disable subscription form 
    socialIcons: [
        {
            icon: "github",
            link: "https://github.com/97k",
        },
        {
            icon: "x",
            link: "https://x.com/think_ad",
        },
        {
            icon: "linkedIn",
            link: "https://www.linkedin.com/in/adityakaushik98/",
        },
    ],
    hide :{
        subscribeForm: false, // make true to disable subscription form         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
