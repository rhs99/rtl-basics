import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import App from './App';

test('can receive a new user and show it on a list', async ()=>{
    render(<App />);

    const nameInput = screen.getByRole('textbox', {name: /name/i});
    const emailInput = screen.getByRole('textbox', {name: /email/i});
    const button = screen.getByRole('button');

    await user.click(nameInput);
    await user.keyboard('test');
    
    await user.click(emailInput);
    await user.keyboard('test@gmail.com');

    await user.click(button);

    const name = screen.getByRole('cell', {name: 'test'});
    const email = screen.getByRole('cell', {name: 'test@gmail.com'});

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
})
