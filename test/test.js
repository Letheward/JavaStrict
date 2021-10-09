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

{
    const Vector4 = (x, y, z, w) => ({
        x, y, z, w
    })

    const Matrix4 = (a, b, c, d) => ({
        v0: Vector4(a, b, c, d),
        v1: Vector4(b, c, d, a),
        v2: Vector4(b, c, d),
        v3: Vector4(),
    })

    console.log(Matrix4(1, 2, 3, 4))
}

{
    const Vector4 = (x, y, z, w) => ([
        x, y, z, w
    ])

    const Matrix4 = () => ([
        Vector4(1, 0, 0, 0),
        Vector4(0, 1, 0, 0),
        Vector4(0, 0, 1, 0),
        Vector4(0, 0, 0, 1),
    ])
    
    console.log(Vector4(1, 2, 3, 4))
    console.log(Matrix4())
    console.log(Matrix4()[2][2])
}

