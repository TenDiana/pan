import React, {useState, useEffect, useRef} from 'react';
import Navbar from '../Navbar/Navbar'
import './Layout.css'

const Layout = (props) => {
    const items = [
        {value: 'Главная', href: '/', icon: 'https://s3-alpha-sig.figma.com/img/2501/a6c8/c581fe43f636455d70c0156c2518747f?Expires=1633305600&Signature=Jxi6MS84n0YpTdCYE4lMxKGTCqcPCTVmeyYE5Bm~aq05zbBGsQu0Tisf-MghfHcIS9ImkJSTk5kPaVisxGEYg2P9PBGoqfbHdTrxMYUpmgSdlestQW2boV2F4gZyBWVgWI9Y0vofK4jBmGqDSTRXM0B-sSJXV~Rx0HckntxZYRJC5F45mxL9tZwxgSYIJ2Fddfge4URktwGagC5xr1NvTDrZP5YPbMh927kGIL7SW7EOvqIhq80H80xFE8wUmosnID7b5TF60QLdumOgXEe8HfzVwfhxW7afcjGpZY0YeHKXNsM9WhUzQy5k4RfjK2yxxLf5IMa5Ol7QS4dyHfSPGw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {value: 'Законопроекты', href: '/bills', icon: 'https://s3-alpha-sig.figma.com/img/12b4/d798/a9f5759ce5cfd12f5ac4bc0a4237fecf?Expires=1632096000&Signature=I4OPvZhEDdx4i7ULrqR0kskPxFxCe0CLk3hu803F7T7nRqMvROMDj6CeauKTWxVq3JW6RVW1jS7lsOI~bLvwYQQ0XwQithHptSPmYvVdEpLhv61kBZ-BEz7D6LWw9TNk7n9F6MkK6ExLJpkfp2pmjnfwUH5Ri9XFx6UfxOsLZj7hXjEO86JNkMAs1Y7vBgiE8~txFxZ3yF3dE8pwo9wkIO1PVTZN56m1zEAhjaYt26fg2i2YA4jCr~lbyTURyh7X9akbKupxLruBXKPiPQZ~LT-u4~32CxCygcJzustpHvPFlt5qUTNBOaXnalCHrNEAXCxq3mU32jF~51IbjJbSmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {value: 'Партии', href: '/parties', icon: 'https://s3-alpha-sig.figma.com/img/bacb/f60b/e33c614e8b7be82d960645faf7779dfa?Expires=1632096000&Signature=gzV80e3wM5wDdWaJt1AvrFlRQ6CIRfIh2rZO9Qj14Z4vvMvdpuT3wW8h3-kZmpMsLKb~fSB1Aa1x7jpRmx2l59QSCBlIXAxySDxy-lLpxahVDuxDppM3sS52nPAiHG3423mGvia~CLGv5AZULedsB3zUFh8C0InOKxCGzkiU7zeuYkVeOv30m9l9QVPouZSPGqU6wSniHFtq-aocb-Sej7XWzfijTneMvKDaJZuUvWA9CEZsAZTcwdt2-jtqUrHEaVrtEojxcfW6pN9~bKITrBWr2qORsPd5vYay4a6BdLoaVzv25R1~bCt0AORxdLZTn3rogm~Lk4dJR3fCWus5ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {value: 'Мои списки', href: '/list', icon: 'https://s3-alpha-sig.figma.com/img/6f5c/49ea/85c8d02b5758531ae6104694394c955c?Expires=1632096000&Signature=LqARNWg4wcxoKYPG7X1ImOg1zSI3rBkn2hsf~bIcha0vqhDfCmcPR1Hwu4b1fUy8XsrSv9veKz8sH35rsreT5MR-UqdOSjd2o1e1cC9-s9sT0e2E0M8~VE2j1OQ91WOifHJTdRyP0sn-T0E~RyKfvMvo0kKp7x-KWBwH6VNxyshOHhXrjg1QzrU0jMwWhvcxCTVu8s3Va9CtcAMilvN~na6fPQLDmOpivVBIXq87rxLwAlA6PpiRoceCKx5gwkr6SO8WDroVPSr7Ee6Xr4wGcG4StcDS6wXCfAptMvpEJJ2UpG2xsgqf1YqLieAQh4glJQFVNflqMJrPB46B1~lyqQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {value: 'Депутаты', href: '/deputy', icon: 'https://s3-alpha-sig.figma.com/img/90e7/4dc0/76265b8c7bbbf16fdf9e53b3002e2774?Expires=1632096000&Signature=RKsiplb0fIx2VWFIrv-KaKo0V6TzMnhnneqwv6vN-sULzDcZDu4ZErvKVwumAKv0kCe4CckPk-7HUXn5V5qbiP6prid3ZikmlIDZMG2TAFumNw3IutebJPp0jYaTgSTZM-pJpAdV1KKFBrQsXCFO49fHj0jiAQprPtoxpFS3TMi4elCmrc6Jn24xW~MSgBStR1LwgZg69IfkkS4Tcwpuw604mXw7Us-qlbb9cgVOyNZlA1DSaKMc8K1ZRhQYHaPCKUR6ATnfZgnTxQYek08HUKCUkVMvth6OuWB~bfiRwqzGlc1W0NSrR8xird7r3R4ElbAkVeIEdXqlHqakAx07zg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {value: 'Выборы', href: '/voting', icon: 'https://s3-alpha-sig.figma.com/img/b07b/e8c2/b51a10d0239eb836c9c756515da06ef7?Expires=1632096000&Signature=WZiddGcOLF2XsX9sdo-vVYKn3FAtZ05gb69Xp0UCofFW1cwghuOqECKox~A~4-hY0gnGM3viTz9hE1khXqxk9fCalc-wr6Kh3y2TuHgWv3Ccrk6TJDl9m7QKsCi4FaJ5IWHArym86lza4T4nLj68pZljQ8l7plQ38ACIIvUjfrYJfpAv3ja1~qy3UkyLa78BtGLorZmJ96uImr9G0fMfxhXReSg~JyskdiclGryKCfw7QPeB-DQ9DH4JICOlWo483fd7fQgAyYinxfyP5lFubF7Pwxw4dkb0e4AeKcm~B3i~9v-lMwtmKwi6-A-iKFYGntbsh2qsKfe5yRjwTeEixQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},

    ]
    const items2 = [
        {value: 'Настройки', href: '/settings', icon: 'https://s3-alpha-sig.figma.com/img/2805/00c0/5445870ef9cf173acf5f9a3e9083bab6?Expires=1632096000&Signature=hSlSEJBrGcLLgGYouplZx54VB3lDsDBpUI6Z8EC~qOVDvw75JPWd7h94ne1DC77YO9clG0~t2AAOL1DeGi4K4J~Ka5io6EcsszBr3wmzC1PquIwa5WGfvHaQeu32fmd2FeetgAGNLISUoJJ0BZ7cE0yb61LT31NcUWLDA3T-1P8jdZh5JDr1M2~H88sTZJRGos2TFwQEmEyKNMcD17pI-INelqWAFU7Vgr9Vt6QwGHAnMoknKR2aRbFW4ekYD6pq5~~Sxp0OeWpYKqHqq1V8FO5HvUSOlhElhkYyTo~gIfLF6YPuvBGG67hbLPr~469Xeo1cWsZD9t~~APOdBHc6yQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {value: 'Помощь', href: '/help', icon: 'https://s3-alpha-sig.figma.com/img/5b99/cfa1/9285d141915358df4fcaf2bac6e1f81d?Expires=1632096000&Signature=VSupPB~J-VMK6JuqVgbPgpAjwqQ38Jf0WT3ayBqjOpBTbQGvNO1RKu25-ecvZdx52PX4pf67keCZ-RTRqIOSlZqKmmuZhOmHMhTQX6LF33QNwPep0jgS4eyjqIoYDAlKGKFqRXm6WpWaHIjx7RQbIOSiCVTv03in~BE4JBlYzW9NlGFWoShKP6LikEiNFjrN2mYh9dwiYRcH1lWJ7xApdTZsOL-WvP9TB4uDAI1wx0oHUGHlnX7VEDpl0IiUFj0MyisuDSATC0HpQfWS3qVixSEqXJxWzNfYGcuGKkKiBdEv~s6yYS34DLB7n26Hqo-aSpk0UpdCimjrxB5dwhQPAw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
        {value: 'О Нас', href: '/about', icon: 'https://s3-alpha-sig.figma.com/img/2394/98b4/3ee3acfba113e676cf8ed9aeea5ef2b3?Expires=1632096000&Signature=IwsunSDj3mbJ-61lILPu27015nLwObRmK8zscn3dqSqQd9G1qxbGnfHtw9zv4D5Dr1wQXurUCpacdSySJF56Bfoqg-Zmj1S4t85R47yt7lNieIw7vfU-yH9YGS06j7-DHixF9BSjxZokC26E3~tbo~sIhwFaTIkRsdn1AYaYUZsCAGsgOvDlhh0~AD-VRUkSnzyjM9vgYetua1Ut6MRHUzbJUga9GR-jfvZK63XPqmwE-omabxStqmDwe7ihgJxFjeALtVHiO-kK-pRvJmhK9CX88jTNJKT4wEnJCW7WoGlWI86hv4ZL21iGtifu-yomV8qErjzClIGK9l~fl72auQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'},
    ]

    const [menuActive, setMenuActive] = useState(false)


    const act = () =>{
        setMenuActive(!menuActive)
    }

    return (
        <div className='container'>
            <div className='nav'>
                <Navbar
                    items={items}
                    items2={items2}
                    act={act}
                    menuActive={menuActive}
                    setMenuActive={setMenuActive}
                />
            </div>
            <div className={menuActive ? 'main act' : 'main'}>
                <main >
                    {props.children}
                </main>
            </div>

        </div>
    );
};

export default Layout;