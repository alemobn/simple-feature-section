import Title from './Components/Title/Title';
import Paragraph from './Components/Paragraph/Paragraph';
import Card from './Components/Card/Card';
import Photo01 from './assets/photo_1.png';
import Photo02 from './assets/photo_2.png';
import Photo03 from './assets/photo_3.png';
import { MdFrontHand } from 'react-icons/md';
import { IoBagHandleSharp, IoChatbubbleEllipsesSharp } from 'react-icons/io5';
import './App.css';

function App() {
  const cards =
    [
      {
        icon: MdFrontHand,
        iconColor: 'yellow',
        title: 'Collect Feedback at Multiple Touchpoints',
        description: 'Provide a comprehensive understanding of the customer experience',
        image: Photo01
      },
      {
        icon: IoBagHandleSharp,
        iconColor: 'cyan',
        title: 'Ask Targeted and Specific Questions',
        description: 'Avoid vague or open-ended questions that may not yield actionable insights.',
        image: Photo02
      },
      {
        icon: IoChatbubbleEllipsesSharp,
        iconColor: 'pink',
        title: 'Prioritize and Respond to Feedback',
        description: 'Communicate the changes or improvements you\'ve made in response to their feedback.',
        image: Photo03
      }
    ]

  return (
    <div className="container">
      <Title />
      <Paragraph />

      <section className="cards">
        {cards.map(function (card, index) {
          return (
            <Card
              key={index}
              icon={card.icon}
              iconColor={card.iconColor}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
