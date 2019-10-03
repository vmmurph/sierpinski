const baseLength = 100

const v1 = { x: 0, y: 0 }
const v2 = { x: baseLength, y: 0 }
const v3 = {
    x: baseLength / 2,
    y: Math.sqrt(Math.pow(baseLength, 2) - Math.pow(baseLength / 2, 2))
}
const points = [v1, v2, v3]
let point = v1

getRandomVertex = () => {
    const r = Math.ceil(Math.random() * 3)
    if (r === 1) return v1
    if (r === 2) return v2
    else return v3
}

pushRandomPoint = () => {
    const rando = getRandomVertex()
    const newPoint = { x: (point.x + rando.x) / 2, y: (point.y + rando.y) / 2 }
    points.push(newPoint)
    // console.log(`going from point (${point.x}, ${point.y}) to random vertex (${rando.x}, ${rando.y})`)
    // console.log(`new point is (${newPoint.x}, ${newPoint.y})`)
    point = newPoint
}
