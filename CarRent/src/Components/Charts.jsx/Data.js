import benzProfile from "../../../assets/Profile/benzProfile.jpg";
import hondaProfile from "../../../assets/Profile/hondaProfile.jpeg";
import kibsProfile from "../../../assets/Profile/kibz.png";
import luxuryRentalsProfile from "../../../assets/Profile/luxury.jpg";
import carEnthusiastsProfile from "../../../assets/Profile/fleet.webp";
import user from "../../../assets/Profile/user.png";
import amos from "../../../assets/Profile/amos.jpeg";

export const data = [
  {
    id: "chat1",
    groupName: "Amos Kyalo",
    lastText:
      " Of course! What type of car are you looking for? We have a wide range of options available, from compact cars to luxury sedans and SUVs. How many people will be traveling with you, and do you have any specific preferences?",
    lastTextTime: "09:30 am",
    unreadTexts: 2,
    profile: amos,
    chats: [
      {
        type: "send",
        message: "Hey there, how have you been?",
      },
      {
        type: "send",
        message: "I'm looking for a Honda civic",
      },
      {
        type: "received",
        message:
          "Okay, let me see if I can help you. When do you need it exactly? I'm currently busy with another guy here looking for a Range rover",
      },
      {
        type: "Send",
        message: "Let me know when you are done so that we can talk..."
      },
      {
        type: "received",
        message: "🤜"
      },
      {
        type: "received",
        message: "Hey man, I'm done here... can we talk or I can call?"
      },
      {
        type: "send",
        message: "I'm in a meeeting currently, can we just chat?"
      },
      {
        type: "received",
        message: "Okay, thats very much okay"
      }
    ],
  },
  // {
  //   id: "chat2",
  //   groupName: "Honda Nerds",
  //   lastText: "Just bought a new Honda Civic. Loving it so far!",
  //   lastTextTime: "09:30 am",
  //   unreadTexts: 2,
  //   profile: hondaProfile,
  //   chats: [
  //     {
  //       type: "send",
  //       message: "Hey there, how have you been?",
  //     },
  //     {
  //       type: "send",
  //       message: "I'm looking for a Honda civic",
  //     },
  //     {
  //       type: "received",
  //       message:
  //         "We rented all of them...",
  //     },
  //     {
  //       type: "send",
  //       message: "😂😂😂😂😂😂😂",
  //     },
  //   ],
  // },
  // {
  //   id: "chat3",
  //   groupName: "Benz Boys Club",
  //   lastText:
  //     "Hey guys, just got my hands on a brand new E250. Who's up for a ride?",
  //   lastTextTime: "12:15 pm",
  //   unreadTexts: 0,
  //   profile: benzProfile,
  //   chats: [
  //     {
  //       type: "received",
  //       message: "Hey guys, just got my hands on a brand new E250. Who's up for a ride?",
  //     },
  //     {
  //       type: "send",
  //       message: "For how much?",
  //     },
  //     {
  //       type: "received",
  //       message:
  //         "Why are you asking? 🙂🙂",
  //     },
  //   ],
  // },
  // {
  //   id: "chat4",
  //   groupName: "Kibz Deals",
  //   lastText:
  //     "I will be throwing a party for all my best clients. We will have exciting deals and offers!",
  //   lastTextTime: "05:20 pm",
  //   unreadTexts: 10,
  //   profile: kibsProfile,
  //   chats: [
  //     {
  //       type: "send",
  //       message: "Hey there, how have you been?",
  //     },
  //     {
  //       type: "send",
  //       message: "I'm looking for a Honda civic",
  //     },
  //     {
  //       type: "received",
  //       message:
  //         "I will be throwing a party for all my best clients. We will have exciting deals and offers!",
  //     },
  //   ],
  // },
  // {
  //   id: "chat5",
  //   groupName: "Ian Smith",
  //   lastText:
  //     "It will be just me and my partner. We're looking for something comfortable and stylish, preferably a luxury sedan.",
  //   lastTextTime: "02:30 pm",
  //   unreadTexts: 1,
  //   profile: user,
  //   chats: [
  //     {
  //       type: "send",
  //       message: "Hey there, how have you been?",
  //     },
  //     {
  //       type: "send",
  //       message: "I'm looking for a Honda civic",
  //     },
  //     {
  //       type: "received",
  //       message:
  //         "It will be just me and my partner. We're looking for something comfortable and stylish, preferably a luxury sedan.",
  //     },
  //   ],
  // },
  // {
  //   id: "chat6",
  //   groupName: "Car Enthusiasts",
  //   lastText:
  //     " Hi! I'm interested in renting a car for a weekend getaway. Do you have any recommendations?",
  //   lastTextTime: "02:30 pm",
  //   unreadTexts: 5,
  //   profile: carEnthusiastsProfile,
  //   chats: [
  //     {
  //       type: "send",
  //       message: "Hey there, how have you been?",
  //     },
  //     {
  //       type: "send",
  //       message: "I'm looking for a Honda civic",
  //     },
  //     {
  //       type: "received",
  //       message:
  //         " Hi! I'm interested in renting a car for a weekend getaway. Do you have any recommendations?",
  //     },
  //   ],
  // },
  // {
  //   id: "chat7",
  //   groupName: "Luxury Car Rentals",
  //   lastText:
  //     "Introducing our new fleet of luxury cars available for rent. Experience the ultimate driving pleasure!",
  //   lastTextTime: "10:45 am",
  //   unreadTexts: 0,
  //   profile: luxuryRentalsProfile,
  //   chats: [
  //     {
  //       type: "send",
  //       message: "Hey there, how have you been?",
  //     },
  //     {
  //       type: "send",
  //       message: "I'm looking for a Honda civic",
  //     },
  //     {
  //       type: "received",
  //       message:
  //     "Introducing our new fleet of luxury cars available for rent. Experience the ultimate driving pleasure!",
  //     },
  //   ],
  // },
];
