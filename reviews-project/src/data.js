const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
      'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
      'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
      'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];

export default reviews;

// const Review = () => {
//   const [review, setReview] = useState(0);

//   const { name, image, job, text } = reviews[review];

//   const checkNumber = (number) => {
//     if (number > reviews.length - 1) {
//       return 0;
//     }
//     if (number < 0) {
//       return reviews.length - 1;
//     }
//     return number;
//   };

//   // Next
//   const nextReview = () => {
//     setReview((review) => {
//       let newReview = review + 1;
//       return checkNumber(newReview);
//     });
//   };

//   // Prev
//   const prevReview = () => {
//     setReview((review) => {
//       let newReview = review - 1;
//       return checkNumber(newReview);
//     });
//   };

//   // Random
//   const randomReview = () => {
//     const randomNum = Math.floor(Math.random() * reviews.length);
//     setReview(checkNumber(randomNum));
//   };

//   return (
//     <article className="review">
//       <div className="img-container">
//         <img src={image} alt={name} className="person-img" />
//         <span className="quote-icon">
//           <FaQuoteRight />
//         </span>
//       </div>
//       <h4 className="author">{name}</h4>
//       <p className="job">{job}</p>
//       <p className="info">{text}</p>
//       <div className="button-container">
//         <button className="prev-btn" onClick={prevReview}>
//           <FaChevronLeft />
//         </button>
//         <button className="next-btn" onClick={nextReview}>
//           <FaChevronRight />
//         </button>
//       </div>
//       <button className="random-btn" onClick={randomReview}>
//         Random
//       </button>
//     </article>
//   );
// };