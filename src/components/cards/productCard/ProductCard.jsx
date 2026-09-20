import './style.scss'

import { useState } from 'react'
import Btn from '../../UI/btn/Btn'
import Counter from '../../counter/Counter'

export default function ProductCard({
    name,
    price,
    rating,
    preview,
    link,
    onItemChange,
    hasItem,
    onHasItemChange,
}) {
    const [localHasItem, setLocalHasItem] = useState(false)
    const isControlled = hasItem !== undefined
    const isItemAdded = isControlled ? hasItem : localHasItem

    function addItemToCart() {
        handleHasItemChange(true)
    }

    function handleHasItemChange(isActive) {
        if (isItemAdded === isActive) {
            return
        }

        if (!isControlled) {
            setLocalHasItem(isActive)
        }

        onHasItemChange?.(isActive)
        onItemChange?.(isActive)
    }

    return (
        <div className="product-card">
            <a href={link} className="product-card__head">
                <img src={preview} alt="" />
            </a>

            <a href={link} className="product-card__body">
                <div className="product-card__name h5">
                    {name}
                </div>

                <div className="product-card__row">
                    <div className="product-card__price">
                        <span>$</span>
                        <span>{price}</span>
                    </div>

                    <div className="product-card__rating">
                        <span>{rating}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M19.53 23.3152L12.063 17.8272L4.596 23.3152L7.463 14.4522L0 8.99922H9.214L12.063 0.121216L14.912 8.99922H24.125L16.663 14.4522L19.53 23.3152Z" fill="#F5D426" />
                        </svg>
                    </div>
                </div>
            </a>

            <div className="product-card__button">
                {isItemAdded ? (
                    <Counter
                        onHasItemChange={handleHasItemChange}
                    />
                ) : (
                    <Btn
                        type="button"
                        className="fill"
                        onClick={addItemToCart}
                    >
                        Add to cart
                    </Btn>
                )}
            </div>
        </div>
    )
}