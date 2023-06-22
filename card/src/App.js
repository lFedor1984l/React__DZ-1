import React from 'react';
import FooterCard from './components/FooterCard';
import HeaderCard from './components/HeaderCard';
import ItemsCards from './components/ItemsCards';

import './App.css';

class App extends React.Component {
 constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Халат',
          img: 'halat.jpg',
          desc: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне',
          category: 'Халаты',
          price: '3000p',
          sale: true,
        },
        {
          id: 2,
          title: 'Белый халат',
          img: 'whiteHalat.jpg',
          desc: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне',
          category: 'Халаты',
          price: '12000p',
          sale: false,
        },
        {
          id: 3,
          title: 'Пеньюар',
          img: 'penuar.jpg',
          desc: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне',
          category: 'Халаты',
          price: '11000p',
          sale: false,
        },
        {
          id: 4,
          title: 'Черный халат',
          img: 'BlackHalat.jpg',
          desc: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне',
          category: 'Халаты',
          price: '7000p',
          sale: true,
        },
        {
          id: 5,
          title: 'Комплект',
          img: 'komplect.jpg',
          desc: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне',
          category: 'Халаты',
          price: '5000p',
          sale: true,
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <HeaderCard/>
        <ItemsCards items = {this.state.items}/>
        <FooterCard/>
      </div>
    );
  }
}

export default App;
