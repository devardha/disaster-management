import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import Navbar from '../components/Navbar/Navbar';

test ('Navbar component', () =>{
    const check = screen.getByRole('checkbox');

    userEvent.click(check);

    expect(screen.getByRole(/counter is true/)).toBeInTheDocument();
})