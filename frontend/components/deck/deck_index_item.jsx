import React from 'react';
import { Link } from 'react-router-dom';

const DeckIndexItem = ({ deck }) => (
    <li>
        {deck.title}
    </li>
    );

export default DeckIndexItem;
