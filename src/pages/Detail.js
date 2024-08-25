import { useParams } from "react-router-dom";
import Nav from '../component/CommunityNav';
import DetailCss from '../css/Detail.module.css';

function Detail(props) {
  let {id} = useParams();
  return(
    <>
      <Nav />
      <div style={{ display: "flex", justifyContent: "center",}}>
        <div className={DetailCss.detail_container}>
          <div className={DetailCss.detail_wrapper}>
            <div className={DetailCss.detail_header}>
              <div className={DetailCss.profile} />
              <h1>{props.products[id].name}</h1>
            </div>
            <div className ={DetailCss.detail_content}>
              <div className={DetailCss.detail_img}>
                <img src={process.env.PUBLIC_URL +'/vegetable.jpg'}></img>
              </div>
              <div className={DetailCss.detail_title}>
                <h1>{props.products[id].title}</h1>
              </div>
              <div className={DetailCss.detail_price} >
                <p>{props.products[id].price}원</p>
              </div>
              <div className={DetailCss.detail_info}>
                <p>{props.products[id].content}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </>
  )
}

export default Detail;
