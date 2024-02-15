import { render, screen, within } from '@testing-library/react';

import UserList from './UserList';

function renderComponent() {
    const users = [
        { name: 'rhs', email: 'rhs@gmail.com' },
        { name: 'r7', email: 'r7@gmail.com' }
    ]

    render(<UserList users={users} />);

    return {
        users,
    };
}

test('render one row per user', () => {
    renderComponent();

    const rows = within(screen.getByTestId('users')).getAllByRole('row');
    expect(rows).toHaveLength(2);

    // const { container } = render(<UserList users={users} />);
    // const rows = container.querySelectorAll('tbody tr');
    // expect(rows).toHaveLength(2);
})

test('render the name and email of each user', () => {
    const { users } = renderComponent();

    users.forEach((user) => {
        const name = screen.getByRole('cell', { name: user.name });
        const email = screen.getByRole('cell', { name: user.email });

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    })
})