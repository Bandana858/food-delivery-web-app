import {fireEvent, render, screen} from "@testing-library/react";
import Body from "../Body" 
import MOCK_DATA from "../mocks/mockResListData.json"
import {act} from "react-dom/test-utils"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

// creating mock function//
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})


test("Should render the Body component with search button", async ()=>{
   await act (async()=>render(
   <BrowserRouter>
   <Body/>
   </BrowserRouter>))

   const cardsBeforeSearch = screen.getAllByTestId("resCard")
   expect(cardsBeforeSearch.length).toBe(4)

   const searchBtn = screen.getByRole("button", {name: "Search"})
   console.log(searchBtn)

   const searchInput = screen.getByTestId("searchInput")
   fireEvent.change(searchInput, {target: {value: "Pizza"}})
   fireEvent.click(searchBtn)
//    expect(searchBtn).toBeInTheDocument()//
const cardsAfterSearch = screen.getAllByTestId("resCard") 
expect(cardsAfterSearch.length).toBe(1)
})