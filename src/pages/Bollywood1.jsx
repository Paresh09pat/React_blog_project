import React from 'react'
import Card1 from '../Components/Cards/Card1'
import LatestArticleBollywood from './LatestArticles/LatestArticleBollywood';
import SideBar from './SideBar/SideBar';

const Bollywood = () => {
  
  return (
    <>
    <h1 className='titleName'>🎥 B O L L Y W O O D 🎥</h1>

            <section className='container LatestSide'>
                <LatestArticleBollywood title={'LATEST - BOLLYWOOD NEWS'}/>
                <SideBar title={'TOP-BOLLYWOOD POSTS'} />
            </section>

            <section className='container'>
              <Card1 />
             </section>  
    </>
  )
}
export default Bollywood;

