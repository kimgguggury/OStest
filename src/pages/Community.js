import Nav from '../component/CommunityNav';
import communityCss from '../css/Community.module.css';
import Card from '../component/Card';
function Community() {
  return(
    <div>
      <Nav />
      <section>
        <div className={communityCss.wrapper}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          
        
        </div>
      </section>
    </div>
  )
}

export default Community;