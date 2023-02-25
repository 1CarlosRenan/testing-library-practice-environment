import { render, screen } from "@testing-library/react"
import { CheckNumber } from "."
import userEvent from '@testing-library/user-event'

function getInput() {
  return screen.getByPlaceholderText('Digite um número')
}

describe('<CheckNumber />', () => {
  test('renders a title', () => {
    render(<CheckNumber />)

    const title = screen.getByText('Componente Par ou Ímpar')

    expect(title).toBeInTheDocument()
  })

  test('renders an input', () => {
    render(<CheckNumber />)

    const input = getInput()

    expect(input).toBeInTheDocument()
  })
})


describe('when there is no error', () => {
  test('renders the error message section empty', () => {
    render(<CheckNumber />);

    const alert = screen.getByRole('alert');

    expect(alert).toBeInTheDocument();
    expect(alert).toHaveTextContent('');
  })
})

describe('when the user types an odd number', () => {
  test('renders Ímpar on the screen', () => {
    render(<CheckNumber />);
    const input = getInput()

    userEvent.clear(input);
    userEvent.type(input, '1');

    const section = screen.getByRole("presentation")

    expect(section).toHaveTextContent("Ímpar")
  })
})

describe('when the user types an even number', () => {
  test('renders Ímpar on the screen', () => {
    render(<CheckNumber />);
    const input = getInput()

    userEvent.clear(input);
    userEvent.type(input, '12');

    const section = screen.getByRole("presentation")

    expect(section).toHaveTextContent("Par")
  })
})

describe('when the user types a not number value', () => {
  test('renders the error message on the screen', () => {
    render(<CheckNumber />);
    const input = getInput()

    userEvent.clear(input);
    userEvent.type(input, 'batata');

    const section = screen.getByRole("alert")

    expect(section).toHaveTextContent("Por favor, digite um número.")
  })
})