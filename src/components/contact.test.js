import { render, screen } from "@testing-library/react"
import Contact from "./Contact"
import "@testing-library/jest-dom"

describe("Contact us page test case", ()=>{

    beforeAll(()=>{
        console.log("Before all")
    })

beforeEach(()=>{
    console.log("Before each")
})

afterAll(()=>{
    console.log("After all")
})

afterEach(()=>{
console.log("After each")
})


test("Should load contact us component", ()=>{
    render(<Contact/>)

    const heading = screen.getByRole("heading")
    expect(heading).toBeInTheDocument();

})

test("Should load button inside my contact component", ()=>{
    render(<Contact/>)

    const button = screen.getByText("Submit")
    expect(button).toBeInTheDocument();
})

test("Should load input name inside my contact us component", ()=>{
    render(<Contact/>)

    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument
})

test("Should load 2 input name inside my contact component", ()=>{
    render(<Contact/>)

    const inputBoxes= screen.getAllByRole("textbox")
    expect(inputBoxes).toBeInTheDocument
})

test("Should load 2 input name inside my contact component", ()=>{
    render(<Contact/>)

    const inputBoxes= screen.getAllByRole("textbox")
    console.log(inputBoxes.length)

    expect(inputBoxes.length).toBe(2)
})
})