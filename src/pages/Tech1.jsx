import React from 'react'
import Card1 from '../Components/Cards/Card1'
import LatestArticleTechnology from './LatestArticles/LatestArticleTechnology';
import SideBar from './SideBar/SideBar';

const Technology = () => {
  
  return (
    <>
    <h1 className='titleName'>🔭 T E C H N O L O G Y 🔭</h1>
            <section className='container'>
            
             </section>
            <section className='container LatestSide'>
                <LatestArticleTechnology title={'LATEST - TECHNOLOGY NEWS'} />
                <SideBar title={'TOP-TECH POSTS'} />
              </section>
            <section className='container'>
              <Card1 />
             </section>  
    </>
  )
}
export default Technology;

