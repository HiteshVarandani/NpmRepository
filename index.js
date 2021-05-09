function getHostName(input) {
    if (input === undefined || input === null || input === '') {
        return `The Host Name is Hitesh.
            You have given ${input} as input`;
    } else {
        return `You have not provided with an input`;
    }
}

module.exports = getHostName;