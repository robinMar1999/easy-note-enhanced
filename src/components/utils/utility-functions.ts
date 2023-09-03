export const deepCopy = <K,T>(existingMap: Map<K,T>) => {
    return new Map<K,T>(
        JSON.parse(
            JSON.stringify(Array.from(existingMap))
        )
    )
}