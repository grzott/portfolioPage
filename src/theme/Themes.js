import { isMobile } from "react-device-detect"

export const darkTheme = {
    color: {
        primary: '#E8DFDA', // nearly white
        secondary: '#285D9E', // blue
        focused: '#8FB99E', // light green
        error: 'red',
    },
    backgroundColor: {
        primary: '#303231', // gray
        secondary: '#252727', // dark gray
        opacity: 'rgba(48, 50, 49, 0.7)' // gray x 0.5 opacity

    },
    font: {
        primary: 'Roboto, sans-serif',
        secondary: 'Poppins, sans-serif',
    },
    size: {
        base: '16px', // rem for RWD
        big: '2.5rem',
        medium: '1.5rem',
        regular: '1.25rem',
        small: '0.75rem',
    },
    mSize: {
        big: '1.5rem',
        medium: '1rem',
        regular: '1rem',
        small: '0.5rem',
    },
    fontStyle: {
        black: '900',
        bold: '700',
        regular: '400',
    },
}

export const lightTheme = {
    color: {
        primary: '#252727', // dark gray
        secondary: '#285D9E', // blue
        focused: '#8FB99E', // light green
        error: 'red',
    },
    backgroundColor: {
        primary: '#E8DFDA', // nearly white
        secondary: '#979898', // gray
        opacity: 'rgba(232, 222, 218, 0.85)' // nearly white x0.5 opacity
    },
    font: {
        primary: 'Roboto, sans-serif',
        secondary: 'Poppins, sans-serif',
    },
    size: {
        base: '16px', // rem for RWD
        big: '2.5rem',
        medium: '1.5rem',
        regular: '1.25rem',
        small: '0.75rem',
    },
    mSize: {
        big: '1.5rem',
        medium: '1rem',
        regular: '1rem',
        small: '0.5rem',
    },
    fontStyle: {
        black: '900',
        bold: '700',
        regular: '400',
    },
}

export const pl = {
    lang: {
        nav: {
            home: 'Strona Główna',
            aboutme: 'O mnie',
            skills: 'Umiejęstności',
            projects: 'Projekty',
            contact: 'Kontakt',
        },
        text: {
            home: {
                primary: 'Jestem Grzesiek, Front-End ',
                secondary: 'Developer',
            },
            aboutme: {
                primary: 'I am contantly learning, exploring and eperimenting web developer. Open to new ideas and innovate solutios od problems.',
                secondary: 'Well organized, open minded, teamplayer with desire to explore and breake barriers. A fan of healthy life, gym, music, cinema and video game lover. ',
                tetriary: ' Interested in the entire frontned spectrum as well as explore and earn backend world.',
                quaternary: 'Sprawdź mój profil na LinkedIn oraz Gitlab:',
            },
            skills: {
                primary: 'Frontend developer with exprince building responsives websites, web apications and mobile apps.',
                secondary: 'I specialize in JavaScript (TypeScript) and have exprience with React.js (Next.js, Gatsby.js). On the client side I am proficjent in HTML, CSS, SASS. I also using React Native in my daily work.',
                tetriary: 'My development is reinforced by basic knowledge of software version control system Git.',
                quaternary: 'I use Figma also to create the graphic design of the pages',
            },
            projects: '',
            contact: {
                name: 'imię',
                email: 'e-mail',
                msg: 'wiadomość',
                btn: 'Wyślij',
                validation: {
                    req: 'Pole wymagane',
                    email: 'niepoprawny e-mail',
                    msg: 'wiadomość jest za krótka',
                    success: 'Wiadomość wysłana',
                    error: 'Przepraszam, coś poszło nie tak. Spróbuj ponownie'
                },
            },
        },
        title: {
            home: 'Hello',
            aboutme: 'O mnie',
            skills: 'Umiejęstności',
            projects: 'Projekty',
            contact: 'Kontakt',
        },
        footer: {
            text: 'Grzegorz Otto © 2020 All Rights Reserved',
        },
    },
}

export const eng = {
    lang: {
        nav: {
            home: 'Home',
            aboutme: 'About Me',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
        },
        text: {
            home: {
                primary: 'Im Grzesiek, Front-End ',
                secondary: 'Developer',
            },
            aboutme: {
                primary: 'I am contantly learning, exploring and eperimenting web developer. Open to new ideas and innovate solutios od problems.',
                secondary: 'Well organized, open minded, teamplayer with desire to explore and breake barriers. A fan of healthy life, gym, music, cinema and video game lover. ',
                tetriary: ' Interested in the entire frontned spectrum as well as explore and earn backend world.',
                quaternary: 'Check out my LinkedIn and gitlab profile:',
            },
            skills: {
                primary: 'Frontend developer with exprince building responsives websites, web apications and mobile apps.',
                secondary: 'I specialize in JavaScript (TypeScript) and have exprience with React.js (Next.js, Gatsby.js). On the client side I am proficjent in HTML, CSS, SASS. I also using React Native in my daily work.',
                tetriary: 'My development is reinforced by basic knowledge of software version control system Git.',
                quaternary: 'I use Figma also to create the graphic design of the pages',
            },
            projects: '',
            contact: {
                name: 'name',
                email: 'e-mail',
                msg: 'message',
                btn: 'Send',
                validation: {
                    req: 'Field required',
                    email: 'Invalid email address',
                    msg: 'Message is too short',
                    success: 'Messasge sent',
                    error: 'Sorry, something goes wrong. Try again.'
                },
            },
        },
        title: {
            home: 'Hello',
            aboutme: 'About Me',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
        },
        footer: {
            text: 'Grzegorz Otto © 2020 All Rights Reserved',
        },
    },
}