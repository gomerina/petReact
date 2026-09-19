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