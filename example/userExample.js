export default userExample = {
    name: "Natali Romanova",
    email: "email@example.com",
    avatar: require('../assets/img/userExample.jpg'),
    posts: [
        {
            id: 1,
            img: require('../assets/img/postImgExample1.jpg'),
            title: "Ліс",
            comments: [],
            likes: 0,
            location: "Ivano-Frankivs'k Region, Ukraine",
        },
        {
            id: 2,
            img: require('../assets/img/postImgExample2.jpg'),
            title: "Захід на Чорному морі",
            comments: [
                {
                    id: 1,
                    author: require('../assets/img/exampleAvatar.jpg'),
                    text: "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
                    date: "09 червня, 2020 | 08:40",
                },
                {
                    id: 2,
                    author: this.avatar,
                    text: "A fast 50mm like f1.8 would help with the bokeh. I’ve been using primes as they tend to get a bit sharper images.",
                    date: "09 червня, 2020 | 09:14",
                },
                {
                    id: 3,
                    author: require('../assets/img/exampleAvatar.jpg'),
                    text: "Thank you! That was very helpful!",
                    date: "09 червня, 2020 | 09:20",
                },
            ],
            likes: 200,
            location: "Ukraine",
        },
        {
            id: 3,
            img: require('../assets/img/postImgExample3.jpg'),
            title: "Старий будиночок у Венеції",
            comments: [],
            likes: 200,
            location: "Italy",
        },
    ]
};