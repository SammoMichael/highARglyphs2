import React from 'react';

class CardStudyItem extends React.Component {
 
    render() {
        return (
            <div className='flip-container'>
           <span
           className="flashcard" 
           >{this.props.flipped ? this.props.front : this.props.back}</span>
            </div>
        );
    }
}

export default CardStudyItem;
