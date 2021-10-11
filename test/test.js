/* ==== Test ==== */

"use strict"

{
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
        
        let s = Sprite()
        let h = Hero() 

        console.log(s)
        console.log(h)
    }
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
    const Vector4 = (x, y, z, w) => [
        x, y, z, w
    ]

    const Matrix4 = () => [
        Vector4(1, 0, 0, 0),
        Vector4(0, 1, 0, 0),
        Vector4(0, 0, 1, 0),
        Vector4(0, 0, 0, 1),
    ]
    
    console.log(Vector4(1, 2, 3, 4))
    console.log(Matrix4())
    console.log(Matrix4()[2][2])
}

{
    /* 
        Church Numerals:

        0 = \f.\x.x
        1 = \f.\x.f x
        2 = \f.\x.f (f x) 

        add = \(a, b).\f.\x.(a f) ((b f) x)
        mul = \(a, b).\f.a (b f)
        exp = \(a, b).b a
        dec = \n.\f.\x.n (\g.\h.h(g f)) (\u.x) (\u.u)
        sub = \(a, b).(b dec) a
    */

    const zero = f => x => x
    const one = f => x => f(x)

    const add = (a, b) => 
        f => 
            x => a(f) (b(f) (x))

    const dec = n => f => x =>
        n(g => h => h(g(f))) 
            (u => x) 
                (u => u)
    
    const sub = (a, b) => b(dec) (a)

    const mul = (a, b) =>
        f => a(b(f))

    const exp = (a, b) => b(a)

    const two = add(one, one)
    const three = add(two, one)
    const four = exp(two, two)

    console.log(
        exp(one, two)(x => x + x)(1)
    )
    
    console.log(
        sub(four, three)(x => x + x)(1)
    )
    
    console.log(
        // (3 * 1) ^ (((2 + 3) * 2) - 3 ^ 2) - 2 = 3 ^ 1 - 2 = 1
        sub(
            exp(
                mul(three, one), 
                sub(
                    mul(add(two, three), two),
                    exp(three, two)
            )),
            two
        )
            ((x) => [
                x[0] + x[1] + x[2], // 1 + 2 + 3 = 6
                x[1] + x[2] * x[0], // 2 + 3 * 1 = 5
                x[2] + x[0] % x[1]  // 3 + 1 % 2 = 4
            ])
                ([1, 2, 3])
    )
}
