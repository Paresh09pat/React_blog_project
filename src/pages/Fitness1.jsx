import React from 'react'
import Card1 from '../Components/Cards/Card1'
import LatestArticleFit from './LatestArticles/LatestArticlesFit';
import SideBar from './SideBar/SideBar';

const Fitness1 = () => {
 
  return (
    <>
    <h1 className='titleName'>💪 F I T N E S S 💪</h1>
          
            <section className='container LatestSide'>
                <LatestArticleFit title={'LATEST - FITNESS NEWS'} />
                <SideBar title={'TOP-FITNESS POSTS'}/>
              </section>
              
            <section className='container'>
              <Card1 />
             </section>  
    </>
  )
}
export default Fitness1

