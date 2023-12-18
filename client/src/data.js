import { v4 as uuidv4 } from 'uuid';



export const cardData = [
    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/PJFZRm7v/10694340-463343210471369-8153309622589055542-o.jpg",
            "https://i.postimg.cc/50dsPMzW/1-Monsoon-Buster.jpg",
            "https://i.postimg.cc/15jcCQx7/10-Pirate-Challenge.jpg",
            "https://i.postimg.cc/ZnjjKBMJ/3-Thunder-River.jpg",
            "https://i.postimg.cc/Ss6D3tL2/6-Whirlwind-Escape.jpg",
            "https://i.postimg.cc/PfMSM9r0/8-Island-of-Treasures.jpg",
            "https://i.postimg.cc/KzftnXrN/sa-about.jpg"
        ],
        title:"Wet World Water Park Shah Alam",
        desc:"From slippery slides and tube rides to pirate-themed splash pools, Malaysia's largest water park chain has much to offer and your ticket includes full access to all the rides and attractions.",
        type:"bookTypeOne",
        pricing: {
            adult:32,
            child:29,
            senior:29
        },

    },
    
]






export const cardHighLightsDetails = [
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/YC0D0R7Z/2-Super-Hurricane.jpg",
        title:"Super Hurricane",
        desc:"Experience the whirlwind with Super Hurricane! Spiral down an exciting slide into a giant bowl for a thrilling ride like no other!"
    },
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/ZnjjKBMJ/3-Thunder-River.jpg",
        title:"Thunder River",
        desc:"Dive into excitement with Thunder River! Our thrilling water slides on a ship guarantee a splash-filled adventure. Experience the rush in a brief yet unforgettable ride!"
    },  
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/50dsPMzW/1-Monsoon-Buster.jpg",
        title:"Monsoon Buster",
        desc:"Take on Monsoon Buster, a dynamic slide with thrilling ups and downs for an adrenaline-packed adventure!"
    },   
]



export const thingsTodo = [
    {
        id: uuidv4(),
        desc:"Wet World Water Park Shah Alam boasts a total of 13 rides and attractions. With its expansive area, exhilarating rides, and numerous facilities, it proves to be an excellent destination not only for a family retreat but also a convenient choice for team-building activities.",
        image: "https://i.postimg.cc/4NNB2PYy/5-Kiddy-Typoon-Lagoon.jpg"
    },
    {
        id: uuidv4(),
        desc:"Experience a day filled with exciting water activities at Shah Alam's water park, dedicated to ensuring enjoyable moments for all. ",
        image: "https://i.postimg.cc/PJFZRm7v/10694340-463343210471369-8153309622589055542-o.jpg"
    },
    {
        id: uuidv4(),
        desc:"Wet World Water Park Shah Alam stands as one of Selangor, Malaysia's premier water parks and is recognized as the largest network of waterparks in the country.",
        image: "https://i.postimg.cc/rw7jmLQR/wet-world-shah-alam.jpg"
    },
    
]


export const addQues = [
    {
        id: uuidv4(),
        ques:"Operating Hours ?",
        ans:[
            "Thursday - Tuesday : 10am - 6pm", 
            "(Closed on Wednesday EXCEPT during Malaysia public holidays and school holidays)"
        ]
    },
    {
        id: uuidv4(),
        ques:"For Your Concern",
        ans:[
            "Adult age is 13 to 59 years old.",
            "Child age is  3 to 12 years old.",
            "Senior Citizen age 60 and above."
        ]
    },
    {
        id: uuidv4(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased"
        ]
    },
    {
        id: uuidv4(),
        ques:"Redemption Guide",
        ans:["Upon arrival, show your ticket/e-voucher at the counter"]
    },
    {
        id: uuidv4(),
        ques:"Ticket Validity",
        ans:["You may use the tickets within 30 days from purchased date"]
    },
]



