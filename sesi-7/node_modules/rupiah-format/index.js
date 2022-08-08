module.exports = {

    convert: (number) => {
        let tempNum = String(number).split("").reverse()
        let rupiah = ''

        for (let i = 0; i < tempNum.length; i++) {
            if ((i + 1) % 3 == 0 && i != tempNum.length -1) {
                tempNum[i] = `.${tempNum[i]}`
            }
        }
        rupiah = `Rp. ${tempNum.reverse().join("")},00`
        return rupiah
    }

}

