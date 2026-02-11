import { Star } from 'lucide-react';
import './Trust.css';

const Trust = () => {
    const reviews = [
        {
            name: "Mohammad Altaf",
            car: "Audi Owner",
            text: "If you own an Audi and need repairs, RPM Auto Garage is the place to go. Their professionalism and attention to detail are unmatched. Sanjay Wattal is excellent with communication, and Anil Fernandes leads an engineering team that knows Audi inside out.",
            stars: 5
        },
        {
            name: "Stelvin Rodrigues",
            car: "BMW Owner",
            text: "I had a great experience at RPM Auto Garage! They quickly diagnosed and fixed the issue with my BMW, and the team was very professional. A big thank you to Anil Fernandes in Operations & Engineering for ensuring everything was seamless.",
            stars: 5
        },
        {
            name: "Maroof Farooqui",
            car: "Mercedes C43 Owner",
            text: "The most honest mechanic I’ve seen in Dubai great service, extremely knowledgeable and is not money oriented. He will tell you the true and will never overcharge like any other garbage I’ve been in Dubai for 6 years. I am now so happy for finding Mr Sajjad’s and his team.",
            stars: 5
        },
        {
            name: "Ejaz",
            car: "Car Owner",
            text: "RPM Auto Garage LLC provides excellent car service with a high level of professionalism. The staff is knowledgeable, honest, and takes the time to explain the work clearly. The quality of repairs and attention to detail really stand out.",
            stars: 5
        },
        {
            name: "Ch Imran",
            car: "Bentley Owner",
            text: "I had recently air suspension issue on my bentley i go to other garage they give me coat around 10000 but when I came to RPM auto garage, they just fixed my car only in 4000 thank you so much Mr sajjad I will recommend this garage to my friends",
            stars: 5
        },
        {
            name: "Akram Mohammed",
            car: "Audi Owner",
            text: "Anil and Sanjay are great folks. They understand the concerns of their clients and provide the best advise. I received genuine advise with my Audi and also, avoided unnecessary repair cost. You have bagged a long term customer!",
            stars: 5
        },
        {
            name: "Satish Kumar",
            car: "Car Owner",
            text: "That is the best garage in dubai From my experience! Professinal, clean, welcoming and located outside any busy areas! And decent prices.",
            stars: 5
        },
        {
            name: "Fadil Hamadallah",
            car: "Car Owner",
            text: "Professional team, Commitment to the appointment, Very good service and price. The Best in DIP area.",
            stars: 5
        },
        {
            name: "Aamir Mirza",
            car: "Car Owner",
            text: "Took a cars to garage and I have vary good experience owner is vary sincere and price is vary reasonable a bit far from Marina it's worth it.",
            stars: 5
        },
        {
            name: "Roland Ochavillo",
            car: "BMW 420i Owner",
            text: "I brought my BMW 420i 2017 model for a brake problem. They did a very good job on my car!",
            stars: 5
        },
        {
            name: "Abdulla Hiqbal",
            car: "Car Owner",
            text: "Really excellent service. You can trust Mr. Sajjad, a really genuine mechanical expert. visited today to change brake pads and was very impressed.",
            stars: 5
        },
        {
            name: "DJ Juan Garcia",
            car: "Local Guide",
            text: "The best garage in DIP! Mr. Sajjad and his team will solve any problem with any car. I'm very grateful to them.",
            stars: 5
        },
        {
            name: "Manish Nair",
            car: "Local Guide",
            text: "Recently had AC compressor issues. Sajjad and his team came in handy, did a good job, and further helped deliver the car. They are a good friendly team.",
            stars: 5
        },
        {
            name: "Syed Shahzaib",
            car: "Car Owner",
            text: "RPM Auto Garage LLC delivered outstanding service from start to finish. The team was professional, knowledgeable, and transparent throughout. My car was repaired perfectly and on time.",
            stars: 5
        }
    ];

    return (
        <section id="reviews" className="trust-section">
            <div className="container">
                <h2 className="trust-heading">Trusted by 2,500+ Owners in Dubai</h2>

                <div className="reviews-grid">
                    {reviews.map((review, i) => (
                        <div key={i} className="review-card">
                            <div className="stars">
                                {[...Array(review.stars)].map((_, index) => (
                                    <Star key={index} size={18} fill="#FFD700" stroke="#FFD700" />
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <div className="review-author">
                                <div className="author-avatar">{review.name.charAt(0)}</div>
                                <div>
                                    <h4 className="author-name">{review.name}</h4>
                                    <span className="author-car">{review.car}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trust;
