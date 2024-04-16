import {fireEvent, render, screen} from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import {act} from "react-dom/test-utils"
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header"
import CartPage from "../CartPage"

global.fetch = jest.fn(()=>
Promise.resolve({
    json: ()=> Promise.resolve(MOCK_DATA)
})
)


test("Should load RestaurantMenu component", async()=>{
    await act (async()=> render(
    <BrowserRouter>
    <Provider store= {appStore}>
    <RestaurantMenu/>
    <Header/>
    <CartPage/>
    </Provider>
    </BrowserRouter>))

    const accordionHeader = screen.getByText("Recommended (8)")
    fireEvent.click(accordionHeader)
    expect(screen.getAllByTestId("foodItems").length).toBe(8)

    expect(screen.getByText("Cart- (0 items)")).toBeInTheDocument()
    const addBtns = screen.getAllByRole("button", {name: "Add+"})
    fireEvent.click(addBtns[0])
    expect(screen.getByText("Cart- (1 items)")).toBeInTheDocument()
    fireEvent.click(addBtns[1])
    expect(screen.getByText("Cart- (2 items)")).toBeInTheDocument()
    expect(screen.getAllByTestId("foodItems").length).toBe(12)

    fireEvent.click(screen.getByRole("button", {name: "Clear Cart"}))
    expect(screen.getAllByTestId("foodItems").length).toBe(8)
    expect(screen.getByText("Your cart is empty. Add items to your cart.")).toBeInTheDocument()
})