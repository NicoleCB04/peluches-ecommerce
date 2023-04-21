import './RadioButtons.css'


const RadioButtons = ({ element, orientation = 'H' }) => {
    console.log(element);
    return (
        orientation === 'H' ?
            <section className="radio-section">
                <div className="radio-list">
                    {
                        element.items.map((item, index) => {
                            return <div className="radio-item" key={`radio-item-${index}`}>
                                <input type="radio" name={element.key} id={`radio-${item.value}-${item.id}`} />
                                <label for={`radio-${item.value}-${item.id}`}>{item.value}</label>
                            </div>
                        })
                    }
                </div>
            </section>
            :
            <section className="radio-section-vertical">
                <div className="radio-list-vertical">
                    {
                        element.items.map((item, index) => {
                            return <div className="radio-item-vertical" key={`radio-item-${index}`}>
                                <input type="radio" name={element.key} id={`radio-${item.value}-${item.id}`} />
                                <label for={`radio-${item.value}-${item.id}`}>{item.value}</label>
                            </div>
                        })
                    }
                </div>
            </section>
    )
}

export default RadioButtons;