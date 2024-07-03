// images
import avatar1 from '../../../../assets/images/users/avatar-1.jpg'
import avatar2 from '../../../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../../../assets/images/users/avatar-4.jpg';
import avatar4 from '../../../../assets/images/users/avatar-5.jpg';
import avatar5 from '../../../../assets/images/users/avatar-6.jpg';
import avatar6 from '../../../../assets/images/users/avatar-7.jpg';
import avatar7 from '../../../../assets/images/users/avatar-8.jpg';

export interface ContactsItemTypes {
    id: number;
    name: string;
    avatar?: string;
    position: string;
    website: string;
}

const contacts: ContactsItemTypes[] = [
    {
        id: 1,
        name: 'Abdul Hadi',
        avatar: avatar1,
        position: 'Founder',
        website: 'websitename.com',
    },
    {
        id: 2,
        name: 'Taha Yaseen',
        avatar:avatar4,
        position: 'Webdesigner',
        website: 'abcweb.com',
    },
    {
        id: 3,
        name: 'M.Huzaifa Shams',
        avatar: avatar2,
        position: 'Webdesigner',
        website: 'mywebs.com',
    },
    {
        id: 4,
        name: 'Reza Manekia',
        avatar: avatar3,
        position: 'Director',
        website: 'profileq.com',
    },
    // {
    //     id: 5,
    //     name: 'Paul Halpern',
    //     avatar: avatar5,
    //     position: 'Manager',
    //     website: 'coolweb.com',
    // },
    // {
    //     id: 6,
    //     name: 'Ricky Atwell',
    //     avatar: avatar6,
    //     position: 'Programmer',
    //     website: 'supported.com',
    // },
    // {
    //     id: 7,
    //     name: 'James Richards',
    //     position: 'Webdeveloper',
    //     website: 'website.com',
    // },
    // {
    //     id: 8,
    //     name: 'Charles Martinez',
    //     avatar: avatar7,
    //     position: 'Webdesigner',
    //     website: 'dumosite.com',
    // },
];

export { contacts };
