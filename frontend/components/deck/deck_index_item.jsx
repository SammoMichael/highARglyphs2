import React from 'react';
import { Link } from 'react-router-dom';

const DeckIndexItem = ({ deck }) => (
    <ul className="deck-box">
        <span className='deck-thumb' />
        <li className="index-title">{deck.title}</li>
    </ul>
    );

export default DeckIndexItem;
