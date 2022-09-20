import React from 'react'
import Card1 from '../Components/Cards/Card1'
import LatestArticleHollywood from './LatestArticles/LatestArticleHollywood';
import SideBar from './SideBar/SideBar';

const Hollywood = () => {
  return (
    <>
    <h1 className='titleName'>🎞️ H O L L Y W O O D 🎞️</h1>
          
            <section className='container LatestSide'>
                <LatestArticleHollywood title={'LATEST - HOLLYWOOD NEWS'} />
                <SideBar title={'TOP-HOLLYWOOD POSTS'}/>
              </section>
            <section className='container'>
              <Card1 />
             </section>  
    </>
  )
}
export default Hollywood;

