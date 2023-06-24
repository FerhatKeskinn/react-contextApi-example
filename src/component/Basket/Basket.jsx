import React, {useContext, useState, useEffect} from "react";
import "./Basket.css";
import BasketContext from "../../context/Basket/BasketContext";

const Basket = () => {

  const { basket } = useContext(BasketContext);
  const [totalAmount, setTotalAmount] = useState(0)

  useEffect(() => {
    let resetAmount = 1
    basket.forEach(item => {
    setTotalAmount((resetAmount * item.value).toFixed(2))
    resetAmount = resetAmount * item.value
    })
    !basket.length && setTotalAmount(0)
  }, [basket]);

  return (
    <div className="basket-card">
      <div className="basket-card__inner">
        <div className="basket-card__selectedİtem">
          {basket.map((item, index) => (
          <p key={index}> {`${item.modelDescription} Oran: ${item.value} ` }</p>
        ))}
        </div>
        <div className="basket-card__totolAmount">
          <p>Toplam tutar {totalAmount} TL</p>
        </div>
      </div>
    </div>
  );
};

export default Basket;
