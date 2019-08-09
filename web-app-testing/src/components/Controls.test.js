import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Controls from './Controls';

describe('<Controls />', () => {
    it('renders without crashing', () => {
        render(<Controls />)
    });
    it('strike', () => {
        const { getByText } = render(<Controls strike={() => console.log('strike')} />);
        const strikeButton = getByText(/strike/i);
        fireEvent.click(strikeButton);
    });
});