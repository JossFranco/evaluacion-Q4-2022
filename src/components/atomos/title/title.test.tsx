import { render, screen } from '@testing-library/react'
import { Title } from './title'

describe('Title Component', () => {
test('Should render title', () => {
    render(<Title principalText='principal title'/>);
    const title = screen.getByText('principal title');
    expect(title).toBeDefined()
});
test('Should have class title-text',()=> {	
    render(<Title principalText='principal title'/>);
    const titleFound = screen.getByText('principal text');
    expect(titleFound).toHaveClass('header__title')
})
});