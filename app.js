const API_KEY = "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"
const submitButton = document.querySelector("#submit")
const outPutElement = document.querySelector("#output")
const inputElement = document.querySelector("input")
const historyElement = document.querySelector(".history")
const buttonElement = document.querySelector("button")

function changeInput(value) {
    const inputElement = document.querySelector("input")
    inputElement.value = value  
}   

async function getMessage() {
    console.log("clicked")
    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: inputElement.value + "responda como um chefe de cozinha e responda com no máximo de 300 caracteres"}],
            max_tokens: 150 // Coloque 'max-tokens' entre aspas simples
        })
    }
    try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", options);
        const data = await response.json();
        console.log(data);
        outPutElement.textContent = data.choices[0].message.content
        if(data.choices[0].message.content){
            const pElement = document.createElement("p")
            pElement.textContent = inputElement.value
            pElement.addEventListener("click", () => changeInput(pElement.textContent))
            historyElement.append(pElement)
        }
    } catch (error) {
        console.error("Erro na solicitação:", error);
    }

}

submitButton.addEventListener("click", getMessage)

function clearInput() {
    inputElement.value = ""
}

buttonElement.addEventListener("click", clearInput)