import React from 'react'
import Card1 from '../Components/Cards/Card1'
import LatestArticleFood from './LatestArticles/LatestArticleFood';
import SideBar from './SideBar/SideBar';

const Food = () => {
 
  return (
    <>
    <h1 className='titleName'>🥗 F O O D 🥗</h1>
            <section className='container'>
              {/* <Card1 /> */}
             </section>
            <section className='container LatestSide'>
                <LatestArticleFood title={'LATEST - FOOD NEWS'} />
                <SideBar title={'TOP-FOOD POSTS'} />
              </section>
            <section className='container'>
              <Card1 />
             </section>  
    </>
  )
}
export default Food;

