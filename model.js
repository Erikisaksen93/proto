const model = {
    adminLogin: {
        username: '',
        password: '*******',
    },
    createNewPoll: {
        question: 'Spørsmål',
        alt: ['Alt1', 'Alt2', 'Alt3', 'Alt4'],
        allowUserAlt: true,
    },
    changePoll: [
        {
            id: 1,
            endPoll: true,
            pollName: 'Meningsmåling 1',
            pollQuestion: 'pizza til lunsj?',
            changePoll: false,
        },
        {
            id: 2,
            endPoll: false,
            pollName: 'Meningsmåling 2',
            pollQuestion: 'dra tidlig hjem på fredag?',
            changePoll: false,
        },
        {
            id: 3,
            endPoll: false,
            pollName: 'Meningsmåling 3',
            pollQuestion: 'innkjøp av playstation til kontoret',
            changePoll: false,
        },
    ],
    checkResult: [
        {
            pollName: 'Meningsmåling 1',
            pollResult: [5, 9, 8, 4],
        },
        {
            pollName: 'Meningsmåling 2',
            pollResult: [5, 1, 3, 2],
        },
        {
            pollName: 'Meningsmåling 3',
            pollResult: [1, 9, 9, 7],
        },
    ],
    userPoll: [
        {
            pollQuestion: 'Innkjøp av PS5 til kontoret?',
            alt: [
                {
                    alt1: 'ja',
                    checked: true,
                    userAlt: false,
                },
                {
                    alt2: 'nei',
                    checked: false,
                    userAlt: false,
                },
                {
                    alt3: 'annet',
                    checked: false,
                    userAlt: true,
                },
            ],
        },
        {
            pollQuestion: 'Dra tidlig hjem på fredag?',
            alt: [
                {
                    alt1: 'ja',
                    checked: false,
                    userAlt: false,
                    checkUserAlt: '',
                },
                {
                    alt2: 'nei',
                    checked: true,
                    userAlt: false,
                    checkUserAlt: '',
                },
                {
                    alt3: 'annet',
                    checked: false,
                    userAlt: false,
                    checkUserAlt: '',
                    
                },
            ],
        }

    ]
};