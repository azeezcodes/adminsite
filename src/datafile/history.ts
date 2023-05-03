import twitter from "/svg/twitter.svg"

 interface history{
    id: number
    img?: string;
    postContent?: string;
    media?: string;
    impression?: number;
    time?: string;
}

export const data: history[] = [
   {
      id: 1,
      img: "/svg/twitter.svg",
      postContent:
         "Lorem ipsum dolor sit amet consectetur. Amet sed nullam vitae purus nisi.....",
      media: "image",
      impression: 436,
      time: "July 19, 2020 11:22 PM",
   },
   {
      id: 2,
      img: "/svg/linkedin.svg",
      postContent:
         "Lorem ipsum dolor sit amet consectetur. Amet sed nullam vitae purus nisi.....",
      media: "image",
      impression: 836,
      time: "July 5, 2020 09:17 AM",
   },
   {
      id: 3,
      img: "/svg/instagram.svg",
      postContent:
         "Lorem ipsum dolor sit amet consectetur. Amet sed nullam vitae purus nisi.....",
      media: "video",
      impression: 356,
      time: "July 7, 2020 09:17 AM",
   },
   {
      id: 4,
      img: "/svg/instagram.svg",
      postContent:
         "Lorem ipsum dolor sit amet consectetur. Amet sed nullam vitae purus nisi.....",
      media: "image",
      impression: 596,
      time: "July 27, 2020 09:17 AM",
   },
   {
      id: 5,
      img: "/svg/linkedin.svg",
      postContent:
         "Lorem ipsum dolor sit amet consectetur. Amet sed nullam vitae purus nisi.....",
      media: "video",
      impression: 956,
      time: "June 7, 2020 09:17 AM",
   },
   {
      id: 6,
      img: "/svg/facebook.svg",
      postContent:
         "Lorem ipsum dolor sit amet consectetur. Amet sed nullam vitae purus nisi.....",
      media: "video",
      impression: 106,
      time: "June 7, 2020 09:17 AM",
   },
   {
      id: 7,
      img: "/svg/twitter.svg",
      postContent:
         "Lorem ipsum dolor sit amet consectetur. Amet sed nullam vitae purus nisi.....",
      media: "video",
      impression: 286,
      time: "July 7, 2020 09:17 AM",
   },
   {
      id: 8,
      img: "/svg/facebook.svg",
      postContent:
         "Lorem ipsum dolor sit amet consectetur. Amet sed nullam vitae purus nisi.....",
      media: "video",
      impression: 456,
      time: "July 7, 2020 09:17 AM",
   },
];