let displaynumber = ""
let storednumber = ""
let operator = "0"
let result = ""
let primaryoutput = document.getElementById("primaryoutput")
let secondaryoutput = document.getElementById("secondary__output")

function append0()  {
    document.getElementById("output").innerText += "0"
    displaynumber += "0"
}

function append9()  {
    document.getElementById("output").innerText += "9"
    displaynumber += "9"
}

function append8()  {
    document.getElementById("output").innerText += "8"
    displaynumber += "8"
}

function append7()  {
    document.getElementById("output").innerText += "7"
    displaynumber += "7"
}

function append6()  {
    document.getElementById("output").innerText += "6"
    displaynumber += "6"
}

function append5()  {
    document.getElementById("output").innerText += "5"
    displaynumber += "5"
}

function append4()  {
    document.getElementById("output").innerText += "4"
    displaynumber += "4"
}

function append3()  {
    document.getElementById("output").innerText += "3"
    displaynumber += "3"
}

function append2()  {
    document.getElementById("output").innerText += "2"
    displaynumber += "2"
}

function append1()  {
    document.getElementById("output").innerText += "1"
    displaynumber += "1"
}
function appenddot(){
if (!displaynumber.includes('.')){
    document.getElementById("output").innerText += "."
    displaynumber += "."
}
else{

}

}

function appendclear(){
    document.getElementById("output").innerText = ""
    document.getElementById("secondary__output").innerText = ""
    displaynumber = ""
    storednumber = ""
    operator = "0"
}

function appendadd(){
    appendequals()
    operator = "+"
    document.getElementById("secondary__output").innerText += " +"
}

function appendsubtract(){
    appendequals()
    operator = "-"
    document.getElementById("secondary__output").innerText += " -"
}

function appendmultiply(){
    appendequals()
    operator = "*"
    document.getElementById("secondary__output").innerText += "*"
}

function appenddivide(){
    appendequals()
    operator = "/"
    document.getElementById("secondary__output").innerText += "/"
}

function appendequals(){
    if (operator === "+"){
        result = Number(displaynumber) + storednumber
        storednumber = result
        displaynumber = ""
        document.getElementById("output").innerText = ""
        document.getElementById("secondary__output").innerText = String(result)
    }
    else if (operator === "-"){
        result = storednumber - Number(displaynumber)
        storednumber = result
        displaynumber = ""
        document.getElementById("output").innerText = ""
        document.getElementById("secondary__output").innerText = String(result)
    }
    else if (operator === "*"){
        result = Number(displaynumber) * storednumber
        storednumber = result
        displaynumber = ""
        document.getElementById("output").innerText = ""
        document.getElementById("secondary__output").innerText = String(result)
    }
    else if (operator === "/"){
        result = storednumber / Number(displaynumber)
        storednumber = result
        displaynumber = ""
        document.getElementById("output").innerText = ""
        document.getElementById("secondary__output").innerText = String(result)
    }
    else if (operator === "0"){
        storednumber = Number(displaynumber)
        document.getElementById("secondary__output").innerText = String(displaynumber)
        document.getElementById("output").innerText = " "
        displaynumber = ""
    } 
}