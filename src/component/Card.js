import CardCss from "../css/Card.module.css";

function Card() {
  return(
    <div className={CardCss.item}>
      <div className={CardCss.header}>
        <div className={CardCss.profile} />
        <div className={CardCss.name}> 김동현</div>
      </div>  
      <img className={CardCss.image} src={process.env.PUBLIC_URL +'/vegetable.jpg'} />
      <div className={CardCss.info}>
        <h1 className={CardCss.product_name}>고구마</h1>
        <p className={CardCss.product_price}>가격</p>
        <p className={CardCss.product_detail}>유기농입니다. 맛있어요</p>
      </div>
    </div>
  )
}

export default Card;