export const homeFAQ = [
    {
        id: uuidv4(),
        ques:"Can I bring food inside Wet World Park Shah Alam?",
        ans:"No. Food and drinks is prohibited inside."
    },
    {
        id: uuidv4(),
        ques:"Does my 2 years old baby need to buy ticket to enter Wet World Park Shah Alam?",
        ans:"No, Child below 90cm can enter for FREE."
    },
    {
        id: uuidv4(),
        ques:"⦁	How long can I stay inside Wet World Park Shah Alam?",
        ans:"You may stay as long as you want, no time limit."
    },
    {
        id: uuidv4(),
        ques:"⦁	When does Wet World Park Shah Alam close?",
        ans:"Wet World Park Shah Alam is close every Wednesday except Public Holiday and School Holiday."
    },
    {
        id: uuidv4(),
        ques:"Does my ticket includes Locker and Tubes?",
        ans:"No, its not included, but there are stations everywhere inside the park where guest may rent the items needed."
    },
]


export const helpCenterBookingFAQ = [
    {
        id: uuidv4(),
        ques:"How do I make a booking on Malaysia Experience?",
        ans:"Making a booking is easy! Simply browse through our experiences, select the one you love, choose your preferred date and time, and follow the easy booking steps. Your adventure in Malaysia is just a few clicks away!"
    },
    {
        id: uuidv4(),
        ques:"Is it safe to book through Malaysia Experience?",
        ans:"Absolutely! We prioritize your safety and security. Our booking platform uses industry-standard encryption to safeguard your personal information, ensuring a worry-free booking experience"
    },
    {
        id: uuidv4(),
        ques:"Can I book for a group?",
        ans:"Of course! We welcome group bookings. When selecting an experience, you can specify the number of participants, and our system will guide you through the process to ensure everyone has a fantastic time."
    },
]

export const helpCenterCancellationFAQ = [
    {
        id: uuidv4(),
        ques:"What is the cancellation policy?",
        ans:"We understand plans can change. Our cancellation policy varies depending on the experience and the timing of your cancellation. You can find specific details on the experience page during the booking process."
    },
    {
        id: uuidv4(),
        ques:"How do I cancel or request a refund?",
        ans:"If you need to cancel, log in to your Malaysia Experience account, go to your bookings, and follow the cancellation instructions. Refund eligibility depends on the cancellation policy of the specific experience. We're here to help, so feel free to reach out to our customer support for assistance."
    },
    {
        id: uuidv4(),
        ques:"What happens if the experience is canceled by Malaysia Experience?",
        ans:"In the rare event that we have to cancel an experience, you will be notified promptly, and a full refund will be processed. Your satisfaction and safety are our top priorities."
    },
]


export const termsandconditiondata = [
    {
        id: uuidv4(),
        title: "Limited License",
        list:["You are granted a non-exclusive, non-transferable license to access and use our Website in accordance with these Terms."]
    },
    {
        id: uuidv4(),
        title: "Our Relationship",
        list:["We serve as an intermediary for purchasing goods/services and do not create any other relationship with users"]
    },
    {
        id: uuidv4(),
        title: "Legal Compliance:",
        list:["You agree to comply with all applicable laws and regulations. We may take appropriate action for non-compliance."]
    },
    {
        id: uuidv4(),
        title: "Eligibility and Registration",
        list:["You certify being at least 18 years old or having parental permission if aged 13 to 18. Registration in violation of these terms is unauthorized."]
    },
    {
        id: uuidv4(),
        title: "DMCA Compliance",
        list:["If you believe your work is infringed, provide required information to support@travelvago.com."]
    },
    {
        id: uuidv4(),
        title: "Intellectual Property",
        list:["Our trademarks and Website content are protected. Your use does not grant ownership rights."]
    },
    {
        id: uuidv4(),
        title: "Linking",
        list:["You may link to our Website, following guidelines provided."]
    },
    {
        id: uuidv4(),
        title: "Links to Other Websites",
        list:["We provide links for convenience, but we do not endorse or have an affiliation with Third Party Websites."]
    },
    {
        id: uuidv4(),
        title: "Data Protection",
        list:["We collect and use personal data as necessary. More details in our privacy policy.https://www.travelvago.com/privacy-policy"]
    },
    {
        id: uuidv4(),
        title: "Warranty Disclaimer",
        list:["We reserve the right to change Website content without notice. We are not responsible for errors, interruptions, or technical malfunctions."]
    },
    {
        id: uuidv4(),
        title: "Limitation of Liability",
        list:["We and our affiliates are not liable for any loss or damage resulting from Website use."]
    },
    {
        id: uuidv4(),
        title: "Arbitration",
        list:["Any legal controversy will be settled by binding arbitration. Each party bears one-half of arbitration fees."]
    },
]