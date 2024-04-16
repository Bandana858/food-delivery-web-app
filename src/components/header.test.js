import { fireEvent, render, screen } from "@testing-library/react"
import Header from "./Header"
import { Provider } from "react-redux";
import appStore from "../utils/appStore"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"



test("Should load Header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button")
    expect(loginButton).toBeInTheDocument
})

test("Should load Header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByText("Login")
    expect(loginButton).toBeInTheDocument
})

test("Should load Header component with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"})
    expect(loginButton).toBeInTheDocument
})

test("Should load Header component with cart items zero", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart- (0 items)")
    expect(cartItems).toBeInTheDocument
})

test("Should load Header component with cart items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText(/Cart/)
    expect(cartItems).toBeInTheDocument
})

test("Should change login button to logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const logInButton = screen.getByRole("button", {name: "Login"})
    fireEvent.click(logInButton)
    const logoutButton = screen.getByRole("button", {name: "Logout"})
    expect(logoutButton).toBeInTheDocument()
})