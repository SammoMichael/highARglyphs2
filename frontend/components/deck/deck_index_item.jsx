import React from 'react';
import { Link } from 'react-router-dom';

const DeckIndexItem = ({ deck }) => (
    <li className="deck-box">
        <span className='deck-thumb' />
        <span className="index-title">{deck.title}</span>
    </li>
    );

export default DeckIndexItem;
