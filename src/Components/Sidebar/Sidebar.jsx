import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import dev from '../../assets/1.png'
import intel from '../../assets/intel.png'
import dynamos from '../../assets/download.png'
import AI from '../../assets/lho.png'
import uphold from '../../assets/uphold.png'


const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
                <img src={home} alt="" /><p>Home</p>
            </div>
            <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
                <img src={game_icon} alt="" /><p>Game</p>
            </div>
            <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
                <img src={automobiles} alt="" /><p>Automobiles</p>
            </div>
            <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
                <img src={sports} alt="" /><p>Sports</p>
            </div>
            <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
                <img src={entertainment} alt="" /><p>Entertaiment</p>
            </div>
            <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
                <img src={tech} alt="" /><p>Tech</p>
            </div>
            <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
                <img src={music} alt="" /><p>Music</p>
            </div>
            <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
                <img src={blogs} alt="" /><p>Blogs</p>
            </div>
            <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
                <img src={news} alt="" /><p>News</p>
            </div>
            <hr />
        </div>
        <div className="subscribed-list">
            <h3>Subscribed</h3>
            <div className="side-link">
                <a href="https://www.youtube.com/channel/UCzvjcSvuGhh9gx73OX6JN5w"><img src={dev} alt="" /></a>
                <a href="https://www.youtube.com/channel/UCzvjcSvuGhh9gx73OX6JN5w"><p>Dev Buster</p></a>
            </div>
            <div className="side-link">
                <a href="https://www.youtube.com/channel/UCUO1ck-4L1SZgbr8RXabeYQ"><img src={intel} alt="" /></a>
                <a href="https://www.youtube.com/channel/UCUO1ck-4L1SZgbr8RXabeYQ"><p>Intel Gamer</p></a>
            </div>
            <div className="side-link">
                <a href="https://www.youtube.com/@DynamoGaming"><img src={dynamos} alt="" /></a>
                <a href="https://www.youtube.com/@DynamoGaming"><p>Dynamos</p></a>
            </div>
            <div className="side-link">
                <a href="https://www.youtube.com/@ai_insight_"><img src={AI} alt="" /></a>
                <a href="https://www.youtube.com/@ai_insight_"><p>AI Insight</p></a>
            </div>
            <div className="side-link">
                <a href="https://www.youtube.com/@MicrosoftDeveloper"><img src={uphold} alt="" /></a>
                <a href="https://www.youtube.com/@MicrosoftDeveloper"><p>Developer</p></a>
            </div>
        </div>
    </div>
  )
}

export default Sidebar