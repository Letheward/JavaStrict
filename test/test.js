/* ==== Test ==== */

"use strict"

const Vector3 = () => ({
    x: 0,
    y: 0,
    z: 0,
})

const Person = () => ({
    name: {
        first: "",
        last: "",
    },
    age: 0,
    gender: "",
    interests: "",
})

const Sprite = () => ({
    actor: Person(),
    pos: Vector3()
})

const Hero = () => {
    let m = Sprite()
    m.hp = 100
    return m
}


/* ==== Main ==== */

{
    const Vector3 = (x, y, z) => ({
        x,
        y,
        z
    })

    let c = Vector3(1, 2, 3)
    console.log(c)
}

{
    let p = Person()
    let q = Person()
    p.name.first = "Lamb"
    p.name.last  = "Da"
    console.log(p)
    console.log(q)
}
    
{
    let a = []
    
    for (let i = 0; i < 1000; i++) {
        a.push(Vector3())
    }

    a[3].x = 2
    console.log(a)
    console.log(a[3])
}

{
    let s = Sprite()
    console.log(s)
}

{
    let h = Hero()
    console.log(h)
}

