import './App.scss';
import {Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import Projects from './components/Project'

const projectInfo = [
  {
    id: 1,
    projectTitle: 'Sunnyside Landing page',
    desktop: '/images/sunnyside.png',
    description: 'This project is a simple and beautiful landing page. it is provided by frontend mentor for upskilling purpose.',
    category: 'Frontend',
    tools: ['html', 'css', 'flexbox', 'vanilla javascript'],
    live: 'https://jean-kassyl.github.io/sunnyside-landingPage',
    github: 'https://github.com/Jean-kassyl/sunnyside-landingPage'
  },
  {
    id: 2,
    projectTitle: 'Fylo Landing page',
    desktop: '/images/fylo.png',
    description: 'This project is a simple and beautiful landing page. it is provided by frontend mentor for upskilling purpose.',
    category: 'Frontend',
    tools: ['html', 'css', 'flexbox','grid', 'vanilla javascript'],
    live: 'https://jean-kassyl.github.io/fylo-landingPage',
    github: 'https://github.com/Jean-kassyl/fylo-landingPage'
  },
  {
    id: 3,
    projectTitle: 'Todo app',
    desktop: '/images/todo.png',
    description: 'This project is a simple todo app with some great features. it is provided by frontend mentor for practice purpose.',
    category: 'Frontend',
    tools: ['html', 'css', 'flexbox', 'vanilla javascript'],
    live: 'https://jean-kassyl.github.io/todo-app/',
    github: 'https://github.com/Jean-kassyl/todo-app'
  }
];

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home info={projectInfo}/>} />
      <Route path='/projects' element={<Projects info={projectInfo} />} />
    </Routes>
  )
}

export default App;
